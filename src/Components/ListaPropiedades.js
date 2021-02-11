import React from 'react'
import Propiedad from './Propiedad'
import {data} from '../Resources/realState'
import {ModalContext} from '../ModalContext'
import { useContext } from "react";


const ListaPropiedades = () => {
    return (
        <>
            {}
            {data.map(element => (<Propiedad key={data.id} data={element}/>))}
        </>
    )
}
export default ListaPropiedades