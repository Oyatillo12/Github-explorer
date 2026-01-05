type UserCardProps = {
  user: any
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div>
      <img src={user.avatar_url} alt={user.login} />
      <div>{user.login}</div>
    </div>
  )
}
