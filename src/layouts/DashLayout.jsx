import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from '@/components/UI/Footer';
import DashHeader from '@/components/UI/DashHeader';

const DashLayout = () => (
  <Container fluid className="min-vh-100 p-0 d-flex flex-column bg-primary">
    <DashHeader />
    <Outlet />
    <Footer />
  </Container>
);

export default DashLayout;
