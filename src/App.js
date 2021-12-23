import React, {useState} from 'react';
import Item from './ItemListaContainer/componentes/Item';
import Cart from './ItemListaContainer/componentes/Cart';
import Navbar from './ItemListaContainer/componentes/NavBar'
import "./styles/"


function App(){ 

const [items, setItem] = useState ([
    {id : 1, nombre: 'Triston' , precio: 250},
    {id : 2, nombre: 'feliz' , precio: 800},
    {id : 3, nombre: 'miron' , precio: 600},
    {id : 4, nombre: 'celoso' , precio: 450},
    {id : 5, nombre: 'enojon' , precio: 780},
    {id : 6, nombre: 'gamer' , precio: 1000},

])

const [cart, setCart] = useState ([])

return(

   <div className='container__header'>
       <Navbar></Navbar>
       <h3>Lista de productos</h3>
       <ul> {items.map((item) => (
          <Item
          key={item.id}
          item={item}
          cart={cart}
          setCart={setCart}
          items={items}
          />
        ))} </ul>

        <Cart
        cart={cart}
        setCart={setCart}
       />;
       </div>
  

);

        }


        

export default App;








