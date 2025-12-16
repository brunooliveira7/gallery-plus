import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api, fetcher } from "../../../helpers/api";
import type { Photo } from "../models/photo";
import type { PhotoNewFormSchema } from "../schemas";

interface PhotoDetailResponse extends Photo {
  nextPhotoId?: string;
  previousPhotoId?: string;
}

export default function usePhoto(id?: string) {
  const { data, isLoading } = useQuery<PhotoDetailResponse>({
    queryKey: ["photo", id],
    queryFn: () => fetcher(`/photos/${id}`),
    enabled: !!id,
  });

  const queryClient = useQueryClient();

  //fazendo a requisição na API para criar nova foto
  async function createPhoto(payload: PhotoNewFormSchema) {
    try {
      //cria a foto
      const { data: photo } = await api.post<Photo>("/photos", {
        title: payload.title,
      });

      //sobe a imagem
      await api.post(
        `/photos/${photo.id}/image`,
        {
          file: payload.file[0],
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      //se tiver album atualiza
      if (payload.albumIds && payload.albumIds.length > 0) {
        await api.put(`/photos/${photo.id}/albums`, {
          albumIds: payload.albumIds,
        });
      }

      //invalidar o cache
      queryClient.invalidateQueries({
        queryKey: ["photos"],
      });

      return photo;
    } catch (error) {
      throw error;
    }
  }

  return {
    photo: data,
    nextPhotoId: data?.nextPhotoId,
    previousPhotoId: data?.previousPhotoId,
    isLoadingPhoto: isLoading,
    createPhoto,
  };
}
