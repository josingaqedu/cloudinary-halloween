import { UploadWidget } from "@/components/upload-widget";

export default function HomePage() {
  return (
    <div>
      <section className="text-center text-2xl sm:text-4xl uppercase py-12">
        El Halloween llego a Cloudinary
      </section>
      <div className="text-center space-y-4">
        <h1 className="text-lg">
          Crea tu mejor disfraz para este Halloween a partir de una imagen
        </h1>
        <UploadWidget />
      </div>
    </div>
  );
}
