import { type FC } from "react"
import { Card, Stack } from "react-bootstrap"
import PQRSForm from "./components/Form"

const PQRS: FC = () => {
  return (
    <Stack className="mx-auto my-5">
      <header className="text-center mb-3">
        <h1>
          <strong>Peticiones, Quejas, Reclamos y Sugerencias</strong>
        </h1>
        <h2>
          Envíenos su opinión, estamos comprometidos en la mejora continua de
          nuestro servicio.
        </h2>
      </header>
      <article>
        <Card bg="secondary" text="light" className="m-auto p-4">
          <PQRSForm />
        </Card>
      </article>
    </Stack>
  )
}

export default PQRS
