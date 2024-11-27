import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Plus, Trash2 } from 'lucide-react'
import { useState } from "react";

interface FormPage {
  id: number;
  elements: any[]; 
  
}

interface PageManagerProps {
  pages: FormPage[];
  activePage: number;
  setActivePage: (pageId: number) => void;
  addPage: () => void;
  deletePage: (pageId: number) => void;
}

export function PageManager({ pages, activePage, setActivePage, addPage, deletePage }: PageManagerProps) {


  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {pages.map((page) => (
        <Button
        key={page.id}
        variant={activePage === page.id ? "secondary" : "ghost"}
        className="w-full justify-between relative" // 
        onClick={() => setActivePage(page.id)}
      >
            <span>Página {page.id}</span>
            {pages.length > 1 && page.id !== 1 && ( 
              <Trash2
                className="h-4 w-4 text-muted-foreground hover:text-destructive relative z-20"
                onClick={(e) => {
                  e.stopPropagation()
                  deletePage(page.id)
                }}
                style={{ pointerEvents: 'all' }} // nao faco ideia do porque sem isso o icone de deletar nao funciona, acho que tem haver com o css

              />
            )}
          </Button>
        ))}
      </div>
      <Button className="w-full" onClick={addPage}>
        <Plus className="mr-2 h-4 w-4" />
        Nova Página
      </Button>
      <Separator />
     
    </div>
  )
}

