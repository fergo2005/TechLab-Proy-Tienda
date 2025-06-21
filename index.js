
console.log("Index.js está activo");

const API = "https://fakestoreapi.com/products";

//const config = {};
/* const configPost = {
    method: "POST",  //por defecto es GET pero ahora le pongo POST
    headers: {      //paso las cabeceras 
        "Content-Type": "application/json" //que tipo de contenido tipo jsnon en este caso
    },
    body: JSON.stringify({   //objeto, cpnvertido a json segun lo que tiene el objeto clave valor
        title: "titulo Nuevo por Post",  //metodo como touppercase
        price: 1000,
        category: "nueva categoria"
    })
} */

const fetchData = async (peticion, tipo, arg3, arg4, arg5) => {


    /* console.log("peticion: ", peticion);
    console.log('tipo: ', tipo);
    console.log(`pos: ${pos}`);    
    console.log('url: ', url);        
    console.log('item: ',item); */

    try {
        let url = API;
        let config = {};
        /* const response = await fetch(url);
        const data = await response.json(); */
        console.log("entró al try");

        switch (peticion) {
            case "GET":
                //url = API;
                const response = await fetch(url);
                const data = await response.json();

                const item = arg3 - 1;
                console.log("Entra por GET");
                if (tipo == "products") {
                    //console.log("Entra por GET products");

                    if (data[item]) { //esta definido 
                        //console.log("pos esta definida..");
                        console.log(data[item]);

                        console.log(`Se muestra el producto ID: ${arg3}, solicitado.`);
                    } else {
                        if ((item < 0) || (item >= data.length)) {
                            //console.log("pos fuera de rango");
                            console.log(`El producto solicitado de ID: ${arg3}, no existe.`);
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

                break;


            case "POST":
                config = {
                    method: "POST",  //por defecto es GET pero ahora le pongo POST
                    headers: {      //paso las cabeceras 
                        "Content-Type": "application/json" //que tipo de contenido tipo jsnon en este caso
                    },
                    body: JSON.stringify({   //objeto, cpnvertido a json segun lo que tiene el objeto clave valor
                        title: arg3,  //de argv
                        price: arg4,
                        category: arg5,
                    })
                };

                fetch(url, config) //le agrego el config
                    .then((response) => response.json())
                    .then(data => {
                        console.log(data)
                    });

                console.log("Entra por POST");                
                console.log('Agregamos el producto indicado:');
                //console.log(`a`);
                //title:', titlePost, 'price:', pricePost, 'category:', categoryPost);
                //console.log(`Recibimos ${tipo} satisfactoriamente.`);
                break;

            case "PUT":
                const itemPut = arg3 - 1;
                const pricePut = arg4;
                console.log("Entra por PUT");
                console.log(`Modificamos el item con id:${arg3}, nuevo precio: ${pricePut}, satisfactoriamente.`);
                break;
            case "DELETE":
                const itemDelete = arg3 - 1;
                console.log("Entra por DELETE");

                console.log(`El item con id:${arg3} se eliminó con éxito.`);
                break;
            default: console.log("Agregue una peticion: GET o POST");
                break;
        }
        //se modifica hasta aqui 2025-06-21

        /* if (peticion == "GET") {
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
            //console.log("Agregue una peticion: GET o POST");
        }; */
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

