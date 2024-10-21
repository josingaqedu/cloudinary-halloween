"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface DownloadButtonProps {
  id: string;
  url: string;
  format: string;
  loadingGobal: boolean;
}

export const DownloadButton = ({
  id,
  url,
  format,
  loadingGobal,
}: DownloadButtonProps) => {
  const handleDownload = () => {
    if (!format) return toast.warning("Selecciona un formato de descarga");

    const urlFormat = url.replace("/f_auto/", `/f_${format}/`);

    const urlDownload = urlFormat.replace(
      "/upload/",
      `/upload/fl_attachment:image-${id}/`
    );

    window.open(urlDownload, "_blank");
  };

  return (
    <Button
      variant="secondary"
      size="default"
      className="w-full"
      disabled={loadingGobal}
      onClick={handleDownload}
    >
      Descargar
    </Button>
  );
};
