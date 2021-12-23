import React from "react";



const item = ({item, cart, setCart, items}) =>{

// constante que guarda las propiedasdes
   const{nombre,precio,id} = item



// funcion para agregar al carrito
 const addItem = id =>{
     const item = items.filter((item) => item.id === id)
     setCart([...cart, ...item])
 }


 const delItem = (id) => {
     const items = cart.filter(item => item.id !== id)
     setCart(items)
 }

 
    return(
        <li>
                <span>{nombre}</span>
                <span>{precio}</span>


            {items ? (
                 <button type='button' onClick ={() => addItem(id)}>Agregar al Carrito</button>
                
            ) : (
                <div>
                <button type='button' onClick ={() => addItem(id)}>Agregar</button>

                <button type='button' onClick ={() => addItem(id)}>Eliminar</button>

                </div>

            ) }
        </li>
    );

};

export default item