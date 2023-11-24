import { type FC } from "react"
import { Container } from "react-bootstrap"

const NotFound: FC = () => (
  <Container className="text-secondary mt-5 min-vh-100">
    <h1>Página no encontrada</h1>
    <p>La página que estás buscando no existe.</p>
  </Container>
)

export default NotFound
