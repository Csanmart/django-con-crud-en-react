CREATE DATABASE IF NOT EXISTS gestion_alumnos

USE gestion_alumnos;


CREATE TABLE IF NOT EXISTS alumnos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    numero_documento VARCHAR(20) UNIQUE NOT NULL,
    nota1 DECIMAL(5, 2) NOT NULL,
    nota2 DECIMAL(5, 2) NOT NULL,
    nota3 DECIMAL(5, 2) NOT NULL
);


INSERT INTO alumnos (nombre, numero_documento, nota1, nota2, nota3) VALUES
('Juan Pérez', '123456789', 4.5, 3.8, 4.2),
('María Gómez', '987654321', 3.9, 4.7, 4.0),
('Carlos López', '112233445', 3.0, 3.5, 3.2);
