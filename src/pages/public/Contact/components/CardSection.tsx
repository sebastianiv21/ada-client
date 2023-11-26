import { type FC } from "react"
import { Card, Col, Ratio, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { type IconDefinition } from "@fortawesome/fontawesome-svg-core"

interface ContentProps {
  subtitle: string
  text: string
}

interface CardSectionProps {
  icon: IconDefinition
  content: ContentProps[]
}

const CardSection: FC<CardSectionProps> = ({ icon, content }) => {
  return (
    <Row>
      <Col xs={3} className="m-auto">
        <Ratio aspectRatio="1x1">
          <figure className="bg-light text-secondary rounded-circle d-flex justify-content-center align-items-center mx-auto my-0">
            <FontAwesomeIcon icon={icon} className="w-50 h-auto" />
          </figure>
        </Ratio>
      </Col>
      <Col>
        {content.map((item) => (
          <>
            <Card.Subtitle className="mb-2 text-primary">
              {item.subtitle}
            </Card.Subtitle>
            <Card.Text className="text-break">{item.text}</Card.Text>
          </>
        ))}
      </Col>
    </Row>
  )
}

export default CardSection
