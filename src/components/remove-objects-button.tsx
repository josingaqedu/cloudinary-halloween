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

const bgHalloween = [
  "ghost",
  "pumpkin",
  "bat",
  "spider",
  "witch",
  "skeleton",
  "zombie",
  "vampire",
  "werewolf",
  "mummy",
];

export const RemoveObjectsButton = (props: Props) => {
  const { id, setUrl, loadingGobal, setLoadingGlobal, prompt } = props;

  const handleRemoveObjects = () => {
    if (!prompt) return toast.warning("Ingresa un prompt para remover objetos");

    setLoadingGlobal(true);

    const urlRemoveObjects = getCldImageUrl({
      src: id,
      remove: JSON.stringify(prompt),
      replaceBackground: JSON.stringify(
        bgHalloween[Math.floor(Math.random() * bgHalloween.length)]
      ),
    });

    toast.promise(fetch(urlRemoveObjects), {
      loading: "Removiendo objetos",
      success: () => {
        setUrl(urlRemoveObjects);
        return "Actualizando la nueva imagen";
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
      onClick={handleRemoveObjects}
      disabled={loadingGobal}
    >
      Remover objetos
    </Button>
  );
};
