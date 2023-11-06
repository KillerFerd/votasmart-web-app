import React from 'react'
import Usuario from '../assets/usuario.png'

const webAppHeader = () => {
  return (
    <header className="bg-white p-4 border-b-2 w-full">
      <div className="flex justify-between align-middle">
      <span></span>
        <nav>
          <ul className="flex flex-row list-none text-black">
            <li className='bg-transparent hover:bg-seleccion transition duration-300 rounded-base'>
              <a href="index.html" className="m-1 p-4">
                Inicio
              </a>
            </li>
            <li className='text-black hover:bg-seleccion transition duration-300 text-white rounded-base'>
              <a href="faseEquipos.html" className="text-black m-1 p-4">
                Calendario
              </a>
            </li>
            <li className='bg-transparent hover:bg-seleccion transition duration-300 text-white rounded-base'>
              <a href="Equipos.html" className="m-1 p-4">
                Equipos
              </a>
            </li>
          </ul>
        </nav>
        <a href="#">
          <img src={Usuario} alt="usuario" className="w-5 h-5" />
        </a>
      </div>
    </header>
  )
}

export default webAppHeader