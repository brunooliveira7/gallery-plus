import { useForm } from "react-hook-form";
import Alert from "../../../components/alert";
import Button from "../../../components/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogClose,
} from "../../../components/dialog";
import ImagePreview from "../../../components/image-preview";
import InputSingleFile from "../../../components/input-single-file";
import InputText from "../../../components/input-text";
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import type { Album } from "../../albums/models/album";

interface PhotoNewDialogProps {
  trigger: React.ReactNode;
}

export default function PhotoNewDialog({ trigger }: PhotoNewDialogProps) {
  const form = useForm();

  //mock dos álbuns
  const isLoadingAlbums = false;
  const albums: Album[] = [
    {
      id: "3421",
      title: "Album 1",
    },
    {
      id: "456",
      title: "Album 2",
    },
    {
      id: "789",
      title: "Album 3",
    },
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Adicionar foto</DialogHeader>

        <DialogBody className="flex flex-col gap-5">
          <InputText placeholder="Adicione um título" maxLength={255} />

          <Alert>
            Tamanho máximo: 50MB
            <br />
            Você pode selecionar arquivos em PNG, JPG ou JPEG
          </Alert>

          <InputSingleFile
            form={form}
            allowedExtensions={["png", "jpg", "jpeg"]}
            maxFileSizeInMB={50}
            replaceBy={<ImagePreview className="w-full h-56" />}
          />

          <div className="space-y-3">
            <Text variant="label-small">Selecionar álbum</Text>

            <div className="flex flex-wrap gap-3">
              {!isLoadingAlbums &&
                albums?.length > 0 &&
                albums.map((album) => (
                  <Button
                    key={album.id}
                    variant="ghost"
                    size="sm"
                    className="truncate"
                  >
                    {album.title}
                  </Button>
                ))}

              {isLoadingAlbums &&
                Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton
                    key={`album-loading-${index}`}
                    className="h-7 w-20"
                  />
                ))}
            </div>
          </div>
        </DialogBody>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary"> Cancelar</Button>
          </DialogClose>
          <Button>Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
