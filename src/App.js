import { Container } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import logo from './tu-canton-logo-blanco.svg'
function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src = {logo}
            width="130"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
      </Navbar>
      <Container>
        Hi!
      </Container>
    </>
  );
}

export default App;