import { type FC } from "react"
import { Card } from "react-bootstrap"
import { type WelcomeCardProps } from "../types/Welcome"
import { useLocation } from "wouter"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const WelcomeCard: FC<WelcomeCardProps> = ({ title, route, icon }) => {
  const [, setLocation] = useLocation()

  const onClick: () => void = () => {
    setLocation(route)
  }

  return (
    <Card
      onClick={onClick}
      bg="secondary"
      text="white"
      className="h-100"
      role="button"
    >
      <Card.Body>
        <div className="d-flex justify-content-center mb-2">
          <FontAwesomeIcon icon={icon} size="6x" fixedWidth />
        </div>
        <Card.Title className="text-center">{title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default WelcomeCard
