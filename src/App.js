import Navbar from 'react-bootstrap/Navbar'
import logo from './Resources/logo.svg'
import ListaPropiedades from './Components/ListaPropiedades'
import {useState} from 'react'
import {ModalContext} from './ModalContext'
import {ModalVisualizer} from './Components/ModalProperty'

function App() {
  const [modalProperty, setModalProperty] = useState({})
  const [modalVisibility, setModalVisibility] = useState(false)
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="tu canton logo"
            src = {logo}
            width="130"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Navbar>
        <ModalContext.Provider value={{
          modalProperty, 
          setModalProperty,
          modalVisibility, 
          setModalVisibility
        }}>
          <div className='container mt-4'>
            <ListaPropiedades/>
          </div>
          <ModalVisualizer>

          </ModalVisualizer>
        </ModalContext.Provider>
    </>
  );
}

export default App;