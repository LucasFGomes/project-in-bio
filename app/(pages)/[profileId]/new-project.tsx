"use client";

import Button from "@/app/components/ui/Button";
import Modal from "@/app/components/ui/Modal";
import TextArea from "@/app/components/ui/TextArea";
import TextInput from "@/app/components/ui/TextInput";
import { ArrowUpFromLine, Plus, X } from "lucide-react";
import { useState } from "react";

export default function NewProject({ profileId }: { profileId: string }) {
  const [isOpen, setIsOpen] = useState(false)

  const triggerImageInput = () => document.getElementById('imageInput')?.click()

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center cursor-pointer hover:border border-dashed border-border-secondary">
        <Plus className="size-10 text-accent-green" />
        <span className="text-white">Novo projeto</span>
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10">
          <div className="flex items-center justify-between">
            <p className="text-white font-bold text-xl">Novo projeto</p>
            <X className="size-4 cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col items-center gap-3 text-xs">
              <div className="w-[100px] h-[100px] rounded-xl bg-background-tertiary overflow-hidden">
                <button className="w-full h-full cursor-pointer" onClick={triggerImageInput}>
                  100x100
                </button>
              </div>
              <button className="text-white flex items-center gap-2 cursor-pointer" onClick={triggerImageInput}>
                <ArrowUpFromLine className="size-4" />
                <span>Adicionar imagem</span>
              </button>

              <input type="file" id="imageInput" accept="image/*" className="hidden" />
            </div>

            <div className="flex flex-col gap-4 w-[293px]">
              <div className="flex flex-col gap-1">
                <label htmlFor="project-name" className="text-white font-bold">
                  Título do projeto
                </label>
                <TextInput id="project-name" placeholder="Digite o nome do projeto" />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="project-description" className="text-white font-bold">
                  Descrição do projeto
                </label>
                <TextArea
                  id="project-description"
                  placeholder="Uma breve descrição do projeto"
                  className="h-36 resize-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="project-url" className="text-white font-bold">
                  URL do projeto
                </label>
                <TextInput
                  id="project-url"
                  type="url"
                  placeholder="Digite a URL do projeto"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex gap-4 justify-end">
            <button className="text-white font-bold cursor-pointer" onClick={() => setIsOpen(false)}>
              Voltar
            </button>
            <Button className="text-white font-bold">
              Criar
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}