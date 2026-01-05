export type GithubRepo = {
  id: number
  name: string
  full_name: string
  stargazers_count: number
  forks_count: number
  html_url: string
}

export type SearchReposResponse = {
  items: GithubRepo[]
}

export type GithubUser = {
  id: number
  login: string
  avatar_url: string
  html_url: string
}

export type SearchUsersResponse = {
  items: GithubUser[]
}
