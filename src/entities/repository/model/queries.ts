import { searchRepos } from '@/shared/api/github'
import { useQuery } from '@tanstack/react-query'

export function useSearchRepos(query: string) {
  return useQuery({
    queryKey: ['search-repos', query],
    queryFn: () => searchRepos(query),
    enabled: Boolean(query),
  })
}
