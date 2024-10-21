"use client";

import { useRouter } from "next/navigation";

import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const UploadWidget = () => {
  const router = useRouter();
  return (
    <CldUploadWidget
      uploadPreset="cloudinary-halloween"
      onError={(error, { widget }) => {
        widget.close();
        console.error(error);
        toast.error("Hubo un error al subir la imagen");
      }}
      onSuccess={(results, { widget }) => {
        if (typeof results.info !== "string") {
          const id = results.info?.public_id;
          widget.close();
          toast.success("Imagen subida con correctamente");
          router.push(`/image/${id}`);
        }
      }}
      onQueuesEnd={(result, { widget }) => {
        widget.close();
      }}
      options={{
        sources: ["local"],
        multiple: false,
        maxFiles: 1,
        language: "es",
        text: {
          es: {
            or: "O",
            menu: {
              files: "Subir desde tu dispositivo",
            },
            local: {
              browse: "Seleccionar",
              dd_title_single: "Arrastra tu imagen aquí",
            },
          },
        },
      }}
    >
      {({ open }) => {
        return <Button onClick={() => open()}>Subir</Button>;
      }}
    </CldUploadWidget>
  );
};
