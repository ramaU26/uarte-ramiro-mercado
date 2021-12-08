import './App.css';
import  BarraDeNavegacion from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App() {
  return ( 
    <React.Fragment className="app">
      <BarraDeNavegacion/>
      <ItemListContainer ></ItemListContainer>
     </React.Fragment>
    
    
  );
}

export default App;
