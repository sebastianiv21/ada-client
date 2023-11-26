import { type FC, useState } from "react"
import { Button, Form, InputGroup } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { Link } from "wouter"

const LoginForm: FC = () => {
  const [validated, setValidated] = useState(false)

  // TODO: Add submit handler
  const handleSubmit = (event: any): any => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="validationCustomUsername">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          aria-describedby="inputGroupPrepend"
          required
        />
        <Form.Control.Feedback type="invalid">
          Please choose a username.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="validationCustomPassword">
        <Form.Label>Contraseña</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="password"
            placeholder="Password"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Button variant="outline-primary" id="inputGroupPrepend">
            <FontAwesomeIcon icon={faEye} />
          </Button>
          <Form.Control.Feedback type="invalid">
            Please choose a password.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Link
        href="/forgot-password"
        className="d-block text-center mb-3 text-decoration-none"
      >
        ¿Olvidó su contraseña?
      </Link>
      <section className="d-flex">
        <Button type="submit" variant="primary" className="mx-auto">
          Iniciar sesión
        </Button>
      </section>
    </Form>
  )
}

export default LoginForm
