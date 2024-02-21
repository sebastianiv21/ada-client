import {
  faPenToSquare,
  faPlus,
  faTrash,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { type FC, useState } from "react"
import { Button, Col, Row, Stack } from "react-bootstrap"
import UsersFilters from "./components/UsersFilters"
import CustomTable from "@/components/ui/Table"
import CustomModal from "@/components/ui/Modal"
import { useLocation } from "wouter"
import { PRIVATE_ROUTES } from "@/routes/routesList"

const Users: FC = () => {
  const [showDelete, setShowDelete] = useState<boolean>(false)
  const [, setLocation] = useLocation()

  const deleteModalProps = {
    show: showDelete,
    title: "Eliminar usuario",
    body: "¿Está seguro de eliminar el usuario?",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Eliminar",
    onHide: () => {
      setShowDelete(false)
    },
    onConfirm: () => {
      setShowDelete(false)
    },
  }

  const customTableProps = {
    headers: ["NÚMERO DE DOCUMENTO", "NOMBRE", "ROL", "ESTADO", "ACCIONES"],
    items: [1],
    renderItems: () => {
      return (
        <tr>
          <td>Nombre</td>
          <td>Correo</td>
          <td>Rol</td>
          <td>Estado</td>
          <td>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                console.log("editar")
              }}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
            <Button
              variant="danger"
              size="sm"
              className="ms-2"
              onClick={() => {
                setShowDelete(true)
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </td>
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
    <Stack gap={3} className="mt-3">
      <h1>
        <FontAwesomeIcon icon={faUsers} /> Usuarios
      </h1>

      <Row className="g-3">
        <Col>
          <UsersFilters />
        </Col>
        <Col xs={2} className="d-flex">
          <Button
            variant="secondary"
            className="ms-auto"
            onClick={() => {
              setLocation(`${PRIVATE_ROUTES.USERS}/crear`)
            }}
          >
            <FontAwesomeIcon icon={faPlus} /> Nuevo
          </Button>
        </Col>
      </Row>

      <CustomTable {...customTableProps} />

      <CustomModal {...deleteModalProps} />
    </Stack>
  )
}

export default Users
