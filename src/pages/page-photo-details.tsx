import Text from "../components/text";
import { useParams } from "react-router";

export default function PagePhotoDetails() {
  //para capturar o :id da rota
  const { id } = useParams();

  return (
    <>
      <Text variant="heading-medium">Página detalhe da foto</Text>
      <hr />
      <Text variant="heading-medium">Id da foto: {id}</Text>
    </>
  );
}
