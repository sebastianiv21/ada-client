import { type FC } from "react"
import { Route, Switch } from "wouter"
import Navbar from "@/pages/private/components/Navbar/Navbar"
import Footer from "@/pages/private/components/Footer/Footer"
import Landing from "@/pages/public/Landing/Landing"
import NotFound from "@/pages/NotFound"
import { Container } from "react-bootstrap"
import Contact from "@/pages/public/Contact/Contact"
import Logout from "@/pages/private/Logout"

const PrivateRoutes: FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/app" component={Landing} />
          <Route path="/app/contacto" component={Contact} />
          <Route path="/app/logout" component={Logout} />
          <Route component={NotFound} />
        </Switch>
      </Container>
      <Footer />
    </>
  )
}

export default PrivateRoutes
