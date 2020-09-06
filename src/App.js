import React, { useState } from "react";
import { Navbar, Nav, Image, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Vistas
import Home from "./views/Home";
import Gender from "./views/Gender";

// Components
import ModalSingUp from "./components/ModalSignUp";
import ModalLogin from "./components/ModalLogin";

// Logo
import Logo from "./assets/img/cuevana3.png";

export default function App() {
  const [showRegistry, setShowRegistry] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseModalRegistry = () => {
    setShowRegistry(false);
  };

  const handleOpenModalRegistry = () => {
    setShowRegistry(true);
  };

  const handleCloseModalLogin = () => {
    setShowLogin(false);
  };

  const handleOpenModalLogin = () => {
    setShowLogin(true);
  };

  return (
    <Router>
      <Navbar expand="lg" className="navbar-custom">
        <Navbar.Brand>
          <Image src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link className="custom-link" to="/">
                Inicio
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="custom-link" to="/gender">
                Generos
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link>
              <Button
                variant="link"
                className="custom-link custom-button-link"
                onClick={handleOpenModalLogin}
              >
                Entrar
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button
                className="custom-button-registry"
                onClick={handleOpenModalRegistry}
              >
                Registro
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/gender" component={Gender} />
      </Switch>

      {showRegistry && (
        <ModalSingUp
          handleClose={handleCloseModalRegistry}
          show={showRegistry}
        />
      )}

      {showLogin && (
        <ModalLogin handleClose={handleCloseModalLogin} show={showLogin} />
      )}
    </Router>
  );
}
