export interface Form {
    id: string
    title: string
    createdAt: Date
    responses: number
  }
  
  export interface FormInput {
    title: string
    description?: string
  }
  
  