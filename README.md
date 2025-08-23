# 📚 Aplicación de Gestión de Alumnos

Este proyecto implementa un **sistema de gestión de alumnos** utilizando un **backend con Django (API REST)** y un **frontend con React**.  

---

## ⚙️ Backend (Django)

- **Django**: Framework web de alto nivel basado en Python que fomenta el desarrollo rápido y un diseño limpio y pragmático.  
- **Django REST Framework (DRF)**: Toolkit flexible para construir Web APIs. Utilizado en:
  - **Serializers**: Convierte modelos de Django a JSON y viceversa. (`alumnos/serializers.py`)
  - **Views (ViewSets)**: Define la lógica CRUD de los recursos. (`alumnos/views.py`)
  - **Routers**: Generan automáticamente las rutas de la API. (`gestion_alumnos_api/urls.py`)
  - **Renderers**: Determinan el formato de salida de la API (ej: JSONRenderer). (`gestion_alumnos_api/settings.py`)
  - **Parsers**: Procesan los datos de las peticiones entrantes (ej: JSONParser). (`gestion_alumnos_api/settings.py`)
- **Models**: Definen la estructura de la base de datos. (`alumnos/models.py`)
- **Migrations**: Sistema de propagación de cambios en los modelos. (`alumnos/migrations/`)
- **manage.py**: Script de utilidad para tareas administrativas de Django.
- **settings.py**: Archivo principal de configuración del proyecto. (`gestion_alumnos_api/settings.py`)
- **urls.py**: Define las rutas de la API. (`gestion_alumnos_api/urls.py`)
- **MySQL**: Sistema de base de datos relacional para almacenar la información.
- **mysqlclient**: Conector de Python para MySQL.
- **django-cors-headers**: Librería para manejar cabeceras **CORS**, permitiendo la conexión del frontend en otro dominio/puerto.
- **Middleware**: Componentes que procesan peticiones/respuestas. Se usa el de CORS.

---

## 🎨 Frontend (React)

- **React**: Biblioteca de JavaScript para construir interfaces de usuario dinámicas.  
- **JSX (JavaScript XML)**: Sintaxis similar a HTML integrada en JavaScript.  
- **Componentes**: Bloques de construcción reutilizables de UI (ej: `ListaAlumnos`, `CrearAlumno`, `EditarAlumno`).  
- **Estado (`useState`)**: Hook que permite manejar el estado en componentes funcionales.  
- **Efectos (`useEffect`)**: Hook para manejar efectos secundarios (ej: llamadas a la API).  
- **axios**: Cliente HTTP basado en promesas para comunicar el frontend con la API.  
- **react-router-dom**: Librería para el enrutamiento dentro de React:
  - **BrowserRouter**: Habilita la navegación.
  - **Routes / Route**: Definen rutas y componentes a renderizar.
  - **Link**: Enlaces navegables sin recargar la página.
  - **useNavigate**: Hook para navegar programáticamente.
  - **useParams**: Hook para obtener parámetros de la URL (ej: `id` de un alumno).  
- **react-bootstrap**: Componentes estilizados con Bootstrap para formularios, tablas, botones, etc.  
- **react-icons**: Librería de íconos populares (ej: `FaEdit`, `FaTrash`).  
- **npm / yarn**: Gestores de dependencias para instalar librerías del proyecto.  

---

## 🚀 Tecnologías principales

- **Backend**: Django + DRF + MySQL  
- **Frontend**: React + React Router + Bootstrap  
- **Comunicación**: Axios (API REST)  
- **Gestión de dependencias**: pip (Python), npm/yarn (JavaScript)  

---

## 📂 Estructura del proyecto (simplificada)

