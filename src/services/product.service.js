//  services
//import ... from '../models/user.model.js'
import { getAllProducts, saveProduct } from "../models/product.model.js";


const getAll = async() => { //aqui podria analizar si hay productos o no ejemplo
  return await getAllProducts();
};



const createProduct = async(product) => { //aqui podria analizar si hay productos o no ejemplo
  return await saveProduct(product);
};

export default { getAll, createProduct };
