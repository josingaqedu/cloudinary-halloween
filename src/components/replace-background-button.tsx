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

export const ReplaceBackgroundButton = (props: Props) => {
  const { id, setUrl, loadingGobal, setLoadingGlobal, prompt } = props;

  const handleReplaceBackground = () => {
    if (!prompt)
      return toast.warning("Ingresa un prompt para reemplazar el fondo");

    setLoadingGlobal(true);

    const urlReplaceBackground = getCldImageUrl({
      src: id,
      replaceBackground: JSON.stringify(prompt),
    });

    toast.promise(fetch(urlReplaceBackground), {
      loading: "Generando un nuevo fondo",
      success: () => {
        setUrl(urlReplaceBackground);
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
      onClick={handleReplaceBackground}
      disabled={loadingGobal}
    >
      Reemplazar fondo
    </Button>
  );
};
