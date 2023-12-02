import { type FC } from "react"
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import useToggle from "@/hooks/useToggle"
import { type AdminFormData, adminSchema } from "@/types/usuarioTypes"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

const CreateAdminForm: FC = () => {
  const [showPassword, toggleShowPassword] = useToggle()
  const [showPasswordConfirmation, toggleShowPasswordConfirmation] = useToggle()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // reset,
  } = useForm<AdminFormData>({
    resolver: yupResolver(adminSchema),
  })

  // TODO: Add submit handler
  const onSubmit = async (data: AdminFormData): void => {
    console.log(data)
    // reset()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Tipo de documento</Form.Label>
          <Form.Select {...register("tipoDocumento")}>
            <option value="">Seleccione</option>
            <option value="1">Peticiones</option>
            <option value="2">Quejas</option>
            <option value="3">Reclamos</option>
            <option value="4">Sugerencias</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="numeroDocumentoInput">
          <Form.Label>Número de documento</Form.Label>
          <Form.Control
            {...register("numeroDocumento")}
            type="text"
            placeholder="Ingrese su número de documento"
          />
          <Form.Control.Feedback type="invalid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="nombresInput">
          <Form.Label>Nombres</Form.Label>
          <Form.Control
            {...register("nombres")}
            type="text"
            placeholder="Ingrese sus nombres"
          />
          <Form.Control.Feedback type="invalid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="apellidosInput">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            {...register("apellidos")}
            type="text"
            placeholder="Ingrese sus apellidos"
          />
          <Form.Control.Feedback type="invalid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="fechaNacimientoInput">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control
            {...register("fechaNacimiento")}
            type="date"
            placeholder="Ingrese su fecha de nacimiento"
          />
          <Form.Control.Feedback type="invalid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="generoInput">
          <Form.Label>Género</Form.Label>
          <Form.Select {...register("genero")}>
            <option value="">Seleccione</option>
            <option value="1">Peticiones</option>
            <option value="2">Quejas</option>
            <option value="3">Reclamos</option>
            <option value="4">Sugerencias</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="tipoSangreInput">
          <Form.Label>Tipo de sangre</Form.Label>
          <Form.Select {...register("tipoSangre")}>
            <option value="">Seleccione</option>
            <option value="1">Peticiones</option>
            <option value="2">Quejas</option>
            <option value="3">Reclamos</option>
            <option value="4">Sugerencias</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="rhInput">
          <Form.Label>RH</Form.Label>
          <Form.Select {...register("rh")}>
            <option value="">Seleccione</option>
            <option value="1">Peticiones</option>
            <option value="2">Quejas</option>
            <option value="3">Reclamos</option>
            <option value="4">Sugerencias</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="telefonoInput">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            {...register("telefono")}
            type="text"
            placeholder="Ingrese su número de teléfono"
          />
          <Form.Control.Feedback type="invalid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="emailInput">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            {...register("email")}
            type="text"
            placeholder="Ingrese su correo electrónico"
          />
          <Form.Control.Feedback type="invalid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="claveInput">
          <Form.Label>Contraseña</Form.Label>
          <InputGroup>
            <Form.Control
              {...register("clave")}
              type={showPassword ? "text" : "password"}
              placeholder="Ingrese su contraseña"
            />
            <Button variant="outline-primary" onClick={toggleShowPassword}>
              {showPassword ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </Button>
            <Form.Control.Feedback type="invalid">
              Please choose a password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="confirmarClaveInput">
          <Form.Label>Confirmar contraseña</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              {...register("confirmarClave")}
              type={showPasswordConfirmation ? "text" : "password"}
              placeholder="Ingrese su contraseña nuevamente"
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
            <Form.Control.Feedback type="invalid">
              Please choose a password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row>
        <Col md="4" className="mx-auto">
          <Button
            type="submit"
            variant="primary"
            className="w-100"
            disabled={isSubmitting}
          >
            Crear administrador
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default CreateAdminForm
