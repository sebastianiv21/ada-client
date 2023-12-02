import api from "./server"

export const getParams = async (lista) => {
  const response = await api.get("/params")
  return response.data
}
