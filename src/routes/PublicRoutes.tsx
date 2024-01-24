import { type FC } from "react"
import { Route, Switch } from "wouter"
import Navbar from "@/pages/public/components/Navbar/Navbar"
import Footer from "@/pages/public/components/Footer/Footer"
import Landing from "@/pages/public/Landing/Landing"
import NotFound from "@/pages/NotFound"
import { Container } from "react-bootstrap"
import Contact from "@/pages/public/Contact/Contact"
import Login from "@/pages/public/Login/Login"
import ForgotPassword from "@/pages/public/ForgotPassword/ForgotPassword"
import CreateAdmin from "@/pages/public/CreateAdmin/CreateAdmin"
import ChangePassword from "@/pages/public/ChangePassword/ChangePassword"
import { PUBLIC_ROUTES } from "./routesList"

const PublicRoutes: FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/" component={Landing} />
          <Route path={PUBLIC_ROUTES.CONTACT} component={Contact} />
          <Route path={PUBLIC_ROUTES.LOGIN} component={Login} />
          <Route
            path={PUBLIC_ROUTES.FORGOT_PASSWORD}
            component={ForgotPassword}
          />
          <Route
            path={PUBLIC_ROUTES.CHANGE_PASSWORD}
            component={ChangePassword}
          />
          <Route path={PUBLIC_ROUTES.CREATE_ADMIN} component={CreateAdmin} />
          <Route component={NotFound} />
        </Switch>
      </Container>
      <Footer />
    </>
  )
}

export default PublicRoutes
