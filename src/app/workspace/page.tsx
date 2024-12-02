'use client';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronLeft, ChevronRight, FileEdit, Import, Menu, Plus, Share2, Trash2 } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { EditFormDialog } from "@/components/EditFormDialog";
import { DeleteFormDialog } from "@/components/DeleteFormDialog";
import { Form } from '@/types/Form';
import Image from 'next/image';
import { getForms } from '@/services/endpoint/form';


export default function Dashboard() {
  const [forms, setForms] = useState<Form[]>([]); 
  const [editingForm, setEditingForm] = useState<Form | null>(null);
  const [deletingForm, setDeletingForm] = useState<Form | null>(null);
  // const [forms, setForms] = useState<Form[]>([
  //   {
  //     id: "1",
  //     title: "Formulário de teste",
  //     createdAt: new Date("2024-12-07"),
  //     responsesCount: 44,
  //   },
  // ])
  // const [editingForm, setEditingForm] = useState<Form | null>(null)
  // const [deletingForm, setDeletingForm] = useState<Form | null>(null)

  const handleDelete = (id: string) => {
    setForms((prev) => prev.filter((form) => form.id !== id))
    setDeletingForm(null)
  }

  const loadForms = async () => {
    try {
      const fetchedForms = await getForms();  
      setForms(fetchedForms);  
    } catch (error) {
      console.error('Erro ao carregar os formulários', error);
    }
  };

  useEffect(() => {
    loadForms();
  }, []);


  const Sidebar = () => (
    <div className="w-64 bg-card p-6">
      <div className="mb-8">
        <Image src="/LogoWhite.svg" width={50} height={50} alt='Logo' />
      </div>
      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <FileEdit color="white" className="mr-2 h-4 w-4" />
          Meus formulários
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Share2 color="white" className="mr-2 h-4 w-4" />
          Compartilhados
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Trash2 color="white" className="mr-2 h-4 w-4" />
          Deletados
        </Button>
      </nav>
      <div className="border-l border-border h-full ml-4 mt-4" />
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen p-6">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-auto p-6 rounded-xl border border-border shadow-lg">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Meu espaço de trabalho</h1>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu color="white" className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <Sidebar />
              </SheetContent>
            </Sheet>
          </div>
          <div className="mb-6 space-y-4">
            <Tabs defaultValue="formularios" className="w-full">
              <TabsList className="grid w-full md:w-max grid-cols-3">
                <TabsTrigger value="formularios">Formulários</TabsTrigger>
                <TabsTrigger value="publicados">Publicados</TabsTrigger>
                <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex flex-col gap-4 w-full sm:flex-row sm:items-center sm:justify-between">
              <Input
                placeholder="Buscar formulários"
                className="max-w-xs w-full"
                type="search"
              />
              <div className="flex flex-wrap gap-2 w-max">
                <Button variant="outline" size="sm" className="flex-grow sm:flex-grow-0">
                  <Import color="white" className="mr-2 h-4 w-4" />
                  Importar forms
                </Button>
                <Link href="/form/create">
                  <Button size="sm">
                    <Plus color="white" className="mr-2 h-4 w-4" />
                    Criar novo formulário
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Seus forms</TableHead>
                  <TableHead className="hidden sm:table-cell">Data de criação</TableHead>
                  <TableHead>Respostas</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
              {forms.map((form) => (
                  <TableRow key={form.id}>
                    <TableCell>{form.title}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {new Date(form.createdAt).toLocaleDateString('pt-BR')}
                    </TableCell>
                    <TableCell>{form.responsesCount} respostas</TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setEditingForm(form)}
                        >
                          <FileEdit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setDeletingForm(form)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 flex items-center justify-end gap-2">
            <Button variant="ghost" size="icon">
              <ChevronLeft color="white" className="h-4 w-4" />
            </Button>
            <span className="text-sm">1 - 2 de 2 páginas</span>
            <Button variant="ghost" size="icon">
              <ChevronRight color="white" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
   
      {editingForm && (
        <EditFormDialog
          form={editingForm}
          open={!!editingForm}
          onOpenChange={(open) => !open && setEditingForm(null)}
        />
      )}
      {deletingForm && (
        <DeleteFormDialog
          form={deletingForm}
          open={!!deletingForm}
          onOpenChange={(open) => !open && setDeletingForm(null)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
