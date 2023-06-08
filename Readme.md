Proyecto de Cypress, Cucumber y TypeScript
Este es un proyecto base para realizar pruebas automatizadas utilizando Cypress, Cucumber y TypeScript.

Requisitos previos
Asegúrate de tener instalado Node.js en tu máquina.

Configuración del proyecto
Clona este repositorio en tu máquina local.

Navega hasta la carpeta del proyecto:

shell
Copy code
cd [PROJECT_NAME]
Instala las dependencias del proyecto:

shell
Copy code
npm install

Ejecución de las pruebas
Para ejecutar las pruebas, puedes usar uno de los siguientes comandos:

npx cypress run: Ejecuta las pruebas en modo headless (sin interfaz gráfica).
npx cypress open: Abre la interfaz gráfica de Cypress para ejecutar las pruebas y ver los resultados en tiempo real.
También, he dejado un archivo .sh que si haces doble click sobre él y lo configuras para que lo habrá con el terminal, ejecutara los tests de manera automática.
Al ejecutar npx cypress run, se generará un vídeo por cada ejecución/feature en cypress/videos/[carpeta]

Estructura del proyecto
El proyecto tiene la siguiente estructura de carpetas:

├── carpeta_principal/
│   ├── cypress/
│   │   ├── constants/
│   │   │   └── constants.ts
│   │   ├── e2e/
│   │   │   ├── feature1/
│   │   │   │   ├── feature1.feature
│   │   │   │   └── feature1.ts
│   │   │   ├── feature2/
│   │   │   │   ├── feature2.feature
│   │   │   │   └── feature2.ts
│   │   │   └── ...
│   │   ├── support/
│   │   │   └── page_objects/
│   │   │       ├── page1/
│   │   │       │   └── page1_page.ts
│   │   │       ├── page2/
│   │   │       │   └── page2_page.ts
│   │   │       └── ...
│   │   ├── videos/
│   │   │   ├── folder1/
│   │   │   │   └── video1.mp4
│   │   │   ├── folder2/
│   │   │   │   └── video2.mp4
│   │   │   └── ...
│   │   └── node_modules/
│   ├── cypress.config.ts
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json

En la carpeta e2e puedes colocar archivos de datos de prueba.
En la carpeta support/page_objects se encuentran los archivos .ts con los elementos mapeados de las páginas.
El archivo cypress.config.ts contiene la configuración de Cypress.
El archivo tsconfig.json es la configuración de TypeScript para el proyecto.
