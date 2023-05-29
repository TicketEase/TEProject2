import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';


function Navigationbar() {
  let { logout } = useAuth0();
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{margin:'0',height:'6vh'}}>
        {/* <Container> */}
          <Navbar.Brand href="#home" style={{marginLeft:'5%'}}>Ticketease</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">FAQ</Nav.Link>
          </Nav>
      <Button className='logoutButton'  style={{marginRight:'10%',marginTop:'0%',width:'10%'}}  variant="outline-warning" onClick={()=>logout()}>signout</Button>
        {/* </Container> */}
      </Navbar>
    </div>
  );
}

export default Navigationbar;