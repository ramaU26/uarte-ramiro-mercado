import './App.css';
import  BarraDeNavegacion from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React , {useState} from 'react'




function App() {
  const [cantidad, setCantidad] = useState(0)
  const sumar = () => {
    if(cantidad < 50){setCantidad( cantidad + 1)}
    
  }
  const restar = () => {
    if(cantidad > 0){setCantidad( cantidad - 1)}
  }
  

  return ( 
    <React.Fragment className="app">
      <BarraDeNavegacion/>
      <ItemListContainer ></ItemListContainer>
     <div></div>
     <span>{cantidad}</span>
     <button onClick={sumar}>+</button>
     <button onClick={restar}>-</button>
     </React.Fragment>
    
    
  );
}

export default App;
