// Copia de otros solo para ver con tipo Commonjs antigui
/* const fs=require("fs");
const os = require("os");
const math = require("./modulos/math");
const {suma, resta, multi, divi} = require("./modulos/math"); */

//desde el archivo donde estan los modulos se exporta asi
/* module.exports = {suma: suma, resta: resta, multi: multi, divi: divi };  */


console.log(math);
console.log(suma(2,4));
console.log(resta(2,4));
console.log(multi(2,4));
console.log(divi(2,4));



//modulos modernos 
import fs from 'fs'
import {suma, resta, multi, divi} from "./modulos/math.js"; //siempre con la extension
//Tambien cambiar la forma en que se exporta...
//en la carpeta modulos archivo math.js se le agrega export a cada funcion a exportar
//ejemplo:
//export const suma = (a, b)=> a + b; // etc etc
// o sin el export en cada funcion agrego un export por default como:
//export default {suma, resta, multi, divi};
// o
// terniendo un--- const math = {suma, resta, multi, divi};
// export default math;




/* console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.networkInterfaces()); */


/* fs.writeFile("./archivo.txt","hola en archivo txt creado", (err)=>{
    if (err) {
        console.log(err);        
    }
    console.log("Archivo creado");
    
}); */



console.log
console.log(" --------- ---------- ----------- ----------- ----------");





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
import { arch, platform } from "os";
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
