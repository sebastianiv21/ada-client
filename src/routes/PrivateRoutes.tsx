import { type FC } from "react"
import { Route, Switch, useLocation } from "wouter"
import PrivateFooter from "@/pages/private/components/Footer/Footer"
import NotFound from "@/pages/NotFound"
import { Container } from "react-bootstrap"
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routesList"
import { useAuthStore } from "@/context/authStore"
import Welcome from "@/pages/private/Welcome/Welcome"
import CustomNavbar from "@/components/ui/Navbar"

const navLinks = [
  { label: "Inicio", href: PRIVATE_ROUTES.HOME },
  // { label: "PQRS", href: "/pqrs" },
  { label: "Citas", href: PRIVATE_ROUTES.CITAS },
  { label: "Órdenes médicas", href: PRIVATE_ROUTES.ORDENES },
  { label: "Resultados", href: PRIVATE_ROUTES.RESULTADOS },
  { label: "Estadísticas", href: PRIVATE_ROUTES.ESTADISTICAS },
  { label: "Cerrar sesión", href: PUBLIC_ROUTES.LOGOUT },
]

const PrivateRoutes: FC = () => {
  const accessToken = useAuthStore((state) => state.accessToken)
  const [, setLocation] = useLocation()

  // if (accessToken === null) {
  //   setLocation(PUBLIC_ROUTES.LOGIN, { replace: true })
  // }

  return (
    <>
      <CustomNavbar homeRoute={PRIVATE_ROUTES.HOME} navLinks={navLinks} />
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
