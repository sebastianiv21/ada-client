import { type FC } from "react"
import { Container } from "react-bootstrap"
import TextImage from "@/components/ui/TextImage"
import contacto from "@/assets/images/contacto.png"
import ContactCard from "./components/ContactCard"

const Contact: FC = () => {
  return (
    <Container fluid className="my-5">
      <TextImage image={contacto} textFirst>
        <h2>Contáctenos</h2>
        <ContactCard />
      </TextImage>
    </Container>
  )
}

export default Contact
