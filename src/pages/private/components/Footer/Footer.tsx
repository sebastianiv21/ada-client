import { type FC } from "react"
import { Container } from "react-bootstrap"

const Footer: FC = () => {
  return (
    <footer className="mt-auto bg-primary text-light py-2">
      <Container>
        <h3>
          Grupo de Investigación en Electrónica, Telecomunicaciones e
          Informática - GETI © Universidad Surcolombiana
        </h3>
      </Container>
    </footer>
  )
}

export default Footer
