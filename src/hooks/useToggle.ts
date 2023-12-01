import { useState } from "react"

type UseToggle = (initialState?: boolean) => [boolean, () => void]

const useToggle: UseToggle = (initialState = false) => {
  const [state, setState] = useState<boolean>(initialState)

  const toggleState: () => void = () => {
    setState(!state)
  }

  return [state, toggleState]
}

export default useToggle
