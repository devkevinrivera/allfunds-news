# allfunds-news - Prueba tecnica

========================= NOTAS =====================================
- Para esta prueba he utilizado el servidor de bbdd mongoatlas. Si desea utilizar una base de datos propia basta con
cambiar la configuración de la base de datos en el fichero config ubicado en: apps/backend/bin/config/config.js.
Para esta prueba pequeña he utilizado constantes, aunque lo ideal seria utilizar variables de entorno.
=====================================================================

1- Configuración del proyecto

1.1 -> El primer paso seria descargar el proyecto en el equipo local.
1.2 -> Para configurar el back debeemos posicionarnos en la carpeta raiz del proyecto y ejecutar el comando: npm run config-back.
1.3 -> Para configurar el front debemos posicionarnos en la carpeta raiz del proyecto y ejecutar el comando: npm run config-front

2- Puesta en marcha del proyecto. Una vez instalados los node_modules para cada proyecto debemos ejecutar los comandos para arrancar el proyecto.

2.1 -> Primero ejecutamos el front con el comando: npm run start-front.
2.2 -> Segundo ejecutamos el back con el comando: npm run start-back.

3. Con estos sencillos pasos, solo tendriamos que abrir el navegador en la url: localhost:3000 y alli veremos el proyecto, desplegado y listo para ser usado.

Tecnologias utilizadas:

- React v18
- Express
- Mongodb
- Redux Toolkit
- Semantic (Libreria de componentes)

4. Ficheros de configuracion del frontend. => apps/frontend/src/app/constants.js
5. Ficheros de configuracion del frontend. => apps/backend/bin/config/config.js
