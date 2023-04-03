import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Button, Col, Container, Image, Row,
} from 'react-bootstrap';

const Welcome = () => {
  const navigate = useNavigate();

  // TODO: use context
  const [name] = useState('Juan Andrés Castro Saavedra');
  // TODO: use date-fns
  const date = new Date();
  // Format date
  const today = new Intl.DateTimeFormat('es-CO', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(date);
  // <section>
  //   <p>{today[0].toUpperCase() + today.substring(1)}</p>
  //   <h1>Bienvenid@!</h1>
  //   <p>
  //     <Link to='/dash/tests'>Ver resultados de laboratorio</Link>
  //   </p>
  //   <p>
  //     <Link to='/dash/statistics'>Ver estadísticas</Link>
  //   </p>
  // </section>
  return (
    <Container className="bg-primary mt-5">
      <Row>
        <Col className="text-secondary my-auto ms-5">
          <h1>Hola,</h1>
          <h2>{name}</h2>
          <p>{`Hoy es ${today}`}</p>
          <Button
            variant="secondary"
            size="lg"
            className="rounded-pill"
            onClick={() => navigate('/dash/tests')}
          >
            Consultar resultados
          </Button>
        </Col>
        <Col>
          <Image src="/welcome.svg" alt="welcome" className="my-auto" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
