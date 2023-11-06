import React from 'react'

const Contact_form = () => {
  return (
    <>
        <h2 className="font-subtitle text-lg text-left text-titulo ml-20">Contáctanos</h2>
        <h3 className="font-subtitle text-base text-center text-fondo3 ml-4 mt-10">¡Queremos saber de ti!</h3>
        <div className="flex items-center justify-center">
            <div className="w-full max-w-screen-sm p-4 mb-12">
                <form className="text-left">
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block text-sm pb-2 font-paragraph text-gray-700">Nombre</label>
                        <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="block w-full px-3 border-2 rounded-lg text-gray-800 placeholder-gray-400 focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                        placeholder="Escribe tu nombre"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="apellido" className="block text-sm pb-2 font-paragraph text-gray-700">Apellido</label>
                        <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        className="block w-full px-3 py-2 border-2 rounded-lg text-gray-800 placeholder-gray-400 focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                        placeholder="Escribe tu apellido"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="correo" className="block text-sm pb-2 font-paragraph text-gray-700">Correo</label>
                        <input
                        type="text"
                        id="correo"
                        name="correo"
                        className="block w-full px-3 py-2 border-2 rounded-lg text-gray-800 placeholder-gray-400 focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                        placeholder="Escribe tu correo"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="comentario" className="block text-sm pb-2 font-paragraph text-gray-700">Comentario</label>
                        <textarea
                        type="text"
                        id="comentario"
                        name="comentario"
                        className="block w-full px-3 py-2 border-2 rounded-lg text-gray-800 placeholder-gray-400 focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                        placeholder="Escribe tu comentario"
                        />
                    </div>
                    <div className="mb-4 flex justify-center mt-10">
                        <button type="submit" className="bg-transparent border-2 px-4 rounded-lg hover:bg-indigo-600">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
    
  )
}

export default Contact_form