import type { GithubRepo } from '@/shared/api/github'

type RepoCardProps = {
  repo: GithubRepo
}

export const RepoCard = ({ repo }: RepoCardProps) => {
  return <div>{repo.name}</div>
}
