import { type FC } from "react"
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import useToggle from "@/hooks/useToggle"
import { type AdminFormData, adminSchema } from "@/types/usuarioTypes"
import { type SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { format } from "date-fns"

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
  const onSubmit: SubmitHandler<AdminFormData> = async (data) => {
    console.log(data)
    // reset()
  }

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Tipo de documento</Form.Label>
          <Form.Select
            {...register("tipoDocumento")}
            isInvalid={errors.tipoDocumento}
          >
            <option value="">Seleccione</option>
            <option value="1">Peticiones</option>
            <option value="2">Quejas</option>
            <option value="3">Reclamos</option>
            <option value="4">Sugerencias</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.tipoDocumento?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="numeroDocumentoInput">
          <Form.Label>Número de documento</Form.Label>
          <Form.Control
            {...register("numeroDocumento")}
            isInvalid={errors.numeroDocumento}
            type="text"
            placeholder="Ingrese su número de documento"
          />
          <Form.Control.Feedback type="invalid">
            {errors.numeroDocumento?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="nombresInput">
          <Form.Label>Nombres</Form.Label>
          <Form.Control
            {...register("nombres")}
            isInvalid={errors.nombres}
            type="text"
            placeholder="Ingrese sus nombres"
          />
          <Form.Control.Feedback type="invalid">
            {errors.nombres?.message}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="apellidosInput">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            {...register("apellidos")}
            isInvalid={errors.apellidos}
            type="text"
            placeholder="Ingrese sus apellidos"
          />
          <Form.Control.Feedback type="invalid">
            {errors.apellidos?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="fechaNacimientoInput">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control
            {...register("fechaNacimiento")}
            isInvalid={errors.fechaNacimiento}
            type="date"
            defaultValue={format(new Date(), "yyyy-MM-dd")}
            placeholder="Ingrese su fecha de nacimiento"
          />
          <Form.Control.Feedback type="invalid">
            {errors.fechaNacimiento?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="generoInput">
          <Form.Label>Género</Form.Label>
          <Form.Select {...register("genero")} isInvalid={errors.genero}>
            <option value="">Seleccione</option>
            <option value="1">Peticiones</option>
            <option value="2">Quejas</option>
            <option value="3">Reclamos</option>
            <option value="4">Sugerencias</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.genero?.message}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="tipoSangreInput">
          <Form.Label>Tipo de sangre</Form.Label>
          <Form.Select
            {...register("tipoSangre")}
            isInvalid={errors.tipoSangre}
          >
            <option value="">Seleccione</option>
            <option value="1">Peticiones</option>
            <option value="2">Quejas</option>
            <option value="3">Reclamos</option>
            <option value="4">Sugerencias</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.tipoSangre?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="rhInput">
          <Form.Label>RH</Form.Label>
          <Form.Select {...register("rh")} isInvalid={errors.rh}>
            <option value="">Seleccione</option>
            <option value="1">Peticiones</option>
            <option value="2">Quejas</option>
            <option value="3">Reclamos</option>
            <option value="4">Sugerencias</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.rh?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="telefonoInput">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            {...register("telefono")}
            isInvalid={errors.telefono}
            type="number"
            placeholder="Ingrese su número de teléfono"
          />
          <Form.Control.Feedback type="invalid">
            {errors.telefono?.message}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="emailInput">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            {...register("email")}
            isInvalid={errors.email}
            type="text"
            placeholder="Ingrese su correo electrónico"
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="claveInput">
          <Form.Label>Contraseña</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              {...register("clave")}
              isInvalid={errors.clave}
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
              {errors.clave?.message}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="confirmarClaveInput">
          <Form.Label>Confirmar contraseña</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              {...register("confirmarClave")}
              isInvalid={errors.confirmarClave}
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
              {errors.confirmarClave?.message}
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
