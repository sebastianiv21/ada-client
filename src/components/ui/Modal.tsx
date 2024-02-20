import { type FC } from "react"
import { Button, Modal } from "react-bootstrap"

interface CustomModalProps {
  show: boolean
  title: string
  body: string
  cancelButtonText: string
  confirmButtonText: string
  onHide: () => void
  onConfirm: () => void
}

const CustomModal: FC<CustomModalProps> = ({
  show,
  onHide,
  title,
  body,
  cancelButtonText,
  confirmButtonText,
  onConfirm,
}) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{body}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="dark" onClick={onHide}>
          {cancelButtonText}
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          {confirmButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CustomModal
