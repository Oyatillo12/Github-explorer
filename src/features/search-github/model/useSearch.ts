import { useDebounceCallback } from '@/shared/hooks/useDebounceCallback'
import { useSearchParams } from 'react-router'
import type { SearchType } from './types'

export function useSearch() {
  const [params, setParams] = useSearchParams()

  const query = params.get('q') ?? ''
  const type = (params.get('type') as SearchType) ?? 'users'

  const onQueryChange = useDebounceCallback((nextQuery: string) => {
    setParams({
      q: nextQuery,
      type,
    })
  }, 500)

  function onTypeChange(nextType: SearchType) {
    setParams({
      q: query,
      type: nextType,
    })
  }

  return {
    query,
    type,
    onQueryChange,
    onTypeChange,
  }
}
