import { type FC } from "react"
import { Route, Switch, useLocation } from "wouter"
import Navbar from "@/pages/private/components/Navbar/Navbar"
import Footer from "@/pages/private/components/Footer/Footer"
import Landing from "@/pages/public/Landing/Landing"
import NotFound from "@/pages/NotFound"
import { Container } from "react-bootstrap"
import Logout from "@/pages/private/Logout"
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routesList"
import { useAuthStore } from "@/context/authStore"

const PrivateRoutes: FC = () => {
  const accessToken = useAuthStore((state) => state.accessToken)
  const [, setLocation] = useLocation()

  if (accessToken === null) {
    setLocation(PUBLIC_ROUTES.LOGIN)
  }

  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route path={PRIVATE_ROUTES.HOME} component={Landing} />
          <Route component={NotFound} />
        </Switch>
      </Container>
      <Footer />
    </>
  )
}

export default PrivateRoutes
