import { faEraser, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { type FC } from "react"
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap"

const UsersFilters: FC = () => {
  return (
    <Form>
      <Row className="g-3">
        <Col sm={4}>
          <Form.Select aria-label="Filtrar por rol">
            <option value={undefined}>Roles</option>
          </Form.Select>
        </Col>

        <Col sm={6}>
          <InputGroup>
            <Form.Control
              placeholder="Número de documento"
              aria-label="Filtrar por número de documento"
            />
            <Button variant="secondary">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup>
        </Col>

        <Col>
          <Button variant="secondary">
            <FontAwesomeIcon icon={faEraser} />
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default UsersFilters
