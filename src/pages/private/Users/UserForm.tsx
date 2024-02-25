import useToggle from "@/hooks/useToggle"
import { PRIVATE_ROUTES } from "@/routes/routesList"
import { type UserFormData, usuarioSchema } from "@/types/usuarioTypes"
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
  const isLoading = false

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

  const onCancel = (): void => {
    setLocation(PRIVATE_ROUTES.USERS)
  }

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
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
              <Form.Select
                {...register("tipoDocumento")}
                isInvalid={errors.tipoDocumento}
                disabled={isLoading || isSubmitting}
              >
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.tipoDocumento?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="numeroDocumentoInput"
              className="mb-3"
            >
              <Form.Label>Número de documento</Form.Label>
              <Form.Control
                {...register("numeroDocumento")}
                isInvalid={errors.numeroDocumento}
                disabled={isSubmitting}
                type="text"
                placeholder="Ingrese número de documento"
              />
              <Form.Control.Feedback type="invalid">
                {errors.numeroDocumento?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="nombresInput" className="mb-3">
              <Form.Label>Nombres</Form.Label>
              <Form.Control
                {...register("nombres")}
                isInvalid={errors.nombres}
                disabled={isSubmitting}
                type="text"
                placeholder="Ingrese nombres"
              />
              <Form.Control.Feedback type="invalid">
                {errors.nombres?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="apellidosInput" className="mb-3">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                {...register("apellidos")}
                isInvalid={errors.apellidos}
                disabled={isSubmitting}
                type="text"
                placeholder="Ingrese apellidos"
              />
              <Form.Control.Feedback type="invalid">
                {errors.apellidos?.message}
              </Form.Control.Feedback>
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
              <Form.Control
                {...register("fechaNacimiento")}
                isInvalid={errors.fechaNacimiento}
                disabled={isSubmitting}
                type="date"
              />
              <Form.Control.Feedback type="invalid">
                {errors.fechaNacimiento?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="generoInput" className="mb-3">
              <Form.Label>Género</Form.Label>
              <Form.Select
                {...register("genero")}
                isInvalid={errors.genero}
                disabled={isLoading || isSubmitting}
              >
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.genero?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="estadoCivilInput" className="mb-3">
              <Form.Label>Estado civil</Form.Label>
              <Form.Select
                {...register("estadoCivil")}
                isInvalid={errors.estadoCivil}
                disabled={isLoading || isSubmitting}
              >
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.estadoCivil?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="epsInput" className="mb-3">
              <Form.Label>EPS</Form.Label>
              <Form.Select
                {...register("eps")}
                isInvalid={errors.eps}
                disabled={isLoading || isSubmitting}
              >
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.eps?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="tipoSangreInput" className="mb-3">
              <Form.Label>Tipo de sangre</Form.Label>
              <Form.Select
                {...register("tipoSangre")}
                isInvalid={errors.tipoSangre}
                disabled={isLoading || isSubmitting}
              >
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.tipoSangre?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="rhInput" className="mb-3">
              <Form.Label>RH</Form.Label>
              <Form.Select
                {...register("rh")}
                isInvalid={errors.rh}
                disabled={isLoading || isSubmitting}
              >
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.rh?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Card>

        <Card bg="secondary" text="light" className="p-3 p-md-4">
          <h3 className="text-center">Datos de localización</h3>
          <Row xs={1} md={2} xl={3}>
            <Form.Group as={Col} controlId="telefonoInput" className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                {...register("telefono")}
                isInvalid={errors.telefono}
                disabled={isSubmitting}
                type="text"
                placeholder="Ingrese teléfono"
              />
              <Form.Control.Feedback type="invalid">
                {errors.telefono?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="telefono2Input" className="mb-3">
              <Form.Label>Teléfono 2</Form.Label>
              <Form.Control
                {...register("telefono2")}
                isInvalid={errors.telefono2}
                disabled={isSubmitting}
                type="text"
                placeholder="Ingrese teléfono"
              />
              <Form.Control.Feedback type="invalid">
                {errors.telefono2?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="departamentoInput" className="mb-3">
              <Form.Label>Departamento</Form.Label>
              <Form.Select
                {...register("departamento")}
                isInvalid={errors.departamento}
                disabled={isLoading || isSubmitting}
              >
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.departamento?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="municipioInput" className="mb-3">
              <Form.Label>Municipio</Form.Label>
              <Form.Select
                {...register("municipio")}
                isInvalid={errors.municipio}
                disabled={isLoading || isSubmitting}
              >
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.municipio?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="direccionInput" className="mb-3">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                {...register("direccion")}
                isInvalid={errors.direccion}
                disabled={isSubmitting}
                type="text"
                placeholder="Ingrese dirección"
              />
              <Form.Control.Feedback type="invalid">
                {errors.direccion?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Card>

        <Card bg="secondary" text="light" className="p-3 p-md-4">
          <h3 className="text-center">Información de usuario</h3>
          <Row xs={1} md={2} xl={3}>
            <Form.Group as={Col} controlId="emailInput" className="mb-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                {...register("email")}
                isInvalid={errors.email}
                disabled={isSubmitting}
                type="email"
                placeholder="Ingrese correo electrónico"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="claveInput" className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  {...register("clave")}
                  isInvalid={errors.clave}
                  disabled={isSubmitting}
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
                <Form.Control.Feedback type="invalid">
                  {errors.clave?.message}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="confirmarClaveInput"
              className="mb-3"
            >
              <Form.Label>Confirmar contraseña</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  {...register("confirmarClave")}
                  isInvalid={errors.confirmarClave}
                  disabled={isSubmitting}
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
                <Form.Control.Feedback type="invalid">
                  {errors.confirmarClave?.message}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} controlId="rolInput" className="mb-3">
              <Form.Label>Rol</Form.Label>
              <Form.Select
                {...register("rol")}
                isInvalid={errors.rol}
                disabled={isLoading || isSubmitting}
              >
                <option value="">Seleccione...</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.rol?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="activoInput" className="mb-3">
              <Form.Check
                {...register("activo")}
                isInvalid={errors.activo}
                disabled={isSubmitting}
                type="checkbox"
                label="Usuario activo"
                id="activoInput"
                className="mt-3"
              />
              <Form.Control.Feedback type="invalid">
                {errors.activo?.message}
              </Form.Control.Feedback>
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
                {...register("contacto.nombres")}
                isInvalid={errors.contacto?.nombres}
                disabled={isSubmitting}
                type="text"
                placeholder="Ingrese nombres de contacto"
              />
              <Form.Control.Feedback type="invalid">
                {errors.contacto?.nombres?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="apellidoContactoInput"
              className="mb-3"
            >
              <Form.Label>Apellidos contacto</Form.Label>
              <Form.Control
                {...register("contacto.apellidos")}
                isInvalid={errors.contacto?.apellidos}
                disabled={isSubmitting}
                type="text"
                placeholder="Ingrese apellidos de contacto"
              />
              <Form.Control.Feedback type="invalid">
                {errors.contacto?.apellidos?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="telefonoContactoInput"
              className="mb-3"
            >
              <Form.Label>Teléfono de contacto</Form.Label>
              <Form.Control
                {...register("contacto.telefono")}
                isInvalid={errors.contacto?.telefono}
                disabled={isSubmitting}
                type="text"
                placeholder="Ingrese teléfono de contacto"
              />
              <Form.Control.Feedback type="invalid">
                {errors.contacto?.telefono?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="parentescoContactoInput"
              className="mb-3"
            >
              <Form.Label>Parentesco de contacto</Form.Label>
              <Form.Control
                {...register("contacto.parentesco")}
                isInvalid={errors.contacto?.parentesco}
                disabled={isSubmitting}
                type="text"
                placeholder="Ingrese teléfono de contacto"
              />
              <Form.Control.Feedback type="invalid">
                {errors.contacto?.parentesco?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Card>

        <Row className="justify-content-center gap-3">
          <Button
            variant="dark"
            type="button"
            className="w-auto"
            onClick={onCancel}
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
