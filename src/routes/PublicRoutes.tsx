import { type FC } from "react"
import { Route, Switch } from "wouter"
import Navbar from "@/pages/public/components/Navbar/Navbar"
import Footer from "@/pages/public/components/Footer/Footer"
import Landing from "@/pages/public/Landing/Landing"
import NotFound from "@/pages/NotFound"
import NestedRoutes from "@/components/NestedRoutes"
import { Container } from "react-bootstrap"
import Contact from "@/pages/public/Contact/Contact"

const PublicRoutes: FC = () => {
  return (
    <Route path="/:any*">
      <NestedRoutes base="">
        <Navbar />
        <Container>
          <Switch>
            <Route path="/" component={Landing} />
            <Route path="/contacto" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        <Footer />
      </NestedRoutes>
    </Route>
  )
}

export default PublicRoutes
