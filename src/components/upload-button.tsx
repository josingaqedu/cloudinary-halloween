"use client";

import { CldUploadButton } from "next-cloudinary";

export const UploadButton = () => {
  return (
    <CldUploadButton uploadPreset="cloudinary-halloween">Subir</CldUploadButton>
  );
};
