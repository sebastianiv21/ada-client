import axios, { type Method } from "axios"

interface RequestOptions {
  method: Method
  url: string
  data?: Record<string, unknown> | null
  params?: Record<string, unknown>
}

const api = axios.create({
  baseURL: import.meta.env.BASE_URL,
})

const request = async <T>(options: RequestOptions): Promise<T> => {
  const { method, url, params = {}, data = null } = options

  try {
    const response = await api.request<T>({
      method,
      url,
      data,
      params,
    })

    return response.data
  } catch (error) {
    console.error(`Error making ${method} request to ${url}:`, error)
    throw error
  }
}

export default request
