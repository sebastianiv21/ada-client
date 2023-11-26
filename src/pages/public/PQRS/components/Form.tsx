import { type FC } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useState } from "react"

const PQRSForm: FC = () => {
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
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Tipo de documento</Form.Label>
          <Form.Select required>
            <option value="">Seleccione</option>
            <option value="1">Peticiones</option>
            <option value="2">Quejas</option>
            <option value="3">Reclamos</option>
            <option value="4">Sugerencias</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Número de documento</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Nombres y apellidos</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback type="invalid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback type="invalid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Tipo de solicitud</Form.Label>
          <Form.Select required>
            <option value="">Seleccione</option>
            <option value="1">Peticiones</option>
            <option value="2">Quejas</option>
            <option value="3">Reclamos</option>
            <option value="4">Sugerencias</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="validationCustom02">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control required as="textarea" placeholder="Last name" rows={3} />
        <Form.Control.Feedback type="invalid">
          Looks good!
        </Form.Control.Feedback>
      </Form.Group>
      <Row>
        <Col md="4" className="mx-auto">
          <Button type="submit" variant="primary" className="w-100">
            Enviar
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default PQRSForm
