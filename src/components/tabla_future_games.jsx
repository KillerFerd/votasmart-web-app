import React from 'react';

const Tabla_future_games = () => {
    return (
      <div className="w-full px-32">
        <h1 className='font-subtitle text-lg text-left text-titulo'>Siguientes Partidos</h1>
        <table className="border-separate w-full border-spacing-2">
          <thead>
            <tr>
              <th>Visitante</th>
              <th>Local</th>
              <th>Estadio</th>
              <th>Fecha</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 rounded-base">Jill</td>
              <td className="border p-2 rounded-base">Smith</td>
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
            </tr>
            <tr>
              <td className="border p-2 rounded-base">John</td>
              <td className="border p-2 rounded-base">Doe</td>
              <td className="border p-2 rounded-base">80</td>
              <td className="border p-2 rounded-base">50</td>
              <td className="border p-2 rounded-base">50</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Tabla_future_games;