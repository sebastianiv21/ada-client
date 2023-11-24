import { type FC } from 'react'
import { Spinner } from 'react-bootstrap'

const CustomSpinner: FC = () => (
  <div className="d-flex justify-content-center gap-2">
    <Spinner animation="grow" variant="primary" />
    <Spinner animation="grow" variant="primary" />
    <Spinner animation="grow" variant="primary" />
  </div>
)

export default CustomSpinner
