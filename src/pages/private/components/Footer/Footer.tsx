import { type FC } from "react"
import { Container } from "react-bootstrap"

const Footer: FC = () => {
  return (
    <footer className="mt-auto bg-primary text-muted text-center py-2">
      <Container>
        <h5>
          Grupo de Investigación en Electrónica, Telecomunicaciones e
          Informática - GETI © Universidad Surcolombiana
        </h5>
      </Container>
    </footer>
  )
}

export default Footer
