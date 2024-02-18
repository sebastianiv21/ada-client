import { type FC } from "react"
import { Col, Row } from "react-bootstrap"
import WelcomeCard from "./WelcomeCard"
import { type WelcomeCardProps } from "../types/Welcome"
import { PRIVATE_ROUTES } from "@/routes/routesList"
import {
  faCalendarCheck,
  faChartColumn,
  faFileMedical,
  faMicroscope,
} from "@fortawesome/free-solid-svg-icons"

const welcomeCards: WelcomeCardProps[] = [
  {
    title: "CITAS LABORATORIO",
    route: PRIVATE_ROUTES.CITAS,
    icon: faCalendarCheck,
  },
  {
    title: "ÓRDENES MÉDICAS",
    route: PRIVATE_ROUTES.ORDENES,
    icon: faFileMedical,
  },
  {
    title: "RESULTADOS LABORATORIO",
    route: PRIVATE_ROUTES.RESULTADOS,
    icon: faMicroscope,
  },
  {
    title: "ESTADÍSTICAS",
    route: PRIVATE_ROUTES.ESTADISTICAS,
    icon: faChartColumn,
  },
]

const ITEMS_PER_ROW_LG = welcomeCards.length <= 3 ? 3 : 2

const WelcomeCardsSection: FC = () => {
  return (
    <Row className="g-3 my-auto" xs={1} sm={1} md={2} lg={ITEMS_PER_ROW_LG}>
      {welcomeCards.map((card, index) => (
        <Col key={index}>
          <WelcomeCard {...card} />
        </Col>
      ))}
    </Row>
  )
}

export default WelcomeCardsSection
