import React from 'react'
import { Link } from 'react-router-dom'
import './volverBoton.css'

const VolverBoton = () => {
  return (
    <div className='contenedor__boton'>
      <Link to='/'> <button className='boton'>Atrás</button> </Link>
    </div>
  )
}

export default VolverBoton
