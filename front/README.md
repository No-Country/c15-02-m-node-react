# Frontend de la Billetera Virtual Ficticia FinanzApp

Este es el documento de referencia para el frontend de la aplicación Billetera Virtual Ficticia FinanzApp. El frontend está desarrollado utilizando React (vite), y se encarga de proporcionar una interfaz de usuario para interactuar con el backend de la aplicación.

## Instalación

Sigue los pasos a continuación para configurar y ejecutar el frontend:

1. Clona el repositorio del frontend:

   ````bash
   git clone https://github.com/No-Country/c15-02-m-node-react.git
   ```

2. Ingresa al directorio del repositorio:

   ````bash
   cd repositorio/front
   ```

3. Instala las dependencias:

   ````bash
   npm install
   ```

4. Ejecuta la aplicación:

   ````bash
   npm run dev
   ```

## Estructura del Proyecto

El proyecto del frontend tiene la siguiente estructura de directorios y archivos principales:

- **src**: Contiene el código fuente de la aplicación.
  - **Components**: Directorio que almacena los componentes reutilizables de React.
  - **Views**: Directorio que contiene las páginas principales de la aplicación.
  - **Context/Redux**: Estados globales de la aplicación.
  - **utils**: Directorio con utilidades y funciones auxiliares.
  - **hooks**: Directorio con hooks personalizados.
  - **App.jsx**: Archivo principal de la aplicación React.
  - **main.jsx**: Punto de entrada de la aplicación.
  - **index.css**: Archivo para los estilos globales de CSS.

## Personalización y Desarrollo

Puedes personalizar y desarrollar la aplicación frontend de acuerdo a tus necesidades. Los componentes se encuentran en el directorio `src/Components`, y las páginas principales se encuentran en el directorio `src/Views`. Puedes modificar y agregar nuevos componentes y páginas según sea necesario.

La comunicación con el backend se realiza a través del API_URL ubicado en el Context `src/Context/context.jsx`.


## Resumen

Ahora tienes el frontend de la Billetera Virtual Ficticia FinanzApp configurado y listo para su uso. Sigue los pasos de instalación y personaliza la aplicación según tus necesidades. Si tienes alguna pregunta adicional, no dudes en solicitar asistencia. ¡Disfruta desarrollando la aplicación!