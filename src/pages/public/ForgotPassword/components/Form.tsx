import { type FC, useState } from "react"
import { Button, Form } from "react-bootstrap"

const ForgotPasswordForm: FC = () => {
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
      <section className="d-flex">
        <Button type="submit" variant="primary" className="mx-auto">
          Recuperar contraseña
        </Button>
      </section>
    </Form>
  )
}

export default ForgotPasswordForm
