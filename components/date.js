import { parseISO, format } from 'date-fns'
import { id } from 'date-fns/locale'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy', { locale: id })}</time>
}