import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListaAlumnos from "./components/ListaAlumnos";
import CrearAlumno from "./components/CrearAlumno";
import Editar from "./components/Editar";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="text-white">
                Lista De Alumnos
              </Nav.Link>
              <Nav.Link as={Link} to="/crear" className="text-white">
                Crear Alumno
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<ListaAlumnos />} />
          <Route path="/crear" element={<CrearAlumno/>}/>
          <Route path="/editar/:id" element={<Editar/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
