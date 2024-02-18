import { type FC } from "react"
import { Col, Image, Row } from "react-bootstrap"
import welcomeImage from "@/assets/images/welcome.svg"
import WelcomeCardsSection from "./components/WelcomeCardsSection"

const Welcome: FC = () => {
  return (
    <Row className="g-4">
      <Col md={4} className="d-flex justify-content-center">
        <Image src={welcomeImage} fluid />
      </Col>
      <Col md={8}>
        <WelcomeCardsSection />
      </Col>
    </Row>
  )
}

export default Welcome
