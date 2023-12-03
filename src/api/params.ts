import api from "./server"
import { type Params } from "@/types/paramsTypes"
import { type QueryFunctionContext } from "@tanstack/react-query"
import { toast } from "sonner"

export const fetchParams = async (
  ctx: QueryFunctionContext,
): Promise<Params> => {
  try {
    const [_, lista] = ctx.queryKey
    const { data } = await api<Params>({
      method: "GET",
      url: "/parametros",
      params: { lista },
    })

    return data
  } catch (error) {
    toast.error("Error al cargar los parámetros")
    throw error
  }
}
