import { createContext, useContext, useState } from "react";

const CartContext = createContext()

const Context = ({children}) => {
   const [cart, setCart] = useState([])
   const [total, setTotal] = useState(0)
   
   const addToCart = (p) => {
        setCart([...cart, p])
        setTotal(prev => prev + Number(p.precio))
   }
   
   return(
       <CartContext.Provider value={{
           cart, setCart, total, setTotal, addToCart
       }}>
           {children} 
       </CartContext.Provider>
   )
}

export const useCartContext = () => useContext(CartContext)

export default Context