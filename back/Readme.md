# Backend de la Billetera Virtual Ficticia FinanzApp

Esta es la documentación del backend para la aplicación de la Billetera Virtual Ficticia FinanzApp. El backend está construido utilizando Node.js y Express, y utiliza SQLite para el entorno de desarrollo y PostgreSQL para el entorno de producción. La aplicación proporciona varias rutas para administrar usuarios, cuentas, transacciones y tarjetas. Además, el backend utiliza Express Validator para la validación de los datos de las peticiones y JWT para la autenticación de sesiones.

## Instalación

1. Clona el repositorio:

   ````bash
   git clone https://github.com/No-Country/c15-02-m-node-react.git
   ```

2. Instala las dependencias:

   ````bash
   cd repositorio/back
   npm install
   ```

3. Configura las variables de entorno:
   
   Crea un archivo `.env` en el directorio raíz del proyecto y configura las siguientes variables de entorno como en el env.exmple:

   
4. Ejecuta la aplicación:

   ````bash
   npm run seed => genera datos ficticios para la base
   npm start
   ```

   La aplicación se ejecutará en el puerto especificado.

## Endpoints de la API

### Rutas de Administrador

- **GET /admin/users**

  Obtiene todos los usuarios.

- **GET /admin/accounts**

  Obtiene todas las cuentas eliminadas.

- **PUT /admin/recover/:userId**

  Recupera un usuario con el `userId` especificado. Este endpoint restaura un usuario eliminado.

### Rutas de Autenticación

- **POST /auth/login**

  Valida las credenciales de inicio de sesión del usuario y genera un token JWT.

- **POST /auth/register**

  Registra un nuevo usuario con los detalles de registro proporcionados.

- **GET /auth/token**

  Valida el token JWT del usuario.

### Rutas de Usuario

- **GET /user/:userId**

  Obtiene los detalles del usuario para el `userId` especificado. Requiere autenticación.

- **PUT /user/:userId**

  Actualiza los detalles del usuario para el `userId` especificado. Requiere autenticación.

- **DELETE /user/:userId**

  Elimina el usuario con el `userId` especificado. Requiere autenticación.

- **POST /user/:userId/account/:currency**

  Crea una nueva cuenta para el usuario con el `userId` especificado y la `currency` proporcionada. El parámetro `currency` debe ser `ars` o `usd`. Requiere autenticación.

- **GET /user/:userId/account**

  Obtiene todas las cuentas asociadas al usuario con el `userId` especificado. Requiere autenticación.

- **DELETE /user/:userId/account/:accountId**

  Elimina la cuenta con el `accountId` especificado que pertenece al usuario con el `userId` especificado. Requiere autenticación.

- **PUT /user/:userId/account/:accountId**

  Actualiza los detalles de la cuenta para el `accountId` especificado que pertenece al usuario con el `userId` especificado. Requiere autenticación.

## Autorización de las Peticiones

Para acceder a las rutas protegidas que requieren autenticación, incluye el token JWT en el encabezado `Authorization` de la petición. El encabezado debe tener el siguiente formato:

```
Authorization: Bearer <token>
```

Sustituye `<token>` por el token JWT obtenido después de iniciar sesión o registrarse correctamente.

## Validación

El backend utiliza Express Validator para validar los datos de las peticiones. Las reglas de validación para cada endpoint se definen en funciones de middleware de validación separadas. Asegúrate de proporcionar datos válidos y con el formato correcto en los cuerpos de las peticiones para evitar errores de validación.

## Resumen

¡Enhorabuena! Ahora tienes toda la información necesaria para configurar y utilizar el backend de la Billetera Virtual Ficticia FinanzApp. Asegúrate de seguir las instrucciones de instalación y consulta los puntos finales de la API proporcionados para integrar el backend con el frontend u otra aplicación cliente. Si tienes alguna pregunta adicional, no dudes en pedir ayuda. ¡Feliz codificación!