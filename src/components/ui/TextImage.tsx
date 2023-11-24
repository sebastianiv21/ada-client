import { type FC, type ReactNode } from "react"
import { Col, Image, Row } from "react-bootstrap"

interface TextImageProps {
  image: string
  children: ReactNode
  textFirst?: boolean
}

const TextImage: FC<TextImageProps> = ({
  image,
  children,
  textFirst = false,
}) => {
  return (
    <Row className={`${textFirst ? "flex-row-reverse" : ""}`}>
      <Col md={6} className="d-grid justify-content-center">
        <Image src={image} fluid />
      </Col>
      <Col md={6} className="d-grid align-content-center">
        {children}
      </Col>
    </Row>
  )
}

export default TextImage
