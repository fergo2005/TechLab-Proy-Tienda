// model
import db from '../config/db.js';

import {collection,doc,getDoc,getDocs,addDoc,updateDoc,deleteDoc} from 'firebase/firestore';

const productCollection = collection(db,"productos");


export const getAllProducts = async () => {
    try {
        const productList = await getDoc(productCollection)
        const products = []
        productList.forEach(doc=>products.push({id:doc.id, ...doc.data()}));

        return products

    } catch (error) {
        throw new Error("Error", error.message)
    }
}

