import type { GithubUser } from '@/shared/api/github'

type UserCardProps = {
  user: GithubUser
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div>
      <img src={user.avatar_url} alt={user.login} />
      <div>{user.login}</div>
    </div>
  )
}
