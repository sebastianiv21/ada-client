import { type Message } from "@/types/general"
import { type AdminFormData } from "@/types/usuarioTypes"
import api from "./server"

export const createAdmin = async (data: AdminFormData): Promise<Message> => {
  const response = await api<Message>({
    method: "POST",
    url: "/usuarios/crear-admin",
    data,
  })

  return response
}
