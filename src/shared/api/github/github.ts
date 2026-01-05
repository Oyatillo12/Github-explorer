import { apiClient } from '../apiClient'
import { Endpoints } from '../endpoints'
import type {
  GithubUser,
  SearchReposResponse,
  SearchUsersResponse,
} from './types'

export const searchUsers = async (query: string, signal?: AbortSignal) => {
  const response = await apiClient.get<SearchUsersResponse>(
    Endpoints.searchUsers,
    {
      signal,
      params: { q: query },
    },
  )

  return response.items
}

export const searchRepos = async (query: string, signal?: AbortSignal) => {
  const response = await apiClient.get<SearchReposResponse>(
    Endpoints.searchRepos,
    {
      signal,
      params: { q: query },
    },
  )

  return response.items
}

export const getUser = async (username: string, signal?: AbortSignal) => {
  const response = await apiClient.get<GithubUser>(`/users/${username}`, {
    signal,
  })

  return response
}

export const getUserRepos = async (
  username: string,
  page = 1,
  perPage = 10,
  signal?: AbortSignal,
) => {
  const res = await apiClient.get<SearchReposResponse>(
    `/users/${username}/repos`,
    {
      signal,
      params: { page, per_page: perPage, sort: 'pushed' },
    },
  )

  return res
}
