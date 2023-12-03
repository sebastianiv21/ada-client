import { type Params } from "@/types/paramsTypes"
import { fetchParams } from "@/api/params"
import { useQuery, type UseQueryResult } from "@tanstack/react-query"

const useParametros = (lista: string): UseQueryResult<Params> => {
  return useQuery({
    queryKey: ["params", lista],
    queryFn: fetchParams,
  })
}

export default useParametros
