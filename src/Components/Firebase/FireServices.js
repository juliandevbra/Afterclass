import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc  } from 'firebase/firestore';
import db from '../FirebaseConfig';
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { storage } from '../FirebaseConfig';
import Swal from 'sweetalert2';

export const obtainData = async (props) => {
    try {
        const data = await getDocs(collection(db, props))
        return data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'No se pudo obtener los productos',
            icon: 'error',
            confirmButtonText: 'Ok',
            timer: 2000
        })
    }
}

export const getProducts = async (product) => {
    try {
        const data = await getDocs(collection(db, product));
        return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'No se pudo obtener los productos',
            icon: 'error',
            confirmButtonText: 'Ok',
            timer: 2000
        })
    }
}

export const createProduct = async (newItem, product) => {
    try {
        Swal.fire({
            title: 'Producto agregado',
            text: 'El producto se ha agregado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000
            })
        await addDoc(collection(db, product), newItem);
        window.location.reload();
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'Revisa si los campos se rellenaron correctamente',
            })
        console.log(error);
    }
}

export const updateProduct = async (id, newItem, product) => {
    try {
        Swal.fire({
            title: 'Producto actualizado',
            text: 'El producto se ha actualizado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000
            })
        await updateDoc(doc(db, product, id), newItem);
        window.location.reload();
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'La edición no se ha podido realizar',
            })
    }
}

export const deleteProduct = async (id, product) => {
    try {
        Swal.fire({
            title: 'Producto eliminado',
            text: 'El producto se ha eliminado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000
        })
        await deleteDoc(doc(db, product, id));
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'El producto no se ha podido eliminar',
            })
    }
}

export const uploadImage = async (image, product) => {
    try { 
        const storageRef = ref(storage, `${product}/${image.name}`); //Directorio de storage (product seria la carpeta e image.name, el nombre de la imagen)
        uploadBytes(storageRef, image);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'La imagen no se ha podido subir',
            })
    }
}

export const getImages = async (image, product) => {
    try {
        let imageURL
        const storageRef = ref(storage, `${product}/${image.name}`); //Directorio de storage (product seria la carpeta e image.name, el nombre de la imagen)
        await getDownloadURL(storageRef).then(url => {
            imageURL = url
            })
        return imageURL;
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'No se ha podido acceder a la imagen',
            })
    }
}