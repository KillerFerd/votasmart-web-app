import React from 'react'
import CalendarNav from '../../../components/CalendarNav/CalendarNav'
import ContainerWithSubNav from '../../../components/ContainerWithSubNav/ContainerWithSubNav'
import Text from '../../../components/Text/Text'
import VsTarjet from '../../../components/VsTarjet/VsTarjet'
import * as Styles from './Styles'

const CuartosFinal = () => {
  return (
    <>
      <CalendarNav />
      <ContainerWithSubNav>
        <Styles.Section1>
          <Text textType={'title'}>CUARTOS DE FINAL</Text>
        </Styles.Section1>
        <Styles.Section2>
          <Text textType={'subTitle'}>Clasificación 1</Text>
          <VsTarjet partido={'Partido 1'} />
          <VsTarjet partido={'Partido 2'} />
          <Text textType={'subTitle'}>Clasificación 2</Text>
          <VsTarjet partido={'Partido 1'} />
          <VsTarjet partido={'Partido 2'} />          
          <Text textType={'subTitle'}>Clasificación 3</Text>
          <VsTarjet partido={'Partido 1'} />
          <VsTarjet partido={'Partido 2'} />                    
          <Text textType={'subTitle'}>Clasificación 3</Text>
          <VsTarjet partido={'Partido 1'} />
          <VsTarjet partido={'Partido 2'} />                      
        </Styles.Section2>
      </ContainerWithSubNav>
    </>
  )
}

export default CuartosFinal