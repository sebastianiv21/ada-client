import {
  type LoginFormData,
  type RecuperarClaveFormData,
} from "@/types/usuarioTypes"
import api from "./server"
import { type Message } from "@/types/general"

interface RefreshResponse {
  accessToken: string
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

export const refresh = async (): Promise<string> => {
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

export const recuperarClave = async (
  formData: RecuperarClaveFormData,
): Promise<Message> => {
  try {
    const response = await api<Message>({
      method: "POST",
      url: "/auth/recuperar-clave",
      data: formData,
    })

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
