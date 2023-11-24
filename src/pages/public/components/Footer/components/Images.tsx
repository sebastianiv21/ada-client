import { type FC } from "react"
import { Image, Stack } from "react-bootstrap"
import gobernacionHuila from "@/assets/images/gobernacion-huila.png"
import hospitalNeiva from "@/assets/images/hospital-neiva.png"
import universidadSurcolombiana from "@/assets/images/universidad-surcolombiana.png"

const Images: FC = () => {
  return (
    <Stack className="align-middle" direction="horizontal" gap={3}>
      <Image
        src={gobernacionHuila}
        width={150}
        fluid
        className="align-middle"
      />
      <Image src={hospitalNeiva} fluid className="align-middle" />
      <Image src={universidadSurcolombiana} fluid className="align-middle" />
    </Stack>
  )
}

export default Images
