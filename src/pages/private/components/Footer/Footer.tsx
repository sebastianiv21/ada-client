import { type FC } from "react"
import { Container } from "react-bootstrap"

const Footer: FC = () => {
  return (
    <footer className="mt-auto bg-primary text-muted text-center py-2">
      <Container>
        <h6>
          Grupo de Investigación en Electrónica, Telecomunicaciones e
          Informática - GETI © Universidad Surcolombiana
        </h6>
      </Container>
    </footer>
  )
}

export default Footer
