
console.log("Index.js está activo");

const API = 'https://fakestoreapi.com/products';

const fetchData = async (peticion, tipo, pos) => {
    const url = API;
    const item = pos - 1;

    /* console.log("peticion: ", peticion);
    console.log('tipo: ', tipo);
    console.log(`pos: ${pos}`);    
    console.log('url: ', url);        
    console.log('item: ',item); */

    try {
        const response = await fetch(url);
        const data = await response.json();
        //console.log("entró al try");

        if (peticion == "GET") {
            //console.log("Entra por GET");
            if (tipo == "products") {
                //console.log("Entra por GET products");

                if (data[item]) { //esta definido 
                    //console.log("pos esta definida..");
                    console.log(data[item]);

                    console.log(`Se muestra el producto ID: ${pos}, solicitado.`);
                } else {
                    if ((item < 0) || (item >= data.length)) {
                        //console.log("pos fuera de rango");
                        console.log(`El producto solicitado de ID: ${pos}, no existe.`);
                        //console.log(data.length);                    
                    } else {
                        console.log(data);
                        console.log("muestra todos los productos.");
                        console.log("Para ver uno en particular agregue su ID");
                    }
                };
            } else {
                console.log("Agregue el tipo de peticion: products o nose...");
            };
        } else {
            console.log("Agregue una peticion: GET o POST");
        };        
    } catch (error) {
        console.error(error);
    } finally {
        console.log("LLegó al final!!");
    };

}

//fetchData("GET", "products" );



//peticion, tipo, arg1, arg2, arg3

const argumentos = process.argv.slice(2);
/* const por = arg[2] - 1; */
/* const tipo = arg[3]; */
/* traerDatosA(pos, tipo); */

const [peticion, tipo, ...args] = argumentos;

fetchData(peticion, tipo, ...args);











//copiado de la api
/* fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error("Error al obtener la data: ", error);
    })
    .finally(() => {
        console.log("fech fin");
    }); */


// este es uno general
/* fetch("https://fakestoreapi.com/")
    .then((res) => {
        if (!res.ok) {
            throw new Error("Error en la respuesta de la API");
        }
        return res.json();
    })
    //.then((response)=>response.json())
    .then((data) => {
        console.log(data);

    })
    .catch((error)=>{
        console.error("Error al obtener la data: ", error);        
    })
    .finally(()=>{
        console.log("métodos fin");
    }); */



/* 
import express from "express";
import { arch, platform } from "os";
import path from "path";
import url from "url"; */

/* import { axios } from "axios"; */


/* const argumentos=process.argv.slice(2);

const [comando, ...args] =argumentos;


switch (comando) {
    case "GET": 
        console.log("Todos los productos", args[0]);        
        break;
    case "POST": 
        console.log('Agregamos el siguiente producto: title:', args[1], 'price:', args[2], 'category:', args[3],);        
        break;
    case "PUT": 
        console.log('Modificamos el item con id:', args[0], 'satisfactoriamente.');        
        break;
    case "DELETE": 
        console.log('El item con id:', args[0], ' se eliminó con éxito.');        
        break;
    default: console.log("Comando desconocido...");
        break;
}


 */

