import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';



function BarraDeNavegacion(props) {

  return(
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><FaShoppingCart/>  "MusimPice"</Navbar.Brand>
    
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Diseños</Nav.Link>
      <Nav.Link href="#pricing">Soporte</Nav.Link>

    </Nav>
    </Container>
  </Navbar>
  )
}


export default BarraDeNavegacion;