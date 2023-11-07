import React from 'react'
import CalendarNav from '../../../components/CalendarNav/CalendarNav'
import * as Styles from './Styles'
import ContainerWithSubNav from '../../../components/ContainerWithSubNav/ContainerWithSubNav'
import Text from '../../../components/Text/Text'
import VsTarjet from '../../../components/VsTarjet/VsTarjet'

const Semifinal = () => {
  return (
    <>
      <CalendarNav /> 
      <ContainerWithSubNav>
        <Styles.Section1>
          <Text textType={'title'}>SEMIFINAL</Text>
        </Styles.Section1>
        <Styles.Section2>
          <Text textType={'subTitle'}>Clasificación 1</Text>
          <VsTarjet partido={'Partido 1'} />
          <VsTarjet partido={'Partido 2'} />
          <Text textType={'subTitle'}>Clasificación 2</Text>
          <VsTarjet partido={'Partido 1'} />
          <VsTarjet partido={'Partido 2'} />                             
        </Styles.Section2>
      </ContainerWithSubNav>
    </>
    
  )
}

export default Semifinal