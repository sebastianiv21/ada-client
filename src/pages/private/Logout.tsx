import useAuth from "@/hooks/useAuth"
import { PUBLIC_ROUTES } from "@/routes/routesList"
import { type FC, useEffect } from "react"
import { Redirect } from "wouter"

const Logout: FC = () => {
  const { logoutUser } = useAuth()

  useEffect(() => {
    logoutUser()
  }, [])

  return <Redirect to={PUBLIC_ROUTES.LOGIN} />
}

export default Logout
