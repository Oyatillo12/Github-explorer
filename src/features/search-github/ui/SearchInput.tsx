import { Input } from '@/shared/ui/input'
import { useSearch } from '../model/useSearch'

export function SearchInput() {
  const { query, onQueryChange } = useSearch()

  return (
    <Input
      placeholder="Search GitHub..."
      defaultValue={query}
      onChange={e => onQueryChange(e.target.value)}
    />
  )
}
