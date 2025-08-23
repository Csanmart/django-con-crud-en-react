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
('Camila Rojas', '109823450', 4.8, 4.6, 4.9),
('Felipe Martínez', '102334567', 3.7, 4.1, 3.9),
('Laura Gómez', '100987654', 2.9, 3.4, 3.1);
