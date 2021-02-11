import pic from '../Resources/picture.png'
import '../customStyles.css'
import {ModalContext} from '../ModalContext'
import { useContext } from "react";

export const Propiedad = ({data}) => {
  const {
          modalProperty, 
          setModalProperty,
          modalVisibility, 
          setModalVisibility
  } = useContext(ModalContext)
  
  return (
    <div className='card mt-3 shadow bg-white rounded'>
      <div className='row'>
        <div className='col-md-5 picContainer'>
          <img src={pic} className='img-fluid' style={{borderRadius:'1%'}}/>
          <div className='bottom-left'><span>
            NUEVO 
            </span>
          </div>
        </div>
        <div className='col-md-7 mt-2'>
            <div className='row'>
                <span className='col-8 font-weight-bold'> {data.address.street} #{data.address.number_ext} Int.{data.address.number_int} </span>
                <span className='col-4 font-weight-bold text-success'> ${data.price} </span>
            </div>
            <div className='mt-1' style={{fontSize:'x-small'}}>
              Venta de departamento en la colonia {data.address.city}
            </div>
            <div className='mt-1 mr-2' style={{fontSize:'small'}}>
              {data.description}
            </div>
            <div className='text-right container'>
              <button className="btn btn-success mt-3" onClick={()=>{
                  setModalProperty(data)
                  setModalVisibility(prev => !prev)
              }
              }>Ver propiedad</button>
            </div>
        </div>
      </div>
    </div>
  )
}


export default Propiedad;