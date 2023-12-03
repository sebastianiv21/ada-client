import axios, { type AxiosResponse, type Method } from "axios"

interface RequestOptions {
  method: Method
  url: string
  data?: Record<string, unknown> | null
  params?: Record<string, unknown>
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

const request = async <T>(
  options: RequestOptions,
): Promise<AxiosResponse<T>> => {
  const { method, url, params = {}, data = null } = options

  try {
    const response = await api.request<T>({
      method,
      url,
      data,
      params,
    })

    return response
  } catch (error) {
    console.error(`Error making ${method} request to ${url}:`, error)
    throw error
  }
}

export default request
