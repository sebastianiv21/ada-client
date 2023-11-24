import { type FC, Suspense } from "react"
import Spinner from "@/components/ui/Spinner"
import { Route, Switch } from "wouter"
import NotFound from "@/pages/NotFound"
import PublicRoutes from "@/routes/PublicRoutes"

const App: FC = () => (
  <Suspense fallback={<Spinner />}>
    <main>
      <Switch>
        <PublicRoutes />
        <Route component={NotFound} />
      </Switch>
    </main>
  </Suspense>
)

export default App
