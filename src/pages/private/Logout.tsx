import useAuth from "@/hooks/useAuth"
import { type FC, useEffect } from "react"
import { Redirect } from "wouter"

const Logout: FC = () => {
  const { logoutUser } = useAuth()

  useEffect(() => {
    logoutUser()
  }, [])

  return <Redirect to="/login" />
}

export default Logout
