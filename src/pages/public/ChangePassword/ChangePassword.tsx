import { type FC } from "react"
import { Card, Col, Row, Stack } from "react-bootstrap"
import ChangePasswordForm from "./components/Form"

const ChangePassword: FC = () => {
  return (
    <Stack className="mx-auto my-5">
      <header className="text-center mb-3">
        <h1>
          <strong>Cambio de contraseña</strong>
        </h1>
        <h2>Por favor, digite los siguientes datos</h2>
      </header>
      <Row className="justify-content-center mx-1">
        <Card
          as={Col}
          md={6}
          bg="secondary"
          text="light"
          className="p-3 p-md-4"
        >
          <ChangePasswordForm />
        </Card>
      </Row>
    </Stack>
  )
}

export default ChangePassword
