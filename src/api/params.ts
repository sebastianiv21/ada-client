import api from "./server"
import { type Message } from "@/types/general"
import { type Params } from "@/types/paramsTypes"

export const getParams = async (lista: string): Promise<Params | Message> => {
  const { data } = await api<Params | Message>({
    method: "GET",
    url: "/parametros",
    params: { lista },
  })

  return data
}
