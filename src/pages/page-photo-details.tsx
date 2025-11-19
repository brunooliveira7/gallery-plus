import Container from "../components/container";
import Text from "../components/text";
import { useParams } from "react-router";
import type { Photo } from "../contexts/photos/models/photo";
import Skeleton from "../components/skeleton";
import PhotosNavigator from "../contexts/photos/components/photos-navigator";

export default function PagePhotoDetails() {
  //para capturar o :id da rota
  const { id } = useParams();

  //apenas para fazer o test do mock
  const isLoadingPhoto = false;
  const photo = {} as Photo;

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text variant="heading-large">{photo.title}</Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotosNavigator />
      </header>
    </Container>
  );
}
