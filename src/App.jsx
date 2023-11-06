import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Tabla_partidos from './components/tabla_partidos'
import './App.css'

function App() {

  return (
    <>
      <Header></Header>
      <Tabla_partidos></Tabla_partidos>
      <Footer></Footer>
    </>
  )
}

export default App
