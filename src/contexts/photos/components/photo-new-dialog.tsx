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
import useAlbums from "../../albums/hooks/use-albums";
import { photoNewFormSchema, type PhotoNewFormSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

interface PhotoNewDialogProps {
  trigger: React.ReactNode;
}

export default function PhotoNewDialog({ trigger }: PhotoNewDialogProps) {
  //estado para controlar a abertura e fechamento do modal
  const [modalOpen, setModalOpen] = useState(false);

  const form = useForm<PhotoNewFormSchema>({
    resolver: zodResolver(photoNewFormSchema),
  });

  const { albums, isLoadingAlbums } = useAlbums();

  const file = form.watch("file");
  const fileSource = file?.[0] ? URL.createObjectURL(file[0]) : undefined;

  const albumsIds = form.watch("albumIds");

  //apagando os dados do formulário ao cancelar add de foto
  useEffect(() => {
    if (!modalOpen) {
      form.reset();
    }
  }, [modalOpen, form]);

  function handleToggleAlbum(albumId: string) {
    const albumsIds = form.getValues("albumIds") || [];
    const albumsSet = new Set(albumsIds); //set - faz array sem valores repetidos

    //se na lista já tem o id - apaga, se não tem vai adicionar
    if (albumsSet.has(albumId)) {
      albumsSet.delete(albumId);
    } else {
      albumsSet.add(albumId);
    }

    form.setValue("albumIds", Array.from(albumsSet)); //transforma o set em array novamente
  }

  function handleSubmit(payload: PhotoNewFormSchema) {
    console.log(payload);
  }

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      {/*é o que faz abrir o nosso componente no click */}
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <DialogHeader>Adicionar foto</DialogHeader>

          <DialogBody className="flex flex-col gap-5">
            <InputText
              placeholder="Adicione um título"
              maxLength={255}
              error={form.formState.errors.title?.message}
              {...form.register("title")}
            />

            <Alert>
              Tamanho máximo: 50MB.
              <br />
              Você pode selecionar arquivos em PNG, JPG ou JPEG.
            </Alert>

            <InputSingleFile
              form={form}
              allowedExtensions={["png", "jpg", "jpeg"]}
              maxFileSizeInMB={50}
              replaceBy={
                <ImagePreview src={fileSource} className="w-full h-56" />
              }
              error={form.formState.errors.file?.message}
              {...form.register("file")}
            />

            <div className="space-y-3">
              <Text variant="label-small">Selecionar álbum</Text>

              <div className="flex flex-wrap gap-3">
                {!isLoadingAlbums &&
                  albums?.length > 0 &&
                  albums.map((album) => (
                    <Button
                      key={album.id}
                      variant={
                        albumsIds?.includes(album.id) ? "primary" : "ghost"
                      }
                      size="sm"
                      className="truncate"
                      onClick={() => handleToggleAlbum(album.id)}
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

            <Button type="submit">Adicionar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
