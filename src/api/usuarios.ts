import { type JSONResponse } from "@/types/general"
import api from "./server"

export const createAdmin = async (data: FormData): Promise<JSONResponse> => {
  try {
    const response = await api.post("/usuarios/crear-admin", data)
    return response.data
  } catch (error) {
    if (!error?.response) {
      console.error("Error: el servidor no está disponible")
    } else {
      console.error("Error:", error.message)
    }
    return error.response.data
  }
}
