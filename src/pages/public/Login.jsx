import { useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Footer from '@/components/UI/Footer';
import PublicHeader from '@/components/UI/PublicHeader';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('El correo electrónico no es válido')
    .required('El correo electrónico es obligatorio'),
  password: yup
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
});

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate('/dash');
  };

  return (
    <Container
      fluid
      className="bg-primary min-vh-100 d-flex flex-column justify-content-center"
    >
      <PublicHeader />
      <Form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 text-center w-25 mx-auto" controlId="email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su correo electrónico"
            className="text-center"
            {...register('email')}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          className="mb-3 text-center w-25 mx-auto"
          controlId="password"
        >
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            className="text-center"
            {...register('password')}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant="secondary"
          type="submit"
          className="mx-auto gap-2 d-flex align-items-center justify-content-center"
        >
          <FontAwesomeIcon icon={faRightToBracket} />
          Iniciar sesión
        </Button>
      </Form>
      <Footer />
    </Container>
  );
};

export default Login;
