import { useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import PublicHeader from '@components/UI/PublicHeader';
import Footer from '@components/UI/Footer';

const Login = () => {
  const navigate = useNavigate();
  return (
    <Container
      fluid
      className="bg-primary min-vh-100 d-flex flex-column justify-content-center"
    >
      <PublicHeader />
      <Form className="d-flex flex-column mt-5">
        <Form.Group className="mb-4 text-center w-25 mx-auto" controlId="email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su correo electrónico"
            className="text-center rounded-pill"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 text-center w-25 mx-auto"
          controlId="password"
        >
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            className="text-center rounded-pill"
          />
        </Form.Group>
        <Button
          variant="secondary"
          className="rounded-pill mx-auto"
          onClick={() => navigate('/dash')}
        >
          {/* <i className="fa-solid fa-right-to-bracket me-1" /> */}
          Iniciar sesión
        </Button>
      </Form>
      <Footer />
    </Container>
  );
};

export default Login;
