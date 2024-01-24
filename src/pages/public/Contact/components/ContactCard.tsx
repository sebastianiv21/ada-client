import { type FC } from "react"
import { Card, Stack } from "react-bootstrap"
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"
import CardSection from "./CardSection"

const contactInfo = [
  {
    icon: faLocationDot,
    content: [
      {
        subtitle: "Dirección",
        text: "Calle 9 #15-25. Barrio Altico, Neiva - Huila",
      },
    ],
  },
  {
    icon: faPhone,
    content: [
      {
        subtitle: "Teléfono",
        text: "321 456 7890",
      },
      {
        subtitle: "PBX",
        text: "(608) 8715907",
      },
      {
        subtitle: "Línea gratuita nacional",
        text: "01 8000 957 878",
      },
    ],
  },
  {
    icon: faEnvelope,
    content: [
      {
        subtitle: "Correo electrónico",
        text: "adahealthlabs@gmail.com",
      },
    ],
  },
]

const ContactCard: FC = () => {
  return (
    <Card bg="secondary" text="light" className="m-auto py-3">
      <Card.Body>
        <Stack direction="vertical" gap={3}>
          {contactInfo.map((item, index) => (
            <div key={index}>
              <CardSection icon={item.icon} content={item.content} />
              {contactInfo.length - 1 !== index && <hr />}
            </div>
          ))}
        </Stack>
      </Card.Body>
    </Card>
  )
}

export default ContactCard
