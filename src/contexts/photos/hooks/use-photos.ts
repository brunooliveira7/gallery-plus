import { useQuery } from "@tanstack/react-query";
import type { Photo } from "../models/photo";
import { fetcher } from "../../../helpers/api";
import { useQueryState, createSerializer, parseAsString } from "nuqs";

//transformando o id em string - controla o aparecimento das fotos vindo da API selecionando os filtros
const toSearchParams = createSerializer({
  albumId: parseAsString,
  q: parseAsString,
});

export default function usePhotos() {
  const [albumId, setAlbumId] = useQueryState("albumId"); //Nuqs - para o filtro
  //parâmetro para busca no input
  const [q, setQ] = useQueryState("q");

  const { data, isLoading } = useQuery<Photo[]>({
    queryKey: ["photos", albumId, q],
    queryFn: () => fetcher(`/photos${toSearchParams({ albumId, q })}`),
  });

  return {
    photos: data || [],
    isLoadingPhotos: isLoading,
    filters: {
      albumId,
      setAlbumId,
      q,
      setQ,
    },
  };
}
