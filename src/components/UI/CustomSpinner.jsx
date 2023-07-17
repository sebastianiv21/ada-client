import { Spinner } from 'react-bootstrap';

const CustomSpinner = ({ className }) => (
  <div className={`d-flex justify-content-center gap-2 ${className}`}>
    <Spinner animation="grow" variant="primary" />
    <Spinner animation="grow" variant="primary" />
    <Spinner animation="grow" variant="primary" />
  </div>
);

export default CustomSpinner;
