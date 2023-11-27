import { type FC, useState } from "react"
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"

const CreateAdminForm: FC = () => {
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
          <Form.Label>Nombres</Form.Label>
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
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Género</Form.Label>
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
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Tipo de sangre</Form.Label>
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
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>RH</Form.Label>
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
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Correo electrónico</Form.Label>
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
        <Form.Group as={Col} md="4" controlId="validationCustomPassword">
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
        <Form.Group as={Col} md="4" controlId="validationCustomPassword">
          <Form.Label>Confirmar contraseña</Form.Label>
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
      </Row>
      <Row>
        <Col md="4" className="mx-auto">
          <Button type="submit" variant="primary" className="w-100">
            Crear administrador
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default CreateAdminForm
