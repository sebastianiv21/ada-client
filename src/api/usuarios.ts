import { type JSONResponse } from "@/types/general"
import api from "./server"

export const createAdmin = async (data: FormData): Promise<JSONResponse> => {
  const response = await api.post("/usuarios/crear-admin", data)
  return response.data
}
