import './App.css';
import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc  } from 'firebase/firestore';
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { db, storage } from './Components/Firebase/FirebaseConfig';
import { useEffect, useState } from 'react';
import { useCartContext } from './Context';

function App() {

  const {cart, total, addToCart } = useCartContext()

  const [product, setProduct] = useState()
  const [image, setImage] = useState()
  const [newProduct, setNewProduct] = useState({
    producto: '',
    precio: null
  })
  const [user, setUser] = useState({
    nombre: '',
    telefono: null,
    email: ''
  })
 
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(collection(db, 'Zapatillas'))
      const products = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      setProduct(products)
    }
    getProducts()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const storageRef = ref(storage, `${image.name}`)
    uploadBytes(storageRef, image)    
    await addDoc(collection(db, 'Zapatillas'), newProduct)
  }

  const handleOrder = async (e) => {
    const date = new Date()
    console.log(date)
    e.preventDefault()
    await addDoc(collection(db, 'Orders'), {user, cart, date, total})
  }

  return (
    <div >
      {product?.map(p => 
          <div>
            <p>{p.id}</p>
            <h1>{p.producto}</h1>
            <h2>${p.precio}</h2>
            <button onClick={() => addToCart(p)}>Add to cart</button>
          </div>
        )}
    <form onSubmit={handleSubmit}>
      <input type='text' 
        value={newProduct.producto} 
        onChange={(event) => setNewProduct({...newProduct, producto: event.target.value })}
        />
        <input type='number' 
          value={newProduct.precio} 
          onChange={(event) => setNewProduct({...newProduct, precio: event.target.value })}
        />
         <input type="file" value={image} onChange={(event) => setImage(event.target.files[0])}/>
        <button>Agregar producto</button>
    </form>

    <form onSubmit={handleOrder}>
      <label>Nombre</label>
      <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
      <label >Telefono</label>
      <input type="number" value={user.telefono} onChange={(e) => setUser({...user, telefono: e.target.value })}/>
      <label >Email</label>
      <input type="text" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
      <button>Mandar compra</button>
    </form>
    </div>

  );
}

export default App;

// export const getImages = async (image, product) => {
//       let imageURL
//       const storageRef = ref(storage, `${product}/${image.name}`);
//       await getDownloadURL(storageRef).then(url => {
//           imageURL = url
//           })
//       return imageURL;
// }