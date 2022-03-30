import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { v4 as uuidv4 } from "uuid";

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
  // Iniciar firestore
  // database : base de datos
  const db = getFirestore(app);
  
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
  
  // debemos crear una funcion que se encargue de poder crear
  // elementos en nuestra base de datos
  // ojo: vamos a recibir como parametro un objeto que contenga
  // la informacion del producto que estamos creado
  export const storeProductClothe = async (product) => {
    const id = uuidv4().replaceAll("-", "");
    product.id = id;
    await setDoc(doc(db, "product_clothes", id), product);
  };
  
  // actualizar un datos en firebase
  export const updateProductClothe = async (product) => {
    const productRef = doc(db, "product_clothes", product.id);
  
    await updateDoc(productRef, product);
  };
  
  // eliminar un registros de la db
  export const deleteProductClothe = async (id) => {
    await deleteDoc(doc(db, "product_clothes", id));
  };
  
  // vamos a crear una funcion qu reciba un email y password
  // y cree un cuenta en firebase
  export const auth = getAuth();

  //Esta funcion va a enviar el correo de verificacion
export const sendEmail = async () => {
  const send = await sendEmailVerification(auth.currentUser);
  return send;
};
  
  // podemos crear una funcion que nos retorne el usuario actual
  export const getUserFromFirebase = () => {
    return auth.currentUser;
  };
  
  export const updateUserProfile = async (profile) => {
    try {
      await updateProfile(auth.currentUser, profile);
      return {
        ok: true,
        data: "success",
      };
    } catch (error) {
      return {
        ok: false,
        data: error.message,
      };
    }
  };
  
  export const storeUser = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      return {
        ok: true,
        data: user,
      };
    } catch (error) {
      console.log(error.message);
      return {
        ok: false,
        data: error.message,
      };
    }
  };
  
  export const loginUser = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
  
      return {
        ok: true,
        data: user,
      };
    } catch (error) {
      return {
        ok: false,
        data: error.message,
      };
    }
  };