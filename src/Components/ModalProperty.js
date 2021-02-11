import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import { useContext } from "react";
import { ModalContext } from '../ModalContext'
import picture from '../Resources/picture2.jpg'

export const ModalVisualizer = () => {
    const {
            modalProperty, 
            modalVisibility, 
            setModalVisibility
    } = useContext(ModalContext)

    const handleClose = () => setModalVisibility(false)


    return (
      <Modal show={modalVisibility} onHide={handleClose}>
        <Modal.Body>
            <Carousel>
                <Carousel.Item interval="10000">
                    <img
                    className="d-block w-100"
                    src={picture}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={picture}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={picture}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
            <div className='container mt-3'>
                <h3>
                    {modalProperty.address.street} #{modalProperty.address.number_ext} int.{modalProperty.address.number_int}
                </h3>
                <div className='font-weight-bold'>
                    $ {modalProperty.price}
                </div>
                <div style={{
                    fontSize: 'x-small'
                }}>
                    departamento en venta
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}


