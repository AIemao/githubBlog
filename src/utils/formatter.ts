import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDistanceDate(date: string) {
  const parsedDate = new Date(date)
  return formatDistanceToNow(parsedDate, { locale: ptBR })
}
