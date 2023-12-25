import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormContainer } from './styles'

interface FormSearchProps {
  fechPosts: (query?: string) => Promise<void>
}

const formSearchSchema = z.object({
  query: z.string(),
})

type FormSearchInputs = z.infer<typeof formSearchSchema>

export default function FormSearch({ fechPosts }: FormSearchProps) {
  const { register, handleSubmit } = useForm<FormSearchInputs>({
    resolver: zodResolver(formSearchSchema),
  })

  async function handleSearchPost(data: FormSearchInputs) {
    await fechPosts(data.query)
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSearchPost)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </FormContainer>
  )
}
