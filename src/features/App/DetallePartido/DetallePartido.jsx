import React from 'react'
import Container from '../../../components/Container/Container'
import * as Styles from './Styles'
import Text from '../../../components/Text/Text'
import Marcador from './components/Marcador/Marcador'
import Arbitros from './components/Arbitros/Arbitros'
import NominaJugadores from './components/NominaJugadores/NominaJugadores'
import NominaTecnicos from './components/NominaTecnicos/NominaTecnicos'

const DetallePartido = () => {
  return (
    <>
      <Container>
        <Styles.Section1>
          <Text textType={'title'}>DETALLE DEL PARTIDO</Text>
        </Styles.Section1>
        <Marcador/>
        <Arbitros/>
        <NominaJugadores subTitle={'Jugadores Equipo Local'}/>
        <NominaJugadores subTitle={'Suplentes Equipo Local'}/>
        <NominaTecnicos subTitle={'Técnicos Equipo Visitante'}/>
        <NominaJugadores subTitle={'Jugadores Equipo Visitante'}/>
        <NominaJugadores subTitle={'Suplentes Equipo Visitante'}/>
        <NominaTecnicos subTitle={'Técnicos Equipo Visitante'}/>        
      </Container>
    </>
  )
}

export default DetallePartido