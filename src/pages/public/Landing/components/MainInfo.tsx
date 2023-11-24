import { type FC } from "react"
import { Button, Image, Stack } from "react-bootstrap"

const MainInfo: FC = () => {
  return (
    <Stack direction="vertical" gap={4}>
      <Stack direction="horizontal" gap={4}>
        <Image src="/logo.png" width={150} />
        <Stack direction="vertical" className="justify-content-center">
          <h1>ADA Health</h1>
          <h2>Sistema Hospitalario</h2>
        </Stack>
      </Stack>
      <h4>
        El sistema de información para administrar las pruebas de adenosina
        desaminasa en los hospitales del departamento del Huila.
      </h4>
      <Button
        variant="secondary"
        size="lg"
        href="#landing-about"
        className="me-auto"
      >
        Acerca del examen
      </Button>
    </Stack>
  )
}

export default MainInfo
