import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

type UseParams = (initialState?: boolean) => [boolean, () => void]

const useParams: UseParams = (initialState = false) => {
  const [state, setState] = useState<boolean>(initialState)

  const toggleState: () => void = () => {
    setState(!state)
  }

  return [state, toggleState]
}

export default useParams
