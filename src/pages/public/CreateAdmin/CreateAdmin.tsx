import { type FC } from "react"
import { Card, Col, Row, Stack } from "react-bootstrap"
import CreateAdminForm from "./components/Form"

const CreateAdmin: FC = () => {
  return (
    <Stack className="mx-auto my-5">
      <header className="text-center mb-3">
        <h1>
          <strong>Creación de Administrador</strong>
        </h1>
        <h2>Por favor, ingrese la siguiente información</h2>
      </header>
      <Row className="justify-content-center mx-1">
        <Card as={Col} bg="secondary" text="light" className="p-3 p-md-4">
          <CreateAdminForm />
        </Card>
      </Row>
    </Stack>
  )
}

export default CreateAdmin
