import { useQuery } from "@tanstack/react-query";
import type { Photo } from "../models/photo";
import { fetcher } from "../../../helpers/api";
import { useQueryState, createSerializer, parseAsString } from "nuqs";

//transformando o id em uma string
const toSearchParams = createSerializer({
  albumId: parseAsString,
});

export default function usePhotos() {
  const [albumId, setAlbumId] = useQueryState("albumId"); //Nuqs - para o filtro

  const { data, isLoading } = useQuery<Photo[]>({
    queryKey: ["photos", albumId],
    queryFn: () => fetcher(`/photos${toSearchParams({ albumId })}`),
  });

  return {
    photos: data || [],
    isLoadingPhotos: isLoading,
    filters: {
      albumId,
      setAlbumId,
    },
  };
}
