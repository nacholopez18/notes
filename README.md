# Notas

Proyecto desarrollado con Vite (versión: ^5.0.7) y React.js. Utiliza una base de datos PostgreSQL alojada en la plataforma Neon, permitiendo el almacenamiento online y la modificación colaborativa de las notas.
La aplicación permite a los usuarios ingresar y agregar notas junto con sus títulos correspondientes. Cada nota se guarda en la base de datos, lo que facilita su visualización al ingresar nuevamente. Además, ofrece funcionalidades como agregar, borrar, ordenar las notas según la fecha, ya sea por más recientes o más antiguas, y podes archivar y desarchivar las notas.

## Runtimes, Engines

- _Node.js:_ Version 20.5.0
- _npm:_ Version 9.8.0

### Dependencias Utilizadas

```json
//"axios": "^1.6.2",
//"react": "^18.2.0",
//"react-dom": "^18.2.0",
//"react-router-dom": "^6.20.1",
//"router": "^1.3.8"

Instrucciones de Ejecución

1.Clona el repositorio desde la terminal de VSCode usando los siguientes comandos:1."git init"
				 						  2."git clone https://github.com/ensolvers-github-challenges/LopezdaCunhaDoldan-69ea63.git"
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Instala todas las dependencias listadas en package.json ejecutando "npm install" dentro de las carpetas Backend y Frontend.
4. Desde la terminal, dentro de la carpeta Backend, ejecuta "npm start" para iniciar el backend.
5. Desde la terminal, dentro de la carpeta Frontend, ejecuta "npm run" dev para iniciar el frontend en localhost.

Estructura del Proyecto

BACKEND

  --CONFIG
  --CONTROLLERS
  -- ROUTES

  --.gitignore
  --index.js
  --package-lock.json
  --package.json

FRONTEND

  --API
  --public
  -- src
     -- assets
     -- components
     -- pages
     -- App.js
     -- index.js
  --.gitignore
  -- README.md
  -- index.html
  -- package-lock.json
  -- package.json
  -- vite.config.js

Archivos incluidos:

1.README.md
```
