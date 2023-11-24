import { type FC } from "react"
import { Col, Container, Row } from "react-bootstrap"
import ConoceMas from "./components/ConoceMas"
import Images from "./components/Images"

const Footer: FC = () => {
  return (
    <footer className="mt-auto bg-secondary text-light py-2">
      <Container>
        <Row className="span-2">
          <Col md={8} className="align-items-center d-flex">
            <Images />
          </Col>
          <Col md={4}>
            <ConoceMas />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
