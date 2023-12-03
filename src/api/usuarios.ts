import { type Message } from "@/types/general"
import { type AdminFormData } from "@/types/usuarioTypes"
import { toast } from "sonner"
import api from "./server"
import { type AxiosResponse } from "axios"

export const createAdmin = async (
  formData: AdminFormData,
): Promise<AxiosResponse<Message>> => {
  try {
    const response = await api<Message>({
      method: "POST",
      url: "/usuarios/crear-admin",
      data: formData,
    })

    toast.success(response.data.message)

    return response
  } catch (error) {
    return toast.error(error?.response?.data.message)
  }
}
