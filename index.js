console.log("Index.js está activo");


const argumentos=process.argv.slice(2);

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








fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  /* .then(data => console.log(data)); */

