
console.log("Activo Script.js");


console.log("ahora procesos");
/* process.argv */
/* console.log(process.argv.slice(2)); */
/* const comandos=process.argv.slice(2); */

/* const [comando1,comando2,comando3]=comandos; */
/* console.log(comando1);
console.log(comando2);
console.log(comando3); */

/* switch (comando1) {
    case "GET": 
        console.log("Toma un dato");        
        break;
    case "POST": 
        console.log(`Recibimos ${comando2} satisfactoriamente.`);        
        break;
    case "PUT": 
        console.log(`Modificamos el item con id:${comando2} satisfactoriamente.`);        
        break;
    case "DELETE": 
        console.log(`El item con id:${comando2} se eliminó con éxito.`);        
        break;
    default: console.log("Comando desconocido...");
        break;
} */


/* if (argumentos[0]== "GET"){
    console.log("Toma un dato");    
}

if (argumentos[0]== "POST"){
    console.log(`Recibimos ${argumentos[1]} satisfactoriamente.`);    
}

if (argumentos[0]== "PUT"){
    console.log(`Modificamos el item con id:${argumentos[1]} satisfactoriamente.`);    
}

if (argumentos[0]== "DELETE"){
    console.log(`El item con id:${argumentos[1]} se eliminó con éxito.`);    
}

const data="la data aportada"; */

/* switch (i) {
    case value:
        
        break;

    default:
        break;
} */


import express from "express";
import path from "path";
import url from "url";

//setting

const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//middlewares
app.use(express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname, "public"));

const rootDir = path.join(__dirname, "public");

//routes
app.get("/", (req, res)=>{
    res.sendFile("about.html", { root: rootDir});
});




//Listener
app.listen(5000, ()=> console.log("servidor corriendo"));
