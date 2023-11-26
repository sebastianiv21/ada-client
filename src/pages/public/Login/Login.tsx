import { type FC } from "react"
import { Card, Col, Row, Stack } from "react-bootstrap"
import LoginForm from "./components/Form"

const Login: FC = () => {
  return (
    <Stack className="mx-auto my-5">
      <header className="text-center mb-3">
        <h1>
          <strong>Iniciar sesión</strong>
        </h1>
        <h2>Por favor, digite sus credenciales para acceder al sistema</h2>
      </header>
      <Row className="justify-content-center mx-1">
        <Card
          as={Col}
          md={6}
          bg="secondary"
          text="light"
          className="p-3 p-md-4"
        >
          <LoginForm />
        </Card>
      </Row>
    </Stack>
  )
}

export default Login
