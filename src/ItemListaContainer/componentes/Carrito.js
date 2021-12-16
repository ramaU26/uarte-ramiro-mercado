import React from "react";
import Item from "./Item";


const Carrito = ({Carrito,setCarrito}) => {
    return (
        <div>
            <h3>Su carrito</h3>

            {Carrito.length === 0 ? (<p>0</p>) : (Cart.map((item => <Item key={item.id} item={item} Carrito={Carrito} setCarrito={setCarrito} />)))}
        </div>
    )
}

export default Carrito
