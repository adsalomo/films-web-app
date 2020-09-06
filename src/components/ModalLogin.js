import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import UserService from "../services/UserService";

function SingUp(props) {
  const { show, handleClose } = props;
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await UserService.login({
        email: "adrian.lopez@pascualbravo.edu.co",
        password: "123456",
      });
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal centered backdrop="static" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup>
            <FormLabel className="custom-form-label">Email</FormLabel>
            <FormControl placeholder="Email" className="custom-form-control" />
          </FormGroup>

          <FormGroup>
            <FormLabel className="custom-form-label">Contraseña</FormLabel>
            <FormControl
              placeholder="Contraseña"
              className="custom-form-control"
            />
          </FormGroup>
          <Button block className="custom-button" onClick={handleLogin}>
            Iniciar Sesión
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <p>¿Perdiste tu contraseña?</p>
      </Modal.Footer>
    </Modal>
  );
}

export default SingUp;
