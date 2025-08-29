import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import {Form, Button, Alert} from 'react-bootstrap';

const Editar = ()=>{
    const {id} = useParams();

    const navigate = useNavigate();

    const [alumno, setAlumno] = useState({
        nombre: "",
        numero_documento: "",
        nota1: "",
        nota2: "",
        nota3: "",
    });
    
    const [loading, setLoading] = useState(null);

    const [error, setError] = useState(null);
    
    const [showAlert, setShowAlert] = useState(null);

    useEffect(()=>{
        const fetchAlumno = async ()=>{
            setLoading(true);
            setError(null);
            try{
                const response = await axios.get(`http://127.0.0.1:8000/api/alumnos/${id}/`);
                setAlumno(response.data);
            }catch(error){
                setError(error.message || 'Error al cargar el alumno');
            }finally{
                setLoading(false);
            }
        };

        fetchAlumno();
    
    }, [id])

    const handlechange = (e)=>{
        setAlumno({...alumno, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/alumnos/${id}/`, alumno);
            setShowAlert({ variant: 'success', message: 'Alumno actualizado exitosamente!' });
            setTimeout(() => navigate('/'), 1500);
        } catch (error) {
            console.error('Error al actualizar alumno:', error);
            setShowAlert({variant: 'danger', message: err.message || 'Error al actualizar el alumno.' })
        }
    }

    if(loading){
        return <div> Cargando informacion del alumno...</div>
    }

    if(error){
        return <Alert variant="danger">{error}</Alert>
    }

    return(
        <div>

            <h2>Editar Alumno</h2>

            {showAlert && (
                <Alert variant={showAlert.variant} onClose={() => setShowAlert(null)} dismissible>
                    {showAlert.message}
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        value={alumno.nombre}
                        onChange={handlechange}
                        required
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>numero de documento</Form.Label>
                    <Form.Control
                        type="text"
                        name="numero_documento"
                        value={alumno.numero_documento}
                        onChange={handlechange}
                        required
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nota 1</Form.Label>
                    <Form.Control
                        type="number"
                        name="nota1"
                        step="0.01"
                        value={alumno.nota1}
                        onChange={handlechange}
                        required
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nota 2</Form.Label>
                    <Form.Control
                        type="number"
                        name="nota2"
                        step="0.01"
                        value={alumno.nota2}
                        onChange={handlechange}
                        required
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nota 3</Form.Label>
                    <Form.Control
                        type="number"
                        name="nota3"
                        step="0.01"
                        value={alumno.nota3}
                        onChange={handlechange}
                        required
                    ></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Guardar Cambio</Button>
                <Link to="/" className="btn btn-secundary ml-2">Cancelar</Link>
            </Form>
        </div>
    )
}


export default Editar;