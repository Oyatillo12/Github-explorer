import { apiClient } from '@/shared/api'
import { useQuery } from '@tanstack/react-query'

export interface GithubRepo {
  id: number
  name: string
  full_name: string
  stargazers_count: number
  forks_count: number
  html_url: string
}

interface SearchReposResponse {
  items: GithubRepo[]
}

export function useSearchRepos(query: string) {
  return useQuery({
    queryKey: ['search-repos', query],
    queryFn: async () => {
      if (!query) return []
      const data = (await apiClient.get(
        `/search/repositories?q=${query}`,
      )) as SearchReposResponse

      return data.items
    },
    enabled: Boolean(query),
  })
}
