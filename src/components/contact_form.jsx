import React from 'react'

const Contact_form = () => {
  return (
    <>
        <h2 className="font-subtitle text-lg text-left text-titulo">Contáctanos</h2>
        <div className="max-w-screen-lg p-4">
            <form>
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-sm text-gray-700">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="block w-full px-3 py-2 border rounded-lg text-gray-800 placeholder-gray-400 focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                        placeholder="Escribe tu nombre"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-sm text-gray-700">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="block w-full px-3 py-2 border rounded-lg text-gray-800 placeholder-gray-400 focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                        placeholder="Escribe tu nombre"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-sm text-gray-700">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="block w-full px-3 py-2 border rounded-lg text-gray-800 placeholder-gray-400 focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                        placeholder="Escribe tu nombre"
                    />
                </div>
                <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">
                    Enviar
                </button>
            </form>
        </div>
    </>
    
  )
}

export default Contact_form