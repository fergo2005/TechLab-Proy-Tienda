# Plantilla de servidor con capas Express

Este proyecto es una plantilla básica para configurar un servidor con **Express** y **Nodemon**, ideal para iniciar rápidamente nuevos desarrollos en Node.js.

## Características

- **Express** para gestionar rutas y middleware.
- **Nodemon** para recargar automáticamente el servidor durante el desarrollo.
- Configuración minimalista lista para usar.

---

## Instalación

### 1. Clonar el repositorio con `degit`

`degit` es una herramienta para clonar plantillas de manera limpia (sin el historial de Git).

#### Instalar `degit` (si no lo tienes instalado)

```bash
npm install -g degit
```

#### Clonar el repositorio

```bash
degit DanielRiverol/template-express-layers carpeta-destino
```

Reemplaza `usuario/repo-nombre` por el nombre del repositorio y `carpeta-destino` por el nombre de la carpeta donde deseas clonar el proyecto.

### 2. Instalar dependencias

Una vez clonado el repositorio, entra en la carpeta del proyecto:

```bash
cd carpeta-destino
```

Luego, instala las dependencias:

```bash
npm install
```

---

## Comandos disponibles

### Iniciar el servidor

Este comando inicia el servidor en modo desarrollo con Nodemon:

```bash
npm run dev
```

### Actualizar dependencias (Opcional)

Para poder todas estas dependencias a su última versión, deberás instalar un paquete llamado `npm-check-updates` de forma global:

```bash
npm install -g npm-check-updates
```

Una vez instalado deberás correr el siguiente comando:

```bash
ncu -u
```

Esto modificará tu archivo package.json para que todas las dependencias estén listadas en sus últimas versiones.

Una vez completado este proceso, basta con ejecutar el siguiente comando para actualizar todas tus dependencias:

```bash
npm install
```

## Estructura del proyecto
``` plaintext
carpeta-destino/
├── config/                 # Configuraciones generales (DB, variables de entorno, etc.)
│   └── db.js               # Configuración de la base de datos
│
├── controllers/           # Controladores: lógica que responde a las rutas
│   └── user.controller.js
│
├── services/              # Servicios: lógica de negocio reutilizable
│   └── user.service.js
│
├── routes/                # Definición de rutas y middlewares asociados
│   └── user.routes.js
│
├── models/                # Modelos de datos (si usás MongoDB, Sequelize, etc.)
│   └── user.model.js
│
├── middlewares/           # Middlewares personalizados
│   └── auth.middleware.js
│
├── index.js               # Punto de entrada del servidor
├── package.json           # Dependencias y scripts
├── README.md              # Documentación del proyecto

```
---

## Licencia

Este proyecto está licenciado bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.


Lamentablemente en la implementacion del firebase, se me rompió y no pude encontrar el error

## Desde aqui voy yo

## Para inicializar el proyecto e instalar las dependencias 
npm i jsonwebtoken

## Dependencias instaladas
   -express
   -firebase
   -dotenv (npm i dotenv)
      para trabajar con variables de entorno.
   -jsonwebtoken
   



## Deployd??

https://www.jwt.io/       // Para decodificar el token facilmente


Gabriel Gabrielli
12:15 p.m.
https://github.com/gaby28894178/25024-Bakend-NodeJS-profe-pachu.git


https://github.com/gaby28894178/template-express-layers-pachu.git

https://github.com/DanielRiverol/clase_14/tree/main




## pendientes:

## index.js
import { envs } from "./config/envs.js";  falta agregar el archivo en config
app.set("PORT", 5000); -antes
app.set("PORT", envs.port); -se cambio 5000 por envs.port ??  -port === PORT ???
-ok
## config
  - # db.js

  apiKey:process.env.APIKEY,
  authDomain:process.env.AUTHDOMAIN,
  projectId:process.env.PROJECTID,
  storageBucket:process.env.STORAGEBUCKET,
  messagingSenderId:process.env.MESSAGINGSENDERID,
  appId:process.env.APPID,

  eliminado de db
  -ok

  - # envs.js
  perfect
  -ok

## controllers
 - # product.controller.js
 import productService from "../services/product.service.js";
 perfect
 export default { getProducts, createProduct };   
 -ok

 - #  auth.controller.js
 import { generateToken } from "../utils/jwt.js";
 usuario hardcode
 autenticando se identifica
 export default {login};
 -ok

## middlewares
 - # auth.middlewaares.js
 import { verifyToken } from "../utils/jwt.js";
 devuelve objeto si true
 verificado token devuelve user
 perfect
 export const authentication = ...
 -ok

## models
 - # product.model.js
 import {db} from "../config/db.js";
 import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc
 } from 'firebase/firestore';
 
 export const getAllProducts =
 export const saveProduct =
 -ok

# routes
 - # product.route.js
    import { Router } from "express";
    import productController from '../controllers/product.controller.js';
    import { authentication } from "../middlewares/auth.middleware.js";   
    router.get
    router.post
    perfect
    export default router;
    -ok

 - # auth.route.js
    import { Router } from "express";
    import authorizationController from '../controllers/auth.controller.js';
    export default router;
    -ok

# services
 - # product.service.js
    import { getAllProducts, saveProduct } from "../models/product.model.js";
    aqui podria analizar si hay productos o no ejemplo
    export default { getAll, createProduct };
    -ok

# utils
 - # index.js
    import { dirname, join } from "path";
    import { fileURLToPath } from "url";
    perfect
    export { __dirname, join };
    -ok

 - # jwt.js
    import jwt from 'jsonwebtoken';
    import { envs } from "../config/envs.js";        
    export const generateToken = (userData)
    export const verifyToken = (token)
    -ok

modificado 2025-07-25


