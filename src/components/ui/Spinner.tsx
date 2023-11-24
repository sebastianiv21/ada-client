import { type FC } from "react"
import { Spinner } from "react-bootstrap"

const CustomSpinner: FC = () => (
  <section className="d-flex justify-content-center gap-2">
    <Spinner animation="grow" variant="secondary" />
    <Spinner animation="grow" variant="secondary" />
    <Spinner animation="grow" variant="secondary" />
  </section>
)

export default CustomSpinner
