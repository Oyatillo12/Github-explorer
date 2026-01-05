import { RepoCard } from '@/entities/repository'
import { useSearchRepos } from '@/entities/repository/model/queries'
import { UserCard } from '@/entities/user'
import { useSearchUsers } from '@/entities/user/model/queries'
import { useSearchParams } from 'react-router'

export function SearchResults() {
  const [params] = useSearchParams()

  const query = params.get('q') ?? ''
  const type = params.get('type')

  const users = useSearchUsers(query)
  const repos = useSearchRepos(query)

  if (!query) return null

  if (type === 'users') {
    if (users.isLoading) return <div>Loading users...</div>
    return users.data?.map(u => <UserCard key={u.id} user={u} />)
  }

  if (repos.isLoading) return <div>Loading repos...</div>
  return repos.data?.map(r => <RepoCard key={r.id} repo={r} />)
}
