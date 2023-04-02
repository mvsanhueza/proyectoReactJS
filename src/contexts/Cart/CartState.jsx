import { useState } from "react";
import { CartContext } from "./CartContext";

const CartState = ({children}) =>{


    const [cart, setCart] = useState([]);

    const [cantItems, setCantidad] = useState(0);

    const addToCart = (producto,cantidad)=>{
        const itemFound = cart.find((item) => item.producto.id == producto.id);
        console.log("añadiendo al carro " + cantidad);
        if(itemFound == undefined)
        {
            cart.push({producto: producto, cantidad: cantidad});
        }
        else{
            itemFound.cantidad += cantidad;	
        }
        
        setCart(cart);
        setCantidad(cantidad += cantidad);
        console.log(cart);
    }

    return (<CartContext.Provider value={{cart, addToCart, cantItems}}>
        {children}
    </CartContext.Provider>)
}

export default CartState;