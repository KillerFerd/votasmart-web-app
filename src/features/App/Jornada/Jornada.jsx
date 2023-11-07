import React from 'react'
import { useParams } from 'react-router-dom';
import CalendarNav from '../../../components/CalendarNav/CalendarNav'
import ContainerWithSubNav from '../../../components/ContainerWithSubNav/ContainerWithSubNav'
import Text from '../../../components/Text/Text'
import VsTarjet from '../../../components/VsTarjet/VsTarjet'
import * as Styles from './Styles'

const Jornada = () => {

  const { jornadaNumber } = useParams();

  return (
    <>
      <CalendarNav />
      <ContainerWithSubNav>
        <Styles.Title>
          <Text textType={'title'}>JORNADA {jornadaNumber}</Text>
        </Styles.Title>
          <VsTarjet partido={'Partido 1'}/>
          <VsTarjet partido={'Partido 2'}/>
          <VsTarjet partido={'Partido 3'}/>
          <VsTarjet partido={'Partido 4'}/>
          <VsTarjet partido={'Partido 5'}/>
          <VsTarjet partido={'Partido 6'}/>
      </ContainerWithSubNav>
    </>

  )
}

export default Jornada