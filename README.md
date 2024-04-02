# Gestor de Pacientes

## Descripción
Este proyecto consiste en la creación de una solución de software para gestionar los datos de una entidad de pacientes. Se ha desarrollado tanto el Frontend como el Backend utilizando **[React](https://es.react.dev)** con **APIrest**, **[Node](https://nodejs.org/)** y **[Express](https://expressjs.com/)**.

## Entidad Paciente
La información de cada paciente que se maneja incluye:

- **DNI**
- **Nombre**
- **Apellidos**
- **Dirección**
- **Localidad**
- **Código Postal**
- **Teléfono**

## Funcionalidades CRUD (APIrest)
La aplicación permite realizar operaciones CRUD sobre los datos de los pacientes mediante las siguientes peticiones:

- `get()`: Consultar los datos de los pacientes.
- `post()`: Añadir nuevos pacientes.
- `put()`: Modificar los datos de pacientes existentes.
- `delete()`: Eliminar pacientes.

## Componentes React
Para interactuar con la aplicación, se han desarrollado los siguientes componentes en React:

- **Tabla de Pacientes**: Renderiza los pacientes devueltos por la API.
- **Formulario para Añadir Nuevos Pacientes**: Permite ingresar nuevos pacientes a la API.
- **Formulario para Modificar Pacientes Existentes**: Facilita la modificación de los datos de pacientes existentes en la API.
- **Botón para Eliminar Pacientes**: Permite eliminar pacientes existentes en la API directamente desde el componente de la tabla.
