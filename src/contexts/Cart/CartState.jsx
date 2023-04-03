import { useState } from "react";
import { CartContext } from "./CartContext";

const CartState = ({children}) =>{

    //Lista con objetos de carrito
    const [cart, setCart] = useState([]);

    //Cantidad de items en el carrito
    const [cantItems, setCantidad] = useState(0);

    //Precio actual del carrito completo:
    const [precioTotal, setPrecioTotal] = useState(0);

    const addToCart = (producto,cantidad)=>{
        const itemFound = cart.find((item) => item.producto.id == producto.id);
        if(itemFound == undefined)
        {
            cart.push({producto: producto, cantidad: cantidad});
        }
        else{
            itemFound.cantidad += cantidad;	
        }
        
        setCart(cart);
        setCantidad(cantItems + cantidad);
        let precioVal = parseFloat(producto.precio.replace('.','')) * cantidad;

        setPrecioTotal(precioTotal + precioVal);
    }

    const removeFromCart = (producto) =>{
        const itemFound = cart.find((item) => item.producto.id == producto.id);
        if(itemFound == undefined)
        {
            return;
        }

        if(itemFound.cantidad > 1)
        {
            itemFound.cantidad -= 1;
        }
        else{
            cart.splice(cart.indexOf(itemFound), 1);
        }

        setCart(cart);
        setCantidad(cantItems - 1);
        let precioVal = parseFloat(producto.precio.replace('.',''));

        setPrecioTotal(precioTotal - precioVal);
    }

    const clearCart = () =>{
        setCart([]);
        setCantidad(0);
        setPrecioTotal(0);
    }
 
    return (<CartContext.Provider value={{cart, addToCart, cantItems, removeFromCart, precioTotal, clearCart}}>
        {children}
    </CartContext.Provider>)
}

export default CartState;