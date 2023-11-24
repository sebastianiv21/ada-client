import { type FC } from "react"
import { Card } from "react-bootstrap"

const ContactCard: FC = () => {
  return (
    <Card bg="secondary" text="light">
      <Card.Body>
        <Card.Title>Información de contacto</Card.Title>
        <Card.Subtitle className="mb-2 text-primary">Dirección</Card.Subtitle>
        <Card.Text>
          Calle 5 de Mayo # 10, Col. Centro, C.P. 68000, Oaxaca de Juárez,
          Oaxaca.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ContactCard
