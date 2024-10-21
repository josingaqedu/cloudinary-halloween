"use client";

import { useState } from "react";

import { getCldImageUrl } from "next-cloudinary";
import { ReactCompareSlider } from "react-compare-slider";

import { TabsOptions } from "@/components/tabs-options";
import { DownloadCombobox } from "@/components/download-combobox";
import { useRouter } from "next/navigation";
import { BreadcrumbCM } from "@/components/breadcrumb";

interface UploadPageProps {
  params: {
    id: string;
  };
}

export default function UploadPage({ params }: UploadPageProps) {
  const router = useRouter();
  const { id } = params;

  const originalUrl = getCldImageUrl({ src: id });

  const [url, setUrl] = useState<string>(originalUrl);
  const [loadingGobal, setLoadingGlobal] = useState<boolean>(false);

  if (!id) return router.push("/");

  return (
    <section>
      <div className="pb-4">
        <BreadcrumbCM />
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <div className="mx-auto my-auto">
          <ReactCompareSlider
            itemOne={
              <img
                src={originalUrl}
                alt="Imagen Original"
                className="w-full h-auto rounded-lg"
              />
            }
            itemTwo={
              <img
                src={url}
                alt="Imagen Original"
                className="w-full h-auto rounded-lg"
              />
            }
          />
        </div>
        <div className="w-full sm:w-auto sm:mx-auto sm:my-auto space-y-4">
          <TabsOptions
            id={id}
            setUrl={setUrl}
            loadingGobal={loadingGobal}
            setLoadingGlobal={setLoadingGlobal}
          />
          <div className="space-y-2">
            <h1 className="text-center">Descarga tu imagen</h1>
            <DownloadCombobox id={id} url={url} loadingGobal={loadingGobal} />
          </div>
        </div>
      </div>
    </section>
  );
}
