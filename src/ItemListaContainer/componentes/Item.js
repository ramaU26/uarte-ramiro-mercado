import React from "react";



const item = ({item, cart, setCart, items}) =>{

// constante que guarda las propiedasdes
   const{nombre,precio,id} = item



// funcion para agregar al carrito
 const agregarItem = id =>{
     const item = items.filter((item) => item.id === id)
     setCart([...cart, ...item])
 }

 console.log(item)
    return(
        <li>
                <span>{nombre}</span>
                <span>{precio}</span>
                <button type='button' onClick ={() => agregarItem(id)}>Agregar al Carrito</button>


        </li>
    );

};

export default item