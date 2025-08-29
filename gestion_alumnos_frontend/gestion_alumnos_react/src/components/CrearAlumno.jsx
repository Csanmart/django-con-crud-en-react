import React, {useState} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import {Form, Button, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const CrearAlumno = ()=>{
    const [Alumno, setAlumno] = useState({
        nombre: '',
        numero_documento: '',
        nota1: '',
        nota2: '',
        nota3: ''
    });

    const [ShowAlert, setShowAlert] = useState(null);

    const handlechange = (e)=>{
        setAlumno({...Alumno, [e.target.name]: e.target.value});
    }

    const Navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault(); // ✅ corregido

        try{
            const response = await axios.post('http://127.0.0.1:8000/api/alumnos/', Alumno);
            console.log(response);
            setShowAlert({variant: 'success', message: 'Usuario creado con éxito'});
            
            setTimeout(() => Navigate('/'), 1500); // ✅ corregido
        }catch(error){
            console.log('Error cargando los alumnos', error);
            setShowAlert({variant: 'danger', message: error.message || 'Error creando los usuarios'}); // ✅ corregido
        }
    } 

    return (
        <div>
            <h2>Crear un nuevo usuario</h2>

            {ShowAlert && (
                <Alert variant={ShowAlert.variant} onClose={()=>setShowAlert(null)} dismissible>
                    {ShowAlert.message} {/* ✅ corregido */}
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        value={Alumno.nombre}
                        onChange={handlechange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Numero de documento</Form.Label>
                    <Form.Control
                        type="text"
                        name="numero_documento"
                        value={Alumno.numero_documento}
                        onChange={handlechange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Nota 1</Form.Label>
                    <Form.Control 
                        type="number"
                        step="0.01"
                        name="nota1"
                        value={Alumno.nota1}
                        onChange={handlechange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Nota 2</Form.Label>
                    <Form.Control 
                        type="number"
                        step="0.01"
                        name="nota2"
                        value={Alumno.nota2}
                        onChange={handlechange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Nota 3</Form.Label>
                    <Form.Control 
                        type="number"
                        step="0.01"
                        name="nota3"
                        value={Alumno.nota3}
                        onChange={handlechange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">Guardar alumno</Button>
                <Link to="/" className="btn btn-secondary ml-2">Cancelar</Link>
            </Form>
        </div>
    )
}

export default CrearAlumno;