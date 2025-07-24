// model product
import {db} from "../config/db.js";
//importamos todos los metodos que nos ofrece  
import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc
} from 'firebase/firestore';
     
const productCollection = collection(db,"productos");

/* class Producto{
    id=0;
    constructor(id, nombre, precio, disponible){
        this.id = id + 1;
    }
}; */
 
export const getAllProducts = async () => {
    try {
        const productList = await getDoc(productCollection);
        const products = [];
        productList.forEach(doc=>products.push({id:doc.id, ...doc.data()}));

        return products

    } catch (error) {
        throw new Error("Error", error.message)
    }
};

export const saveProduct = async(product)=>{
    try {
        const newProduct = await addDoc(productCollection, product);
        return newProduct;

    } catch (error) {
        throw new Error("Error", error.message)
    }
};

