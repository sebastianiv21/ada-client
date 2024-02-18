import { type FC } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "wouter"

interface NavLink {
  label: string
  href: string
}

interface CustomNavbarProps {
  homeRoute: string
  navLinks: NavLink[]
}

const CustomNavbar: FC<CustomNavbarProps> = ({ homeRoute, navLinks }) => {
  return (
    <Navbar expand="lg" sticky="top" bg="primary" data-bs-theme="light">
      <Container>
        <Link href={homeRoute}>
          <Navbar.Brand className="d-flex gap-2 text-secondary">
            <img
              alt="ADA Health logo"
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-middle"
            />
            <strong>ADA Health</strong>
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

export default CustomNavbar
