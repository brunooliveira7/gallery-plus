import type { Album } from "../models/album";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../../helpers/api";

export default function useAlbums() {
  //Chama o useQuery para buscar os dados
  const { data, isLoading } = useQuery<Album[]>({
    queryKey: ["albums"], // Define a chave armazena os dados em cache
    queryFn: () => fetcher("/albums"), //Função que de fato busca os dados
  });

  return {
    albums: data || [],
    isLoadingAlbums: isLoading,
  };
}
