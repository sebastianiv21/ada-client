import { useNavigate } from 'react-router-dom';
import {
  Button, Col, Container, Row, Stack,
} from 'react-bootstrap';

import PublicHeader from '@/components/UI/PublicHeader';
import Footer from '@/components/UI/Footer';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Container
      fluid
      className="bg-primary min-vh-100 d-flex flex-column justify-content-center"
    >
      <PublicHeader />
      <Row className="mt-5">
        <Col className="d-flex justify-content-center mt-5">
          <Stack direction="horizontal" gap={3}>
            <Button
              variant="outline-secondary"
              size="lg"
              className="rounded-pill border border-2 border-secondary"
              onClick={() => navigate('/login')}
            >
              {/* <i className="fa-solid fa-right-to-bracket me-1" /> */}
              Iniciar sesión
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-pill"
              onClick={() => navigate('/login')}
            >
              {/* <i className="fa-solid fa-user-plus me-1" /> */}
              Registrarse
            </Button>
          </Stack>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Landing;
