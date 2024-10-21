"use client";

import { getCldImageUrl } from "next-cloudinary";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

interface Props {
  id: string;
  setUrl: (url: string) => void;
  loadingGobal: boolean;
  setLoadingGlobal: (loading: boolean) => void;
  prompt: string;
}

export const ReplaceObjectsButton = (props: Props) => {
  const { id, setUrl, loadingGobal, setLoadingGlobal, prompt } = props;

  const handleReplaceObjects = () => {
    if (!prompt)
      return toast.warning("Ingresa un prompt para reemplazar los objetos");

    setLoadingGlobal(true);

    const urlReplaceObjects = getCldImageUrl({
      src: id,
      replace: {
        from: prompt,
        to: prompt,
        preserveGeometry: true,
      },
    });

    toast.promise(fetch(urlReplaceObjects), {
      loading: "Generando un nuevo fondo",
      success: () => {
        setUrl(urlReplaceObjects);
        return "Reemplazando con el nuevo fondo";
      },
      error: () => {
        return "¡Ups! Algo salió mal, intentalo nuevamente";
      },
      finally: () => {
        setLoadingGlobal(false);
      },
      richColors: true,
      closeButton: false,
    });
  };

  return (
    <Button
      variant="default"
      size="default"
      className="w-full"
      onClick={handleReplaceObjects}
      disabled={loadingGobal}
    >
      Sustituir objetos
    </Button>
  );
};
