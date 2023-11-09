import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import info from "../../../assets/info.png"
import VotaSmartApi from '../../../apis/VotaSmartApi'

const Torneos = () => {

  const [torneos, setTorneos] = useState([])

  // ComponentDidMount
  useEffect(() => {
    VotaSmartApi.get('/torneo').then(response => {
      const torneosArray = Object.values(response.data)
      setTorneos(torneosArray)
    })
  }, [])

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
          {torneos[0]?.map((torneo, index) => (
            <tr key={index}>
              <td className="border-2 p-2 rounded-base">{index + 1}</td>
              <td className="border-2 p-2 rounded-base">{torneo.nombre}</td>
              <td className="border-2 p-2 rounded-base">{torneo.fechaInicio}</td>
              <td className="border-2 p-2 rounded-base">{torneo.fechaFin}</td>
              <td className="border-2 p-2 rounded-base">{torneo.idEstado === 1 ? "Activo" : "Inactivo"}</td>
              <td><img src={info} alt="info" className='w-6 h-auto' /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Torneos