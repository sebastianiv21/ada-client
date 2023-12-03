import api from "./server"
import { type Params } from "@/types/paramsTypes"
import { type QueryFunctionContext } from "@tanstack/react-query"

export const fetchParams = async (
  ctx: QueryFunctionContext,
): Promise<Params> => {
  const [_, lista] = ctx.queryKey
  const { data } = await api<Params>({
    method: "GET",
    url: "/parametros",
    params: { lista },
  })

  return data
}
