import { apiClient } from '@/shared/api'
import { useQuery } from '@tanstack/react-query'

export interface GithubUser {
  id: number
  login: string
  avatar_url: string
  html_url: string
}

interface SearchUsersResponse {
  items: GithubUser[]
}

export function useSearchUsers(query: string) {
  return useQuery({
    queryKey: ['search-users', query],
    queryFn: async () => {
      if (!query) return []
      const data = (await apiClient.get(
        `/search/users?q=${query}`,
      )) as SearchUsersResponse

      return data.items
    },
    enabled: Boolean(query),
  })
}
