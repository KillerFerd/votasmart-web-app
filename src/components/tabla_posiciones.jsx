import React from 'react';

const Tabla_posiciones = () => {
    return (
      <div className="w-full px-32">
        <h1 className='font-subtitle text-lg text-left text-titulo'>Tabla de Posiciones</h1>
        <table className="border-separate w-full border-spacing-2">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>Victorias</th>
              <th>Perdidos</th>
              <th>Empates</th>
              <th>G. a Favor</th>
              <th>G. en Contra</th>
              <th>Puntos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 rounded-base">Jill</td>
              <td className="border p-2 rounded-base">Smith</td>
              <td className="border p-2 rounded-base">50</td>
              <td className="border p-2 rounded-base">50</td>
              <td className="border p-2 rounded-base">50</td>
              <td className="border p-2 rounded-base">50</td>
              <td className="border p-2 rounded-base">50</td>
            </tr>
            <tr>
              <td className="border p-2 rounded-base">Eve</td>
              <td className="border p-2 rounded-base">Jackson</td>
              <td className="border p-2 rounded-base">94</td>
              <td className="border p-2 rounded-base">50</td>
              <td className="border p-2 rounded-base">50</td>
              <td className="border p-2 rounded-base">50</td>
              <td className="border p-2 rounded-base">50</td>
            </tr>
            <tr>
              <td className="border p-2 rounded-base">John</td>
              <td className="border p-2 rounded-base">Doe</td>
              <td className="border p-2 rounded-base">80</td>
              <td className="border p-2 rounded-base">50</td>
              <td className="border p-2 rounded-base">50</td>
              <td className="border p-2 rounded-base">50</td>
              <td className="border p-2 rounded-base">50</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Tabla_posiciones;