import { PRIVATE_ROUTES } from "@/routes/routesList"
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { type FC } from "react"
import { Row, Stack } from "react-bootstrap"
import { useLocation } from "wouter"
import UserForm from "../UserForm"

const CreateUser: FC = () => {
  const [, setLocation] = useLocation()

  return (
    <Stack gap={3} className="mt-3">
      <h1>
        <FontAwesomeIcon
          icon={faCircleLeft}
          onClick={() => {
            setLocation(PRIVATE_ROUTES.USERS)
          }}
          role="button"
        />{" "}
        Crear usuario
      </h1>

      <Row className="justify-content-center mx-1">
        <UserForm />
      </Row>
    </Stack>
  )
}

export default CreateUser
