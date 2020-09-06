import React from "react";
import {
  Modal,
  Button,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";

function ModalMovie(props) {
  const { show, handleClose } = props;
  return (
    <Modal
      animation={false}
      centered
      backdrop="static"
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Nueva pelicula</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup>
            <FormLabel className="custom-form-label">Nombre</FormLabel>
            <FormControl placeholder="Nombre" className="custom-form-control" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="custom-form-label">Descripción</FormLabel>
            <FormControl
              placeholder="Descripción"
              className="custom-form-control"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel className="custom-form-label">Género</FormLabel>
            <FormControl as="select" className="custom-form-control">
              <option>--SELECCIONE--</option>
              <option>Acción</option>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel className="custom-form-label">Imagen</FormLabel>
            <FormControl placeholder="Imagen" className="custom-form-control" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="custom-form-label">Fecha estreno</FormLabel>
            <FormControl type="date" className="custom-form-control-date" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="custom-form-label">Actores</FormLabel>
            <FormControl
              placeholder="Actores"
              className="custom-form-control"
            />
          </FormGroup>
          <Button block className="custom-button" onClick={handleClose}>
            Registrar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalMovie;
