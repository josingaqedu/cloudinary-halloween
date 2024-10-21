"use client";

import { useState } from "react";

import { ReplaceBackgroundButton } from "@/components/replace-background-button";
import { RemoveObjectsButton } from "@/components/remove-objects-button";
import { ReplaceObjectsButton } from "@/components/replace-objects-button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

interface TabsOptionsProps {
  id: string;
  setUrl: (url: string) => void;
  loadingGobal: boolean;
  setLoadingGlobal: (loading: boolean) => void;
}

export const TabsOptions = (props: TabsOptionsProps) => {
  const { id, setUrl, loadingGobal, setLoadingGlobal } = props;

  const [promptReplaceBg, setPromptReplaceBg] = useState<string>("");
  const [promptRemoveObj, setPromptRemoveObj] = useState<string>("");
  const [promptReplaceObj, setPromptReplaceObj] = useState<string>("");

  return (
    <Tabs defaultValue="replace-background">
      <TabsList className="flex flex-col sm:flex-row h-auto">
        <TabsTrigger value="replace-background" className="w-full sm:w-auto">
          Reemplazar fondo
        </TabsTrigger>
        <TabsTrigger value="remove-objects" className="w-full sm:w-auto">
          Remover objetos
        </TabsTrigger>
        <TabsTrigger value="replace-objects" className="w-full sm:w-auto">
          Sustituir objetos
        </TabsTrigger>
      </TabsList>

      <TabsContent value="replace-background" className="space-y-2">
        <Textarea
          placeholder="Ingresa un prompt para reemplazar el fondo"
          value={promptReplaceBg}
          disabled={loadingGobal}
          onChange={(e) => setPromptReplaceBg(e.target.value)}
        />
        <ReplaceBackgroundButton
          id={id}
          setUrl={setUrl}
          loadingGobal={loadingGobal}
          setLoadingGlobal={setLoadingGlobal}
          prompt={promptReplaceBg}
        />
      </TabsContent>
      <TabsContent value="remove-objects" className="space-y-2">
        <Textarea
          placeholder="Ingresa un prompt para remover objetos"
          value={promptRemoveObj}
          disabled={loadingGobal}
          onChange={(e) => setPromptRemoveObj(e.target.value)}
        />
        <RemoveObjectsButton
          id={id}
          setUrl={setUrl}
          loadingGobal={loadingGobal}
          setLoadingGlobal={setLoadingGlobal}
          prompt={promptRemoveObj}
        />
      </TabsContent>
      <TabsContent value="replace-objects" className="space-y-2">
        <Textarea
          placeholder="Ingresa un prompt para sustituir objetos"
          value={promptReplaceObj}
          disabled={loadingGobal}
          onChange={(e) => setPromptReplaceObj(e.target.value)}
        />
        <ReplaceObjectsButton
          id={id}
          setUrl={setUrl}
          loadingGobal={loadingGobal}
          setLoadingGlobal={setLoadingGlobal}
          prompt={promptReplaceObj}
        />
      </TabsContent>
    </Tabs>
  );
};
