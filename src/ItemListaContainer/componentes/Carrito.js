import React from "react";
import item from './Item.js'


const Carrito = ({Carrito,setCarrito}) => {
    return (
        <div>
            <h3>Su carrito</h3>

            {Carrito.length === 0 ? (<p>0</p>) : (Carrito.map((Item => <item key={Item.id} Item={Item} Carrito={Carrito} setCarrito={setCarrito} />)))}
        </div>
    )
}

export default Carrito
