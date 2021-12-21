import React from "react";


const item = ({item, Carrito, setCarrito, items}) =>{

// constante que guarda las propiedasdes
   const{nombre,precio,id} = item



// funcion para agregar al carrito
 const agregarItem = id =>{
     const item = items.filter((item) => item.id === id)
     setCarrito([...Carrito, ...item])
 }


    return(
        <div>
            <ul>
                <il>{nombre}</il>
                <il>{precio}</il>
                <Button onClick ={() => agregarItem(id)}>Agregar al Carrito</Button>
            </ul>


        </div>
    );

};

export default item