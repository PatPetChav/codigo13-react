
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore/lite"


const firebaseConfig = {
    apiKey: "AIzaSyDC8EPcW8u5Qkx1gkN3urqBcsjr6ydsk8E",
    authDomain: "codigo13-f7549.firebaseapp.com",
    projectId: "codigo13-f7549",
    storageBucket: "codigo13-f7549.appspot.com",
    messagingSenderId: "70617660397",
    appId: "1:70617660397:web:8115c29a5a656fb6f285e4",
    measurementId: "G-L93FYHGDWJ"
  };

  const app = initializeApp(firebaseConfig);

  // inicar firestore
  const db = getFirestore(app);

export default app;
// Hacer la peticion para poder traer los productos
export const getProductClothes = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionClothes = collection(db, "product_clothes");
  // paso 2: Traer los documentos
  const documentClothes = await getDocs(collectionClothes);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const clothes = documentClothes.docs.map((doc) => doc.data());
  return clothes;
};