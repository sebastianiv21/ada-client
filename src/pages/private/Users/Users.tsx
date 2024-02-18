import { faPlus, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { type FC } from "react"
import { Button, Col, Row, Stack } from "react-bootstrap"
import UsersFilters from "./components/UsersFilters"
import CustomTable from "@/components/ui/Table"

const Users: FC = () => {
  const customTableProps = {
    headers: ["NOMBRE", "CORREO", "ROL", "ESTADO", "ACCIONES"],
    items: [],
    renderItems: () => {
      return (
        <tr>
          <td>Nombre</td>
          <td>Correo</td>
          <td>Rol</td>
          <td>Estado</td>
          <td>Acciones</td>
        </tr>
      )
    },
    currentPage: 1,
    totalItems: 100,
    itemsPerPage: 10,
    onPageChange: (page: number) => {
      console.log(page)
    },
  }

  return (
    <Stack gap={3}>
      <h1>
        <FontAwesomeIcon icon={faUsers} /> Usuarios
      </h1>

      <Row className="g-3">
        <Col>
          <UsersFilters />
        </Col>
        <Col xs={2} className="d-flex">
          <Button variant="secondary" className="ms-auto">
            <FontAwesomeIcon icon={faPlus} /> Nuevo
          </Button>
        </Col>
      </Row>

      <CustomTable {...customTableProps} />
    </Stack>
  )
}

export default Users
