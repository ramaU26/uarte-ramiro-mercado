import { Button } from "bootstrap";
import React from "react";
import { Brush } from "react-bootstrap-icons";

const Item = ({item, carrito, setCarrito, items}) =>{


    const{nombre,precio,id} = item

 const agregarItem = id =>{
     const item = items.filter((item) => item.id === id)
     setCarrito([...carrito, ...items])
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

export default Item