import React from 'react'
import Addinfo from '../../../assets/plus-circle.svg'

const AgregarJugador = () => {
  return (
    <div>
      <h1 className="font-title text-titulo text-lg mb-4">Agregar Jugador</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Jugador</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border rounded-base px-4 py-2">1</td>
            <td className="border rounded-base px-4 py-2">Jugador 1</td>
            <td className="border rounded-base px-4 py-2">
              <img src={Addinfo} alt="Agregar" />
            </td>
          </tr>
          <tr>
            <td className="border rounded-base px-4 py-2">2</td>
            <td className="border rounded-base px-4 py-2">Jugador 2</td>
            <td className="border rounded-base px-4 py-2">
              <img src={Addinfo} alt="Agregar" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default AgregarJugador;
