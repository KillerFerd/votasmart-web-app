import React from 'react'
import { Link } from 'react-router-dom';
import info from "../../../assets/info.png"

const Torneos = () => {
  return (
    <div className="w-full px-32 mt-12 flex flex-col justify-center items-center">
        <h1 className='font-title text-lg text-center text-titulo'>Torneos</h1>
        <Link to="agregar-torneo-nuevo">
        <button className="bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 my-8 rounded-base">
          Agregar Torneo
        </button>
      </Link>
        <table className="border-separate w-full border-spacing-2">
          <thead className='font-paragraph'>
            <tr>
              <th>No.</th>
              <th>Torneo</th>
              <th>Fecha Inicio</th>
              <th>Fecha Fin</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody className='font-paragraph'>
            <tr>
              <td className="border-2 p-2 rounded-base">Jill</td>
              <td className="border-2 p-2 rounded-base">Smith</td>
              <td className="border-2 p-2 rounded-base">50</td>
              <td className="border-2 p-2 rounded-base">50</td>
              <td className="border-2 p-2 rounded-base">50</td>
              <img src={info} alt="info" className='w-6 h-auto' />
            </tr>
            <tr>
              <td className="border-2 p-2 rounded-base">Eve</td>
              <td className="border-2 p-2 rounded-base">Jackson</td>
              <td className="border-2 p-2 rounded-base">94</td>
              <td className="border-2 p-2 rounded-base">50</td>
              <td className="border-2 p-2 rounded-base">50</td>
              <img src={info} alt="info" className='w-6 h-auto' />
            </tr>
            <tr>
              <td className="border-2 p-2 rounded-base">John</td>
              <td className="border-2 p-2 rounded-base">Doe</td>
              <td className="border-2 p-2 rounded-base">80</td>
              <td className="border-2 p-2 rounded-base">50</td>
              <td className="border-2 p-2 rounded-base">50</td>
              <img src={info} alt="info" className='w-6 h-auto' />
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default Torneos