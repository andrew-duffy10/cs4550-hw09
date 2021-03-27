
import "./App.scss"
import Users from "./Users";
import Events from "./Events";
// Credit to Nat Tuck's lecture notes:
// https://github.com/NatTuck/scratch-2021-01/blob/master/notes-4550/16-spa/notes.md
//  <Container>
//      <Users />
//    </Container>
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function App() {
  function load_component() {
      return "";
  }
  return (
      // Navbar template: https://react-bootstrap.github.io/components/navbar/
<Container>
<a id="home"></a>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Event App</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#events">Events</Nav.Link>
      <Nav.Link href="#users">Users</Nav.Link>
      <Nav.Link href="#login">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
 
 <a id="events"><Events /></a>
 <a id="users"><Users /></a>
 <a id="login"></a>

</Container>
  );
}

export default App;

