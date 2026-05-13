# 🛒 Sistema de Gestión de Ventas

##  Descripción del Proyecto

Este proyecto consiste en un sistema de gestión de ventas desarrollado utilizando una arquitectura Full Stack moderna. La aplicación permite administrar productos mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar), ofreciendo una interfaz visual dinámica y organizada para interactuar con los datos.

El sistema fue desarrollado utilizando Node.js, Express, MySQL, Sequelize y EJS. Además, cuenta con conexión a una base de datos MySQL alojada en Aiven y despliegue en la nube mediante Render.

El objetivo principal del proyecto es poner en práctica el desarrollo completo de aplicaciones web, integrando frontend, backend, base de datos, API REST y despliegue online.

---

#  Características Principales

- CRUD completo de productos
- Frontend dinámico con EJS
- Diseño responsive con Bootstrap y CSS personalizado
- API REST con Express
- Base de datos MySQL
- Uso de Sequelize ORM
- Arquitectura organizada
- Integración con GitHub
- Despliegue en Render
- Base de datos online con Aiven

---

#  Tecnologías Utilizadas

## Frontend
- HTML
- CSS
- Bootstrap
- EJS
- JavaScript

## Backend
- Node.js
- Express.js
- Sequelize
- MySQL

## Herramientas
- Git
- GitHub
- Render
- Aiven
- Postman

---

# Estructura del Proyecto

```bash
SistemaVentas/
│
├── config/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── views/
├── public/
│
├── app.js
├── package.json
├── .env.example
└── README.md
```

---

# ⬇️ Clonar el Repositorio

El proyecto se puede descargar o clonar desde GitHub utilizando el siguiente comando:

```bash
git clone https://github.com/gaby-sys/Sistema-de-Gestion-Ventas.git
```

Luego entrar a la carpeta del proyecto:

```bash
cd Sistema-de-Gestion-Ventas
```

---

# Instalación de Dependencias

Instalar todas las dependencias necesarias ejecutando:

```bash
npm install
```

---

# Configuración de Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto y agregar las siguientes variables:

```env
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=

PORT=3000
```

Completar estos datos utilizando la configuración de MySQL en Aiven o una base de datos local.

---

# Ejecutar el Proyecto

Para iniciar el servidor ejecutar:

```bash
node app.js
```

Si todo funciona correctamente aparecerá el siguiente mensaje en consola:

```bash
Base de datos conectada
Servidor funcionando
```

---

# Abrir el Proyecto

Entrar desde el navegador a:

```bash
http://localhost:3000
```

---

#  Funcionalidades del Sistema

- Ver productos registrados
- Agregar productos
- Editar productos
- Eliminar productos
- Conexión a base de datos MySQL
- Interfaz visual moderna y responsive

---

# Despliegue del Proyecto

## Frontend y Backend
Desplegados en Render.

## Base de Datos
MySQL alojado en Aiven.

---

# 👩‍💻 Autor

Gabriela Bautista Soriano

---

# 📄 Licencia

Proyecto educativo desarrollado con fines académicos.

## Instalación

Clonar repositorio:

```bash
git clone https://github.com/gaby-sys/Sistema-de-Gestion-Ventas.git