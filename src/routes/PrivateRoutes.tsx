import { type FC } from "react"
import { Route, Switch } from "wouter"
import Navbar from "@/pages/public/components/Navbar/Navbar"
import Footer from "@/pages/private/components/Footer/Footer"
import Landing from "@/pages/public/Landing/Landing"
import NotFound from "@/pages/NotFound"
import { Container } from "react-bootstrap"
import Contact from "@/pages/public/Contact/Contact"
import Login from "@/pages/public/Login/Login"
import ForgotPassword from "@/pages/public/ForgotPassword/ForgotPassword"
import CreateAdmin from "@/pages/public/CreateAdmin/CreateAdmin"
import ChangePassword from "@/pages/public/ChangePassword/ChangePassword"

const PrivateRoutes: FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/app" component={Landing} />
          <Route path="/app/contacto" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/recuperar-clave" component={ForgotPassword} />
          <Route path="/app/cambiar-clave/:token" component={ChangePassword} />
          <Route path="/crear-admin" component={CreateAdmin} />
          <Route component={NotFound} />
        </Switch>
      </Container>
      <Footer />
    </>
  )
}

export default PrivateRoutes
