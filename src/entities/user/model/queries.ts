import { searchUsers } from '@/shared/api/github'
import { useQuery } from '@tanstack/react-query'

export function useSearchUsers(query: string) {
  return useQuery({
    queryKey: ['search-users', query],
    queryFn: async () => searchUsers(query),
    enabled: Boolean(query),
  })
}
