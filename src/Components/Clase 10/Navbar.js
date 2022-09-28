import React from 'react'
import ListNav from './ListNav'

const Navbar = () => {

    const links = [
        {
        titulo: 'Inicio',
        lista: ['Ejemplo 1', 'Ejemplo 2', 'Ejemplo 3']     
        }, 
        {
        titulo: 'Contacto',
        lista: ['Ejemplo 1', 'Ejemplo 2', 'Ejemplo 3'] 
        }, 
        {
        titulo: 'Shop',
        lista: ['Ejemplo 1', 'Ejemplo 2', 'Ejemplo 3']
        }, 
        {
        titulo: 'FAQ',
        lista: ['Ejemplo 1', 'Ejemplo 2', 'Ejemplo 3'] 
        }

    ]


  return (
    <div style={{display: 'flex', margin: 10}}>
        {links.map(link => <ListNav key={link.titulo} link={link}/>) }
    </div>
  )
}

export default Navbar