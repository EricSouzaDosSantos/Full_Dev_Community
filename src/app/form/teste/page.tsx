"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BarChart, ImportIcon as FileImport, Share2, Settings, Send, Plus, Eye, Undo2, Redo2, Menu } from 'lucide-react'
import { FormElement } from "@/components/form-element"
import { FormPreview } from "@/components/form-preview"
import { PageManager } from "@/components/page-manager"

interface FormElement {
  id: number;
  type: 'text' | 'textarea' | 'radio' | 'checkbox';
  question: string;
  options: string[];
  required: boolean;
  description: string;
}

interface FormPage {
  id: number;
  elements: FormElement[];
}

export default function FormBuilder() {
  const [pages, setPages] = useState<FormPage[]>([{ id: 1, elements: [] }]) 
  
  const [activePage, setActivePage] = useState(1)
  const [showLeftSidebar, setShowLeftSidebar] = useState(false)
  const [activeElement, setActiveElement] = useState<number | null>(null)
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    const savedPages = localStorage.getItem('formPages');
    const savedActivePage = localStorage.getItem('activePage');
    
    if (savedPages) {
      setPages(JSON.parse(savedPages));
    }
    if (savedActivePage) {
      setActivePage(parseInt(savedActivePage, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formPages', JSON.stringify(pages));
    localStorage.setItem('activePage', activePage.toString());
  }, [pages, activePage]);

  const toggleLeftSidebar = () => setShowLeftSidebar(!showLeftSidebar)

  const addFormElement = (type: FormElement['type']) => {
    const newElement: FormElement = {
      id: Date.now(),
      type,
      question: `Nova pergunta ${pages[activePage - 1].elements.length + 1}`,
      options: type === 'radio' || type === 'checkbox' ? ['Opção 1', 'Opção 2'] : [],
      required: false,
      description: '',
    }
    const updatedPages = pages.map(page => 
      page.id === activePage 
        ? { ...page, elements: [...page.elements, newElement] }
        : page
    )
    setPages(updatedPages)
    setActiveElement(newElement.id)
  }

  const updateFormElement = (id: number, updates: Partial<FormElement>) => {
    const updatedPages = pages.map(page => ({
      ...page,
      elements: page.elements.map(el => el.id === id ? { ...el, ...updates } : el)
    }))
    setPages(updatedPages)
  }

  const deleteFormElement = (id: number) => {
    const updatedPages = pages.map(page => ({
      ...page,
      elements: page.elements.filter(el => el.id !== id)
    }))
    setPages(updatedPages)
    if (activeElement === id) {
      setActiveElement(null)
    }
  }

  const addPage = () => {
    const newPage = { id: pages.length + 1, elements: [] }
    setPages([...pages, newPage])
    setActivePage(newPage.id)
  }

const deletePage = (pageId: number) => {
  const updatedPages = pages.filter(page => page.id !== pageId);

  setPages(updatedPages);

  if (pageId === activePage) {
    setActivePage(updatedPages.length > 0 ? updatedPages[0].id : 1);
  }
}

  

  return (
    <div className="flex flex-col h-screen">
      {/* navegacao*/}
      <header className="border-b">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleLeftSidebar}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
            <h1 className="text-lg font-semibold hidden md:inline">Meu espaço de trabalho • Formulário</h1>
            <h1 className="text-lg font-semibold md:hidden">Formulário</h1>
          </div>
          <div className="flex items-center space-x-2">
          </div>
        </div>
        <div className="flex items-center justify-between border-t px-4 py-2 overflow-x-auto">
          <div className="flex items-center space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Settings className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Configurações</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Configurações do Formulário</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Nome
                    </Label>
                    <Input id="name" defaultValue="Meu Formulário" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                      Descrição
                    </Label>
                    <Textarea id="description" placeholder="Descrição do formulário" className="col-span-3" />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Compartilhar</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Compartilhar Formulário</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex items-center space-x-2">
                    <Input defaultValue="" readOnly />
                    <Button size="sm">Copiar</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <FileImport className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Importar dados</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Importar Dados</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Input type="file" />
                  <Button>Importar</Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="sm">
              <BarChart className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Estatísticas</span>
            </Button>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Send className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Publicar</span>
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <div className={`w-64 border-r ${showLeftSidebar ? 'block' : 'hidden'} md:block`}>
          <ScrollArea className="h-full">
            <div className="p-4 space-y-4">
              <PageManager 
                pages={pages}
                activePage={activePage}
                setActivePage={setActivePage}
                addPage={addPage}
                deletePage={deletePage}
              />
            </div>
          </ScrollArea>
        </div>

        {/* conteudos */}
        <div className="flex-1 overflow-auto">
          <div className="flex items-center space-x-2 p-4 border-b">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar pergunta
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => addFormElement('text')}>Texto curto</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => addFormElement('textarea')}>Texto longo</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => addFormElement('radio')}>Múltipla escolha</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => addFormElement('checkbox')}>Caixa de seleção</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Dialog open={showPreview} onOpenChange={setShowPreview}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Eye className="mr-2 h-4 w-4" />
                  Visualizar
                </Button>
              </DialogTrigger>
              
              <DialogContent className="max-w-full h-screen p-0">
                
                <FormPreview pages={pages} />
              </DialogContent>
            </Dialog>
            <Button variant="ghost" size="sm">
              <Undo2 className="h-4 w-4" />
              <span className="sr-only">Desfazer</span>
            </Button>
            <Button variant="ghost" size="sm">
              <Redo2 className="h-4 w-4" />
              <span className="sr-only">Refazer</span>
            </Button>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {pages[activePage - 1].elements.map((element) => (
                <FormElement
                  key={element.id}
                  element={element}
                  isActive={activeElement === element.id}
                  onClick={() => setActiveElement(element.id)}
                  onUpdate={(updates) => updateFormElement(element.id, updates)}
                  onDelete={() => deleteFormElement(element.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

