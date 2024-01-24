import { type FC, Suspense } from "react"
import Spinner from "@/components/ui/Spinner"
import { Route, Switch } from "wouter"
import PublicRoutes from "@/routes/PublicRoutes"
import PrivateRoutes from "./routes/PrivateRoutes"
import { Toaster } from "sonner"
import { PRIVATE_ROUTES } from "./routes/routesList"

const App: FC = () => (
  <main className="text-secondary min-vh-100 d-flex flex-column bg-primary">
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route
          path={`${PRIVATE_ROUTES.HOME}/:any*`}
          component={PrivateRoutes}
        />

        <Route path="/:any*" component={PublicRoutes} />
      </Switch>
      <Toaster position="top-center" richColors />
    </Suspense>
  </main>
)

export default App
