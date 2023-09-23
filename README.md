Servidor para probar la aplicación de agenda de turno de un consultorio.
Creado en Node.js, Express.js.

Posee capas controlador, servicio, persistencia.

En entorno de desarrollo utiliza File System como forma de persistencia de datos, almacenados en archivos .json.

Utiliza un middleware sobre las rutas para modificar CORS policy y poder ejecutar el servidor y el cliente en el mismo origen.