type RepoCardProps = {
  repo: any
}

export const RepoCard = ({ repo }: RepoCardProps) => {
  return <div>{repo.name}</div>
}
