import { type FC } from "react"
import { Route, Switch } from "wouter"
import Navbar from "@/pages/public/components/Navbar/Navbar"
import Footer from "@/pages/public/components/Footer/Footer"
import Landing from "@/pages/public/Landing/Landing"
import NotFound from "@/pages/NotFound"
import NestedRoutes from "@/components/NestedRoutes"

const PublicRoutes: FC = () => {
  return (
    <Route path="/:any*">
      <NestedRoutes base="">
        <Navbar />
        <Switch>
          <Route path="/" component={Landing} />
          <Route component={NotFound} />
        </Switch>
      </NestedRoutes>
      <Footer />
    </Route>
  )
}

export default PublicRoutes
