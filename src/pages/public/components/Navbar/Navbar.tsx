import { type FC } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"

const PublicNavbar: FC = () => {
  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className="d-flex gap-2 text-secondary fw-bold">
          <img
            alt="ADA Health logo"
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-middle"
          />
          ADA Health
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <Nav.Link href="#link">Ingresar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PublicNavbar
