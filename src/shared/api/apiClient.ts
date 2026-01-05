import { API_URL } from '@/shared/config'

type RequestOptions = Omit<RequestInit, 'body'> & {
  body?: unknown
  params?: unknown
}

class HttpClient {
  private baseUrl: string
  private defaultHeaders: HeadersInit

  constructor(baseUrl = '', defaultHeaders?: HeadersInit) {
    this.baseUrl = baseUrl
    this.defaultHeaders = defaultHeaders || {
      'Content-Type': 'application/json',
    }
  }

  private buildQuery = (params?: unknown) => {
    if (!params) {
      return ''
    }

    const query = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value != null) {
        query.append(key, String(value))
      }
    })

    return `?${query.toString()}`
  }

  private request = async (path: string, options: RequestOptions = {}) => {
    const { params, body, headers, ...rest } = options
    const url = `${this.baseUrl}${path}${this.buildQuery(params)}`

    const fetchOptions: RequestInit = {
      ...rest,
      headers: {
        ...this.defaultHeaders,
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    }

    const response = await fetch(url, fetchOptions)

    if (!response.ok) {
      const errorText = await response.text()

      throw new Error(`HTTP ${response.status}: ${errorText}`)
    }

    const contentType = response.headers.get('content-type')

    if (contentType?.includes('application/json')) {
      return response.json()
    }

    return response.text()
  }

  public get = (path: string, options?: RequestOptions) =>
    this.request(path, options)

  public post = (path: string, options?: RequestOptions) =>
    this.request(path, { ...options, method: 'POST' })

  public put = (path: string, options?: RequestOptions) =>
    this.request(path, { ...options, method: 'PUT' })

  public delete = (path: string, options?: RequestOptions) =>
    this.request(path, { ...options, method: 'DELETE' })

  public patch = (path: string, options?: RequestOptions) =>
    this.request(path, { ...options, method: 'PATCH' })
}

export const apiClient = new HttpClient(API_URL)
