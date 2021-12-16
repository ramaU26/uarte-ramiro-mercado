import { Component, Fragment, useState } from "react";



const Lista = () => {

    const [arrayNumero, setNumero] = useState(1,2,3,4,5,32)
  
    const agregarElemento = () => {
        console.log('click')
    }
    
  return (
      <Fragment>
          <div>
          <h2>Lista de Objetos</h2>
          <button onClick={agregarElemento}>Comprar</button>
          {
              arrayNumero.map((item, index) => 
                  <p key={index}>{item} - {index}</p>
              )
          }
            </div>
      </Fragment>
  )
  
  }
  

  export default Lista
