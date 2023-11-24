import { type FC, Suspense } from "react"
import Spinner from "@/components/ui/Spinner"
import { Route, Switch } from "wouter"
import NotFound from "@/pages/NotFound"
import PublicRoutes from "@/routes/PublicRoutes"

const App: FC = () => (
  <Suspense fallback={<Spinner />}>
    <main className="text-secondary min-vh-100 d-flex flex-column bg-primary">
      <Switch>
        <PublicRoutes />
        <Route component={NotFound} />
      </Switch>
    </main>
  </Suspense>
)

export default App
