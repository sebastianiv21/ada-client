import { type FC } from "react"
import { Route, Switch } from "wouter"
import { PUBLIC_ROUTES } from "./routesList"
import PublicFooter from "@/pages/public/components/Footer/Footer"
import Landing from "@/pages/public/Landing/Landing"
import NotFound from "@/pages/NotFound"
import { Container } from "react-bootstrap"
import Contact from "@/pages/public/Contact/Contact"
import Login from "@/pages/public/Login/Login"
import ForgotPassword from "@/pages/public/ForgotPassword/ForgotPassword"
import CreateAdmin from "@/pages/public/CreateAdmin/CreateAdmin"
import ChangePassword from "@/pages/public/ChangePassword/ChangePassword"
import Logout from "@/pages/private/Logout"
import CustomNavbar from "@/components/ui/Navbar"

const navLinks = [
  { label: "Inicio", href: "/" },
  // { label: "PQRS", href: "/pqrs" },
  { label: "Contacto", href: PUBLIC_ROUTES.CONTACT },
  { label: "Ingresar", href: PUBLIC_ROUTES.LOGIN },
]

const PublicRoutes: FC = () => {
  return (
    <>
      <CustomNavbar homeRoute={PUBLIC_ROUTES.HOME} navLinks={navLinks} />
      <Container>
        <Switch>
          <Route path="/" component={Landing} />
          <Route path={PUBLIC_ROUTES.CONTACT} component={Contact} />
          <Route path={PUBLIC_ROUTES.LOGIN} component={Login} />
          <Route path={PUBLIC_ROUTES.LOGOUT} component={Logout} />
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
      <PublicFooter />
    </>
  )
}

export default PublicRoutes
