import { type FC, Suspense } from "react"
import Spinner from "@/components/ui/Spinner"
import { Route, Switch } from "wouter"
import NotFound from "@/pages/NotFound"
import PublicRoutes from "@/routes/PublicRoutes"
import PrivateRoutes from "./routes/PrivateRoutes"
import { Toaster } from "sonner"

const App: FC = () => (
  <Suspense fallback={<Spinner />}>
    <main className="text-secondary min-vh-100 d-flex flex-column bg-primary">
      <Switch>
        <PublicRoutes />
        <PrivateRoutes />
        <Route component={NotFound} />
      </Switch>
      <Toaster position="top-center" richColors />
    </main>
  </Suspense>
)

export default App
