import React from 'react'
import Logo from '../../../assets/VotaSmart.png'

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-paragraph">
      <img src={Logo} alt="logo" className="w-80 h-auto" />
      <div className="w-full max-w-xs p-4">
        <form className="text-left">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-4 text-gray-700">Usuario</label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full px-3 py-2 border-2 rounded-lg text-gray-800 placeholder-gray-400 focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm mb-4 text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              className="block w-full px-3 py-2 border-2 rounded-lg text-gray-800 placeholder-gray-400 focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="contraseña"
            />
          </div>
          <div className="mb-4 flex justify-center mt-10">
            <button type="submit" className="bg-transparent border-2 px-4 rounded-lg hover:bg-seleccion transition duration-300">
              Acceder
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login