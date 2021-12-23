
import React from "react";

import Item from "./Item";



const Cart = ({cart,setCart}) => {
    return (
        <div>
            <h3>Su carrito</h3>

            {cart.length === 0 ? (<p>0</p>) : <ul> {cart.map((item => <Item key={item.id} item={item} cart={cart} setCart={setCart} />))}</ul>}
        </div>
    )
}

export default Cart
