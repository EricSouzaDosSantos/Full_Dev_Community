// hooks/useForms.ts
import { useState } from 'react';
import { Form } from '@/schemas/formSchema';

export const useForms = () => {
  const [forms, setForms] = useState<Form[]>([ //adaptar para a api 
    {
      id: "1",
      name: "Formulário de teste",
      createdAt: new Date("2024-12-07"),
      responsesCount: 44,
    },
    {
        id: "2",
        name: "to ficando doidao",
        createdAt: new Date("2024-12-07"),
        responsesCount: 44,
      }
  ]);
  const [editingForm, setEditingForm] = useState<Form | null>(null);
  const [deletingForm, setDeletingForm] = useState<Form | null>(null);

  const handleDelete = (id: string) => {
    setForms(prev => prev.filter(form => form.id !== id));
    setDeletingForm(null);
  };


  return {
    forms,
    editingForm,
    setEditingForm,
    deletingForm,
    setDeletingForm,
    handleDelete,
  };
};
