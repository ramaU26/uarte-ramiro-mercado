
import React from "react";

import Item from "./Item";



const Carrito = ({carrito,setCarrito}) => {
    return (
        <div>
            <h3>Su carrito</h3>

            {carrito.length === 0 ? (<p>0</p>) : <ul> {carrito.map((item => <Item key={item.id} item={item} carrito={carrito} setCarrito={setCarrito} />))}</ul>}
        </div>
    )
}

export default Carrito
