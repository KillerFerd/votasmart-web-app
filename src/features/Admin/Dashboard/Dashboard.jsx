import React from 'react'
import Logo from '../../../assets/VotaSmart.png'

const Dashboard = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-16'>
      <img src={Logo} alt="cancha" className='w-60 h-auto rounded-base' />
      <h1 className='font-title text-lg text-titulo'>Nombre Torneo Actual</h1>
      <div className="bg-fondo2 flex items-center justify-center w-96">
        <section className="max-w-screen-sm p-4 bg-white rounded-lg">
          <div className="text-left">
            <div className="mb-4 flex flex-row">
              <label htmlFor="fechaInicio" className="block text-sm text-gray-700">Fecha de Inicio</label>
              <span className="block w-full px-3 py-2 border rounded-lg text-gray-800 bg-white">2023-01-01</span>
            </div>
            <div className="mb-4 flex flex-row">
              <label htmlFor="fechaInicio" className="block text-sm text-gray-700">Fecha de Inicio</label>
              <span className="block w-full px-3 py-2 border rounded-lg text-gray-800 bg-white">2023-01-01</span>
            </div>
            <div className="mb-4 flex flex-row">
              <label htmlFor="fechaFin" className="block text-sm text-gray-700">Fecha de Fin</label>
              <span className="block w-full px-3 py-2 border rounded-lg text-gray-800 bg-white">2023-02-28</span>
            </div>
            <div className="mb-4 flex flex-row">
              <label htmlFor="estado" className="block text-sm text-gray-700">Estado</label>
              <span className="block w-full px-3 py-2 border rounded-lg text-gray-800 bg-white">En curso</span>
            </div>
            <div className="mb-4 flex flex-row">
              <label htmlFor="partidosJugados" className="block text-sm text-gray-700">Partidos Jugados</label>
              <span className="block w-full px-3 py-2 border rounded-lg text-gray-800 bg-white">20</span>
            </div>
            <div className="mb-4 flex flex-row">
              <label htmlFor="primerLugar" className="block text-sm text-gray-700">Primer Lugar</label>
              <span className="block w-full px-3 py-2 border rounded-lg text-gray-800 bg-white">Equipo A</span>
              <label htmlFor="puntosPrimerLugar" className="block text-sm text-gray-700">Puntos del Primer Lugar</label>
              <span className="block w-full px-3 py-2 border rounded-lg text-gray-800 bg-white">50</span>
            </div>
            <div className="mb-4 flex flex-row">
              <label htmlFor="segundoLugar" className="block text-sm text-gray-700">Segundo Lugar</label>
              <span className="block w-full px-3 py-2 border rounded-lg text-gray-800 bg-white">Equipo B</span>
              <label htmlFor="puntosSegundoLugar" className="block text-sm text-gray-700">Puntos del Segundo Lugar</label>
              <span className="block w-full px-3 py-2 border rounded-lg text-gray-800 bg-white">40</span>
            </div>
            <div className="mb-4 flex flex-row">
              <label htmlFor="tercerLugar" className="block text-sm text-gray-700">Tercer Lugar</label>
              <span className="block w-full px-3 py-2 border rounded-lg text-gray-800 bg-white">Equipo C</span>
              <label htmlFor="puntosTercerLugar" className="block text-sm text-gray-700">Puntos del Tercer Lugar</label>
              <span className="block w-full px-3 py-2 border rounded-lg text-gray-800 bg-white">30</span>
            </div>
          </div>
        </section>
      </div>
    </div>
    
  )
}

export default Dashboard