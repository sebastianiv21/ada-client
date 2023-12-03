// import { type Params } from "@/types/paramsTypes"
import { getParams } from "@/api/params"
import { useEffect } from "react"

// type UseParams = (lista: string) => Params

const useParametros = (lista: string) => {
  const [params, setParams] = useState<Params | Message>({})
  const fetchParams = async () => {
    const response = await getParams(lista)
    return response
  }

  useEffect(() => {



  return
}

export default useParametros
