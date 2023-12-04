import { type FC } from "react"
import { Button, Form, InputGroup } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { Link } from "wouter"
import { type SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { type LoginFormData, loginSchema } from "@/types/usuarioTypes"
import useToggle from "@/hooks/useToggle"

const LoginForm: FC = () => {
  const [showPassword, toggleShowPassword] = useToggle()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<LoginFormData> = async (formData) => {}

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="emailInput">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          {...register("email")}
          isInvalid={errors.email}
          disabled={isSubmitting}
          type="text"
          placeholder="Ingrese su correo electrónico"
        />
        <Form.Control.Feedback type="invalid">
          {errors.email?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="passwordInput">
        <Form.Label>Contraseña</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            {...register("clave")}
            isInvalid={errors.clave}
            disabled={isSubmitting}
            type="password"
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
      <Link
        href="/recuperar-clave"
        className="d-block text-center mb-3 text-decoration-none"
      >
        ¿Olvidó su contraseña?
      </Link>
      <section className="d-flex">
        <Button
          type="submit"
          variant="primary"
          className="mx-auto"
          disabled={isSubmitting}
        >
          Iniciar sesión
        </Button>
      </section>
    </Form>
  )
}

export default LoginForm
