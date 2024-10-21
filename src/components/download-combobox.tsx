"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { DownloadButton } from "@/components/download-button";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Check, ChevronsUpDown } from "lucide-react";

interface DownloadComboboxProps {
  id: string;
  url: string;
  loadingGobal: boolean;
}

const formats = [
  {
    value: "avif",
    label: ".AVIF",
  },
  {
    value: "webp",
    label: ".WEBP",
  },
  {
    value: "jpg",
    label: ".JPG",
  },
  {
    value: "jxl",
    label: ".JXL",
  },
];

export const DownloadCombobox = ({ id, url, loadingGobal }: DownloadComboboxProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <div className="w-full flex flex-col sm:flex-row gap-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value
              ? formats.find((format) => format.value === value)?.label
              : "Selecciona un formato"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="sm:w-full p-0">
          <Command>
            <CommandInput placeholder="Buscar" />
            <CommandList>
              <CommandEmpty>Formato no encontrado.</CommandEmpty>
              <CommandGroup>
                {formats.map((format) => (
                  <CommandItem
                    key={format.value}
                    value={format.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === format.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {format.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DownloadButton id={id} url={url} format={value} loadingGobal={loadingGobal} />
    </div>
  );
};
