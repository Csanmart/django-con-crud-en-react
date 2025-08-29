import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button, Alert } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

const ListaAlumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteAlert, setDeleteAlert] = useState(null);

  const iconSize = 20;

  useEffect(() => {
    fetchAlumnos();
  }, []);

  const fetchAlumnos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/alumnos/");
      setAlumnos(response.data);
    } catch (err) {
      setError(err.message || "Error obteniendo los datos");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar el usuario?")) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/alumnos/${id}/`);
        setDeleteAlert({
          variant: "success",
          message: "Alumno eliminado exitosamente",
        });
        fetchAlumnos();
        setTimeout(() => setDeleteAlert(null), 3000);
      } catch (err) {
        setDeleteAlert({
          variant: "danger",
          message: err.message || "Error eliminando el usuario",
        });
        setTimeout(() => setDeleteAlert(null), 3000);
      }
    }
  };

  if (loading) {
    return <div>Cargando alumnos...</div>;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <div>
      <Link to="/crear" className="btn btn-primary mb-3">
        Crear nuevo usuario
      </Link>

      {deleteAlert && (
        <Alert variant={deleteAlert.variant}>{deleteAlert.message}</Alert>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Documento</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota 3</th>
            <th>Promedio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.id}>
              <td>{alumno.id}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.numero_documento}</td>
              <td>{alumno.nota1}</td>
              <td>{alumno.nota2}</td>
              <td>{alumno.nota3}</td>
              <td>{alumno.promedio ? alumno.promedio.toFixed(2) : "N/A"}</td>
              <td className="d-flex gap-2">
                <Link
                  to={`/editar/${alumno.id}`}
                  className="btn btn-warning btn-sm"
                >
                  <FaEdit size={iconSize} />
                </Link>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(alumno.id)}
                >
                  <FaTrash size={iconSize} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListaAlumnos;
