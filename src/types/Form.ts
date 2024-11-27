export interface Form {
    id: string
    name: string
    createdAt: Date
    responsesCount: number
  }
  
  export interface FormDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
  }
  
  export interface EditFormDialogProps extends FormDialogProps {
    form: Form
  }
  
  export interface DeleteFormDialogProps extends FormDialogProps {
    form: Form
    onDelete: (id: string) => void
  }
  
  