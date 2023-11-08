import React from 'react'
import Addinfo from '../../../assets/plus-circle.svg'

const AgregarEquipo = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Agregar Equipo</h1>
      <section className="flex flex-col items-center">
        <button className="bg-transparent hover:bg-seleccion hover:text-hover font-paragraph py-2 px-4 rounded-base">
          Agregar presidente
        </button>
        <div className="flex items-center mt-4">
          <input type="text" className="border border-1 py-2 px-4 rounded-base mr-2" placeholder="Nombre del presidente" />
          <img src={Addinfo} alt="Info icon" />
        </div>
      </section>
      <table className="table-auto border-separate rounded-base">
        <thead>
          <tr>
            <th className="border border-1 px-4 py-2">No.</th>
            <th className="border border-1 px-4 py-2">Equipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-1 px-4 py-2">1</td>
            <td className="border border-1 px-4 py-2">Equipo 1</td>
            <img src={Addinfo} alt="Info icon" />
          </tr>
          <tr>
            <td className="border border-1 px-4 py-2">2</td>
            <td className="border border-1 px-4 py-2">Equipo 2</td>
            <img src={Addinfo} alt="Info icon" />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AgregarEquipo