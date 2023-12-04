import { type LoginFormData } from "@/types/usuarioTypes"
import { toast } from "sonner"
import api from "./server"
import { type AxiosResponse } from "axios"

type AccessToken = string

interface RefreshResponse {
  accessToken: AccessToken
}

interface LoginResponse extends RefreshResponse {
  rol: string
  idUsuario: string
}

export const login = async (
  formData: LoginFormData,
): Promise<LoginResponse> => {
  try {
    const response = await api<LoginResponse>({
      method: "POST",
      url: "/auth",
      data: formData,
      withCredentials: true,
    })

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const refresh = async (): Promise<AccessToken> => {
  try {
    const response = await api<RefreshResponse>({
      method: "GET",
      url: "/auth/refresh",
      withCredentials: true,
    })

    return response.data.accessToken
  } catch (error) {
    console.error(error)
    throw error
  }
}
