#  Biblioteca App

Aplicación web completa para la gestión de una biblioteca desarrollada con Next.js, MySQL y MongoDB.

---

##  Tecnologías utilizadas

- Next.js 16
- React
- Bootstrap 5
- MySQL (AWS RDS)
- MongoDB Atlas
- Sequelize ORM
- Mongoose ODM
- Vercel

---

##  Funcionalidades principales

### Gestión de libros
- Crear libros
- Editar libros
- Eliminar libros
- Buscar y filtrar libros
- Gestión de disponibilidad

###  Gestión de usuarios
- Crear usuarios
- Editar usuarios
- Eliminar usuarios
- Ver perfil de usuario
- Ver préstamos asociados

###  Gestión de préstamos
- Crear préstamos
- Eliminar préstamos
- Actualización automática de disponibilidad

###  Logs MongoDB
- Registro automático de acciones
- Historial de préstamos
- Persistencia NoSQL

---

##  Base de datos

## 📊 Diagrama Relacional MySQL

![Diagrama ER](./public/capturas/diagrama-er.png)

### MySQL
Base de datos relacional con:
- libros
- usuarios
- prestamos
- categorias

### MongoDB
Colección:
- logprestamos

---

##  Arquitectura

- Frontend y Backend con Next.js App Router
- API REST usando Route Handlers
- Sequelize para MySQL
- Mongoose para MongoDB
- Bootstrap para interfaz visual

---


##  Capturas

### Dashboard

![Dashboard](./public/capturas/dashboard.png)

---

### Libros

![Libros](./public/capturas/libros.png)

---

### Usuarios

![Usuarios](./public/capturas/usuarios.png)

---

### Préstamos

![Prestamos](./public/capturas/prestamos.png)

---

### Logs

![Logs](./public/capturas/logs.png)

##  Capturas Base de Datos

### Tabla libros

![Libros](./public/capturas/tabla-libros.png)

---

### Tabla usuarios

![Usuarios](./public/capturas/tabla-usuarios.png)

---

### Tabla prestamos

![Prestamos](./public/capturas/tabla-prestamos.png)

---

### Tabla categorias

![Categorias](./public/capturas/tabla-categorias.png)

---

### Colección MongoDB

![Mongo](./public/capturas/mongo-logs.png)

## URL Vercel

https://biblioteca-app-nu.vercel.app