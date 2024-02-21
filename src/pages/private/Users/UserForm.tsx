import useToggle from "@/hooks/useToggle"
import { PRIVATE_ROUTES } from "@/routes/routesList"
import { UserFormData, usuarioSchema } from "@/types/usuarioTypes"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { yupResolver } from "@hookform/resolvers/yup"
import { type FC } from "react"
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Row,
  Stack,
} from "react-bootstrap"
import { type SubmitHandler, useForm } from "react-hook-form"
import { useLocation } from "wouter"

const UserForm: FC<{ initialUserFormData: UserFormData }> = ({
  initialUserFormData,
}) => {
  const [showPassword, toggleShowPassword] = useToggle()
  const [showPasswordConfirmation, toggleShowPasswordConfirmation] = useToggle()
  const [, setLocation] = useLocation()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserFormData>({
    resolver: yupResolver(usuarioSchema),
    defaultValues: initialUserFormData,
  })

  const onSubmit: SubmitHandler<UserFormData> = async (formData) => {
    // const response = await createAdmin(formData)
    // if (response.status === 201) {
    //   setLocation(PUBLIC_ROUTES.LOGIN)
    // }
  }

  return (
    <Form noValidate>
      <Stack gap={3}>
        <Card bg="secondary" text="light" className="p-3 p-md-4">
          <h3 className="text-center">Información personal</h3>
          <Row xs={1} md={2} xl={4}>
            <Form.Group
              as={Col}
              controlId="tipoDocumentoInput"
              className="mb-3"
            >
              <Form.Label>Tipo de documento</Form.Label>
              <Form.Select>
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="numeroDocumentoInput"
              className="mb-3"
            >
              <Form.Label>Número de documento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese número de documento"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="nombresInput" className="mb-3">
              <Form.Label>Nombres</Form.Label>
              <Form.Control type="text" placeholder="Ingrese nombres" />
            </Form.Group>
            <Form.Group as={Col} controlId="apellidosInput" className="mb-3">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="text" placeholder="Ingrese apellidos" />
            </Form.Group>
          </Row>
        </Card>

        <Card bg="secondary" text="light" className="p-3 p-md-4">
          <h3 className="text-center">Información general</h3>
          <Row xs={1} md={2} xl={3}>
            <Form.Group
              as={Col}
              controlId="fechaNacimientoInput"
              className="mb-3"
            >
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group as={Col} controlId="generoInput" className="mb-3">
              <Form.Label>Género</Form.Label>
              <Form.Select>
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="estadoCivilInput" className="mb-3">
              <Form.Label>Estado civil</Form.Label>
              <Form.Select>
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="epsInput" className="mb-3">
              <Form.Label>EPS</Form.Label>
              <Form.Select>
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="epsInput" className="mb-3">
              <Form.Label>RH</Form.Label>
              <Form.Select>
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Form.Select>
            </Form.Group>
          </Row>
        </Card>

        <Card bg="secondary" text="light" className="p-3 p-md-4">
          <h3 className="text-center">Datos de localización</h3>
          <Row xs={1} md={2} xl={3}>
            <Form.Group as={Col} controlId="telefonoInput" className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="text" placeholder="Ingrese teléfono" />
            </Form.Group>
            <Form.Group as={Col} controlId="telefono2Input" className="mb-3">
              <Form.Label>Teléfono 2</Form.Label>
              <Form.Control type="text" placeholder="Ingrese teléfono" />
            </Form.Group>
            <Form.Group as={Col} controlId="departamentoInput" className="mb-3">
              <Form.Label>Departamento</Form.Label>
              <Form.Select>
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="municipioInput" className="mb-3">
              <Form.Label>Municipio</Form.Label>
              <Form.Select>
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="direccionInput" className="mb-3">
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" placeholder="Ingrese dirección" />
            </Form.Group>
          </Row>
        </Card>

        <Card bg="secondary" text="light" className="p-3 p-md-4">
          <h3 className="text-center">Información de usuario</h3>
          <Row xs={1} md={2} xl={3}>
            <Form.Group as={Col} controlId="emailInput" className="mb-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese correo electrónico"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="passwordInput" className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingrese contraseña"
                />
                <Button variant="outline-primary" onClick={toggleShowPassword}>
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </Button>
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="confirmPasswordInput"
              className="mb-3"
            >
              <Form.Label>Confirmar contraseña</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type={showPasswordConfirmation ? "text" : "password"}
                  placeholder="Ingrese contraseña nuevamente"
                />
                <Button
                  variant="outline-primary"
                  onClick={toggleShowPasswordConfirmation}
                >
                  {showPasswordConfirmation ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </Button>
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} controlId="rolInput" className="mb-3">
              <Form.Label>Rol</Form.Label>
              <Form.Select>
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="estadoInput" className="mb-3">
              <Form.Label>Estado</Form.Label>
              <Form.Select>
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Form.Select>
            </Form.Group>
          </Row>
        </Card>

        <Card bg="secondary" text="light" className="p-3 p-md-4">
          <h3 className="text-center">Información de contacto</h3>
          <Row xs={1} md={2} xl={3}>
            <Form.Group
              as={Col}
              controlId="nombreContactoInput"
              className="mb-3"
            >
              <Form.Label>Nombres contacto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombres de contacto"
              />
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="apellidoContactoInput"
              className="mb-3"
            >
              <Form.Label>Apellidos contacto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese apellidos de contacto"
              />
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="emailContactoInput"
              className="mb-3"
            >
              <Form.Label>Correo electrónico de contacto</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese correo electrónico de contacto"
              />
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="telefonoContactoInput"
              className="mb-3"
            >
              <Form.Label>Teléfono de contacto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese teléfono de contacto"
              />
            </Form.Group>
          </Row>
        </Card>

        <Row className="justify-content-center gap-3">
          <Button
            variant="dark"
            type="button"
            className="w-auto"
            onClick={() => {
              setLocation(PRIVATE_ROUTES.USERS)
            }}
          >
            Cancelar
          </Button>
          <Button variant="secondary" type="submit" className="w-auto">
            Guardar
          </Button>
        </Row>
      </Stack>
    </Form>
  )
}

export default UserForm
