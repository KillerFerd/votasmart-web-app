import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AdminLayout from './components/AdminLayout'
import WebAppLayout from './components/WebAppLayout'
import Header from './components/header'
import Footer from './components/footer'
import Tabla_partidos from './components/tabla_partidos'
import './App.css'

// Componentes Web App
import Index from './features/App/Index/Index'
import FaseEquipos from './features/App/FaseEquipos/FaseEquipos'
import CuartosFinal from './features/App/CuartosFinal/CuartosFinal'
import Semifinal from './features/App/Semifinal/Semifinal'
import Final from './features/App/Final/Final'
import DetallePartido from './features/App/DetalleEquipo/DetalleEquipo'
import Equipos from './features/App/Equipos/Equipos'
import DetalleEquipo from './features/App/DetalleEquipo/DetalleEquipo'
import DetalleJugador from './features/App/DetalleJugador/DetalleJugador'

// Componentes Administración
import Login from './features/Admin/Login/Login'
import Dashboard from './features/Admin/Dashboard/Dashboard'
import Torneos from './features/Admin/Torneos/Torneos'
import AgregarTorneoNuevo from './features/Admin/AgregarTorneoNuevo/AgregarTorneoNuevo'
import DetalleTorneo from './features/Admin/DetalleTorneo/DetalleTorneo'
import AgregarEquipo from './features/Admin/AgregarEquipo/AgregarEquipo'
import NominaJugadores from './features/Admin/NominaJugadores/NominaJugadores'
import EditarNominaJugadores from './features/Admin/EditarNominaJugadores/EditarNominaJugadores'
import AgregarJugador from './features/Admin/AgregarJugador/AgregarJugador'
import NominaTecnicos from './features/Admin/NominaTecnicos/NominaTecnicos'
import EditarNominaTecnicos from './features/Admin/EditarNominaTecnicos/EditarNominaTecnicos'
import AgregarTecnico from './features/Admin/AgregarTecnico/AgregarTecnico'
import AdmEquipos from './features/Admin/Equipos/Equipos'
import AgregarEquipoNuevo from './features/Admin/AgregarEquipoNuevo/AgregarEquipoNuevo'
import AdmDetalleEquipo from './features/Admin/DetalleEquipo/DetalleEquipo'
import Jugadores from './features/Admin/Jugadores/Jugadores'
import AgregarJugadorNuevo from './features/Admin/AgregarJugadorNuevo/AgregarJugadorNuevo'
import AdmDetalleJugador from './features/Admin/DetalleJugador/DetalleJugador'
import Tecnicos from './features/Admin/Tecnicos/Tecnicos'
import AgregarTecnicoNuevo from './features/Admin/AgregarTecnicoNuevo/AgregarTecnicoNuevo'
import DetalleTecnico from './features/Admin/DetalleTecnico/DetalleTecnico'
import Arbitros from './features/Admin/Arbitros/Arbitros'
import AgregarArbitroNuevo from './features/Admin/AgregarArbitroNuevo/AgregarArbitroNuevo'
import DetalleArbitro from './features/Admin/DetalleArbitro/DetalleArbitro'
import Jornadas from './features/Admin/Jornadas/Jornadas'
import DetalleJornada from './features/Admin/DetalleJornada/DetalleJornada'
import AdmDetallePartido from './features/Admin/DetallePartido/DetallePartido'

const router = createBrowserRouter(createRoutesFromElements(
  // Ruta padre
  <Route path='/'>
    {/* Rutas Web App */}
    <Route path='app' element={<WebAppLayout />}>

      <Route path='inicio' element={<Index />}>
      </Route>

      <Route path='calendario'>
        <Route path='fase-equipos' element={<FaseEquipos />}>
        </Route>
        <Route path='cuartos-final' element={<CuartosFinal />}>
        </Route>
        <Route path='semifinal' element={<Semifinal />}>
        </Route>
        <Route path='final' element={<Final />}>
        </Route>
        <Route path='detalle-partido' element={<DetallePartido />}>
        </Route>
      </Route>

      <Route path='equipos' element={<Equipos />}>
        <Route path='detalle-equipo' element={<DetalleEquipo />}>
          <Route path='detalle-jugador' element={<DetalleJugador />}>
          </Route>
        </Route>
      </Route>

    </Route>

    {/* Rutas Administración */}
    <Route path='admin' element={<AdminLayout />}>
      <Route path='login' element={<Login />}>
      </Route>
      <Route path='dashboard' element={<Dashboard />}>
      </Route>
      <Route path='torneos' element={<Torneos />}>
        <Route path='agregar-torneo-nuevo' element={<AgregarTorneoNuevo />}>
        </Route>
        <Route path='detalle-torneo' element={<DetalleTorneo />}>
          <Route path='agregar-equipo' element={<AgregarEquipo />}>
          </Route>
          <Route path='nomina-jugadores' element={<NominaJugadores />}>
            <Route path='editar-nomina-jugadores' element={<EditarNominaJugadores />}>
              <Route path='agregar-jugador' element={<AgregarJugador />}>
              </Route>
            </Route>
          </Route>
          <Route path='nomina-tecnicos' element={<NominaTecnicos />}>
            <Route path='editar-nomina-tecnicos' element={<EditarNominaTecnicos />}>
              <Route path='agregar-tecnico' element={<AgregarTecnico />}>
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path='equipos' element={<AdmEquipos />}>
        <Route path='agregar-equipo-nuevo' element={<AgregarEquipoNuevo />}>
        </Route>
        <Route path='detalle-equipo' element={<AdmDetalleEquipo />}>
        </Route>
      </Route>
      <Route path='jugadores' element={<Jugadores />}>
        <Route path='agregar-jugador-nuevo' element={<AgregarJugadorNuevo />}>
        </Route>
        <Route path='detalle-jugador' element={<AdmDetalleJugador />}>
        </Route>
      </Route>
      <Route path='tecnicos' element={<Tecnicos />}>
        <Route path='agregar-tecnico-nuevo' element={<AgregarTecnicoNuevo />}>
        </Route>
        <Route path='detalle-tecnico' element={<DetalleTecnico />}>
        </Route>
      </Route>
      <Route path='arbitros' element={<Arbitros />}>
        <Route path='agregar-arbitro-nuevo' element={<AgregarArbitroNuevo />}>
        </Route>
        <Route path='detalle-arbitro' element={<DetalleArbitro />}>
        </Route>
      </Route>
      <Route path='jornadas' element={<Jornadas />}>
        <Route path='detalle-jornada' element={<DetalleJornada />}>
          <Route path='detalle-partido' element={<AdmDetallePartido />}>
          </Route>
        </Route>
      </Route>
    </Route>
  </Route>
))

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App