import { type FC } from "react"
import { Card, Col, Row, Stack } from "react-bootstrap"
import ForgotPasswordForm from "./components/Form"

const ForgotPassword: FC = () => {
  return (
    <Stack className="mx-auto my-5">
      <header className="text-center mb-3">
        <h1>
          <strong>¿Olvidó su contraseña?</strong>
        </h1>
        <h2>Por favor, digite su correo electrónico</h2>
      </header>
      <Row className="justify-content-center mx-1">
        <Card
          as={Col}
          md={6}
          bg="secondary"
          text="light"
          className="p-3 p-md-4"
        >
          <ForgotPasswordForm />
        </Card>
      </Row>
    </Stack>
  )
}

export default ForgotPassword
