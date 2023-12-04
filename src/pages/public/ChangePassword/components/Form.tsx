import useAuth from "@/hooks/useAuth"
import useToggle from "@/hooks/useToggle"
import {
  type CambiarClaveFormData,
  cambiarClaveSchema,
} from "@/types/usuarioTypes"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { yupResolver } from "@hookform/resolvers/yup"
import { type FC } from "react"
import { Button, Form, InputGroup, Stack } from "react-bootstrap"
import { type SubmitHandler, useForm } from "react-hook-form"

const ChangePasswordForm: FC = () => {
  const [showPassword, toggleShowPassword] = useToggle()
  const [showPasswordConfirmation, toggleShowPasswordConfirmation] = useToggle()
  const { cambiarClave } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CambiarClaveFormData>({
    resolver: yupResolver(cambiarClaveSchema),
  })

  const onSubmit: SubmitHandler<CambiarClaveFormData> = async (formData) => {
    await cambiarClave(formData)
  }

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={3}>
        <Form.Group controlId="claveInput">
          <Form.Label>Nueva contraseña</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              {...register("clave")}
              isInvalid={errors.clave}
              disabled={isSubmitting}
              type={showPassword ? "text" : "password"}
              placeholder="Ingrese su nueva contraseña"
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

        <Form.Group controlId="confirmarClaveInput">
          <Form.Label>Confirmar contraseña</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              {...register("confirmarClave")}
              isInvalid={errors.confirmarClave}
              disabled={isSubmitting}
              type={showPasswordConfirmation ? "text" : "password"}
              placeholder="Confirme su nueva contraseña"
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
        <section className="d-flex">
          <Button
            type="submit"
            variant="primary"
            className="mx-auto"
            disabled={isSubmitting}
          >
            Recuperar contraseña
          </Button>
        </section>
      </Stack>
    </Form>
  )
}

export default ChangePasswordForm
