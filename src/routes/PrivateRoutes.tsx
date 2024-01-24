import { type FC } from "react"
import { Route, Switch } from "wouter"
import Navbar from "@/pages/private/components/Navbar/Navbar"
import Footer from "@/pages/private/components/Footer/Footer"
import Landing from "@/pages/public/Landing/Landing"
import NotFound from "@/pages/NotFound"
import { Container } from "react-bootstrap"
import Logout from "@/pages/private/Logout"
import { PRIVATE_ROUTES } from "./routesList"

const PrivateRoutes: FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route path={PRIVATE_ROUTES.HOME} component={Landing} />
          <Route path={PRIVATE_ROUTES.LOGOUT} component={Logout} />
          <Route component={NotFound} />
        </Switch>
      </Container>
      <Footer />
    </>
  )
}

export default PrivateRoutes
