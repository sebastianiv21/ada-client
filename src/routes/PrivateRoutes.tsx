import { type FC } from "react"
import { Route, Switch, useLocation } from "wouter"
import PrivateNavbar from "@/pages/private/components/Navbar/Navbar"
import PrivateFooter from "@/pages/private/components/Footer/Footer"
import NotFound from "@/pages/NotFound"
import { Container } from "react-bootstrap"
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routesList"
import { useAuthStore } from "@/context/authStore"
import Welcome from "@/pages/private/Welcome/Welcome"

const PrivateRoutes: FC = () => {
  const accessToken = useAuthStore((state) => state.accessToken)
  const [, setLocation] = useLocation()

  // if (accessToken === null) {
  //   setLocation(PUBLIC_ROUTES.LOGIN, { replace: true })
  // }

  return (
    <>
      <PrivateNavbar />
      <Container className="my-auto">
        <Switch>
          <Route path={PRIVATE_ROUTES.HOME} component={Welcome} />
          <Route component={NotFound} />
        </Switch>
      </Container>
      <PrivateFooter />
    </>
  )
}

export default PrivateRoutes
