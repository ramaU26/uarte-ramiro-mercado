import React, {Fragment, useState} from 'react';
/*import item from './ItemListaContainer/componentes/Item';
import Carrito from './ItemListaContainer/componentes/Carrito';*/

function App(){ 

const [items, setItem] = useState ([
    {id : 1, nombre: 'Triston' , precio: 250},
    {id : 2, nombre: 'feliz' , precio: 800},
    {id : 3, nombre: 'miron' , precio: 600},
    {id : 4, nombre: 'celoso' , precio: 450},
    {id : 5, nombre: 'enojon' , precio: 780},
    {id : 6, nombre: 'gamer' , precio: 1000},

])

const [Carrito, setCarrito] = useState ([])

return(
    <Fragment>
        <h3>Lista de productos</h3>
        {items.map((item) => (
          <item
          key={item.id}
          item={item}
          Carrito={Carrito}
          setCarrito={setCarrito}
          items={items}
          />
        ))}

        <Carrito
        Carrito= {Carrito}
        setCarrito={setCarrito}
       />;

    </Fragment>

);

        }


        

export default App;








