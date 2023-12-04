import useAuth from "@/hooks/useAuth"
import {
  type RecuperarClaveFormData,
  recuperarClaveSchema,
} from "@/types/usuarioTypes"
import { yupResolver } from "@hookform/resolvers/yup"
import { type FC } from "react"
import { Button, Form } from "react-bootstrap"
import { type SubmitHandler, useForm } from "react-hook-form"

const ForgotPasswordForm: FC = () => {
  const { recuperarClave } = useAuth()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RecuperarClaveFormData>({
    resolver: yupResolver(recuperarClaveSchema),
  })

  const onSubmit: SubmitHandler<RecuperarClaveFormData> = async (formData) => {
    await recuperarClave(formData)
    reset()
  }

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="emailInput">
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
    </Form>
  )
}

export default ForgotPasswordForm
