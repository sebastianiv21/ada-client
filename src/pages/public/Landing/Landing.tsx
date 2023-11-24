import { type FC } from "react"
import { Col, Container, Row, Stack } from "react-bootstrap"
import MainInfo from "./components/MainInfo"
import TextImage from "@/components/ui/TextImage"
import medico from "@/assets/images/avatar-medico.png"
import bacteriaPulmones from "@/assets/images/bacteria-pulmones.png"
import microscopio from "@/assets/images/microscopio.png"

const Landing: FC = () => {
  return (
    <Container>
      <Stack gap={5} className="mt-5">
        <Row>
          <Col md={8}>
            <MainInfo />
          </Col>
        </Row>
        <TextImage image={medico}>
          <h2>Nuestra plataforma</h2>
          <p>
            Es un sistema que permite consultar y analizar las pruebas ADA
            (Adenosina Desaminasa), facilitando su comprensión por medio de
            gráficos estadísticos, permitiendo dar soporte a los informes
            realizados para el SIVIGILA.
          </p>
          <p>
            Brinda una interfaz user-friendly para los distintos usuarios con
            sus respectivas necesidades entre las cuales están la búsqueda,
            consulta y generación de información.
          </p>
        </TextImage>
        <TextImage image={bacteriaPulmones} textFirst>
          <h2>¿Que es la adenosina desaminasa?</h2>
          <p>
            La adenosina desaminasa (ADA) es una proteína producida por las
            células del organismo que está relacionada con la activación de los
            linfocitos, células que juegan un papel fundamental en la respuesta
            inmune a las infecciones.
          </p>
        </TextImage>
        <TextImage image={microscopio}>
          <h2 id="landing-about">¿Qué es lo que se analiza en el examen?</h2>
          <p>
            Los agentes que estimulan al sistema inmunitario, como la bacteria
            Mycobacterium tuberculosis (causante de la tuberculosis), pueden
            hacer que se produzca ADA en las zonas donde se encuentra en mayor
            cantidad. Esta prueba mide la cantidad de ADA en el líquido pleural,
            que permite establecer el diagnóstico de tuberculosis pleural.
          </p>
        </TextImage>
      </Stack>
    </Container>
  )
}

export default Landing
