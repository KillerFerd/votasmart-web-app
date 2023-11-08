import React from 'react'

const DetalleTorneo = () => {
  return (
    <div className="w-full px-32 mt-12 flex flex-col justify-center items-center">
        <h1 className='font-title text-lg text-center text-titulo'>Agregar Torneo Nuevo</h1>
        <div className="max-w-screen-xl mx-auto p-4 flex flex-col items-center">
          <form className="flex flex-wrap gap-4 pl-[12rem]">
          <div className="w-full md:w-1/2">
              <label className="text-fondo3">Nombre</label>
              <input
                className="w-full bg-white border-2 text-fondo3 border-black px-6 py-1 rounded-base"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="text-fondo3">Fecha Inicio</label>
              <input
                className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
                type="date"
              />
            </div>
            <div className="w-full md:w-1/4">
              <label className="text-fondo3">Fecha Fin</label>
              <input
                className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
                type="date"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="text-fondo3">Fecha Inicio Fase Equipos</label>
              <input
                className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
                type="date"
              />
            </div>
            <div className="col-span-2">
              <label className="text-fondo3">Fecha Fin Fase Equipos</label>
              <input
                className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
                type="date"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="text-fondo3">Fecha Inicio Cuartos Final</label>
              <input
                className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
                type="date"
              />
            </div>
            <div className="col-span-2">
              <label className="text-fondo3">Fecha Fin Cuartos Final</label>
              <input
                className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
                type="date"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="text-fondo3">Fecha Inicio Semifinal</label>
              <input
                className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
                type="date"
              />
            </div>
            <div className="col-span-2">
              <label className="text-fondo3">Fecha Fin Semifinal</label>
              <input
                className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
                type="date"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="text-fondo3">Fecha Inicio Final</label>
              <input
                className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
                type="date"
              />
            </div>
            <div className="col-span-2">
              <label className="text-fondo3">Fecha Fin Final</label>
              <input
                className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
                type="date"
              />
            </div>
            
          </form>
          <div className="flex items-end w-full md:w-1/6">
              <button className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 my-8 rounded-base">
                Agregar
              </button>
          </div>
        </div>
    </div>
  )
}

export default DetalleTorneo