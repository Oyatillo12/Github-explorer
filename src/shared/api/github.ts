import { apiClient } from './apiClient'

export const searchUsers = async (query: string, signal?: AbortSignal) => {
  const response = await apiClient.get(`/search/users?q=${query}`, { signal })

  return response.items
}

export const getUser = async (username: string, signal?: AbortSignal) => {
  const response = await apiClient.get(`/users/${username}`, { signal })

  return response
}

export const getUserRepos = async (
  username: string,
  page = 1,
  perPage = 10,
  signal?: AbortSignal,
) => {
  const res = await apiClient.get(
    `/users/${username}/repos?per_page=${perPage}&page=${page}&sort=updated`,
    { signal },
  )

  return res
}
