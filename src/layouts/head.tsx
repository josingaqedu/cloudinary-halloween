import { ModeToggle } from "@/components/mode-toggle";

export const Head = () => {
  return (
    <header className="max-w-screen-lg mx-auto p-4">
      <nav className="flex justify-between items-center">
        <h1 className="sm:text-2xl">Hackaton | Cloudinary & Midudev</h1>
        <ModeToggle />
      </nav>
    </header>
  );
};
