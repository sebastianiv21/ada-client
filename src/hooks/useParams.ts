// import { type Params } from "@/types/paramsTypes"
import { fetchParams } from "@/api/params"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"

// type UseParams = (lista: string) => Params

const useParametros = (lista: string) => {
  return useQuery({
    queryKey: ["params", lista],
    queryFn: fetchParams,
  })
}

export default useParametros
