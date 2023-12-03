import api from "./server"
import { type Message } from "@/types/general"
import { type Params } from "@/types/paramsTypes"
import { type QueryFunctionContext } from "@tanstack/react-query"

export const fetchParams = async (ctx: QueryFunctionContext) => {
  const [_, lista] = ctx.queryKey
  const { data } = await api<Params | Message>({
    method: "GET",
    url: "/parametros",
    params: { lista },
  })

  return data
}
