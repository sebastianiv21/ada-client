import { type LoginFormData } from "@/types/usuarioTypes"
import { toast } from "sonner"
import api from "./server"
import { type AxiosResponse } from "axios"

interface LoginResponse {
  accessToken: string
}

export const login = async (
  formData: LoginFormData,
): Promise<AxiosResponse<LoginResponse>> => {
  try {
    const response = await api<LoginResponse>({
      method: "POST",
      url: "/auth",
      data: formData,
    })

    return response
  } catch (error) {
    return toast.error(error?.response?.data.message)
  }
}
