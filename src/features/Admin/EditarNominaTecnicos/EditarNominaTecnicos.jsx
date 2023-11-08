import React from 'react'
import { Link } from 'react-router-dom';
import deleted from '../../../assets/x.svg'

const EditarNominaTecnicos = () => {
  return (
    <div className="w-full px-32 mt-12 flex flex-col justify-center items-center">
        <h1 className='font-title text-lg text-center text-titulo'>Nomina de Tecnicos</h1>
        <Link to="agregar-tecnico">
          <button className="bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 my-8 rounded-base">
            agregar tecnico
          </button>
        </Link>
        <table className="border-separate w-full border-spacing-2">
          <thead className='font-paragraph'>
            <tr>
              <th>No.</th>
              <th>Tecnico</th>
              <th>Cargo</th>
            </tr>
          </thead>
          <tbody className='font-paragraph'>
            <tr>
              <td className="border-2 p-2 rounded-base">Jill</td>
              <td className="border-2 p-2 rounded-base">Smith</td>
              <td className="border-2 p-2 rounded-base">50</td>
              <img src={deleted} alt="" />
            </tr>
          </tbody>
        </table>
        <Link to="editar-nomina-tecnicos">
        <button className="bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 my-8 rounded-base">
          guardar
        </button>
      </Link>
      </div>
  )
}

export default EditarNominaTecnicos