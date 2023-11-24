import { type FC } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "wouter"

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: "Inicio", href: "/landing" },
  { label: "PQRS", href: "/pqrs" },
  { label: "Contacto", href: "/contacto" },
  { label: "Ingresar", href: "/login" },
]

const PublicNavbar: FC = () => {
  return (
    <Navbar expand="lg" sticky="top" bg="primary" data-bs-theme="light">
      <Container>
        <Link href="/landing">
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
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((navLink) => (
              <Link href={navLink.href} key={navLink.label}>
                <Nav.Link>{navLink.label}</Nav.Link>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PublicNavbar
