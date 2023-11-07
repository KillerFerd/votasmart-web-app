import React from 'react'
import CalendarNav from '../../../components/CalendarNav/CalendarNav.jsx'
import * as Styles from './Styles'
import Container from '../../../components/Container/Container'
import Text from '../../../components/Text/Text'
import VsTarjet from '../../../components/VsTarjet/VsTarjet'

const Final = () => {
  return (
    <>
      <CalendarNav />
      <Container>
        <Styles.Section1>
          <Text textType={'title'}>FINAL</Text>
        </Styles.Section1>
        <Styles.Section2>
          <VsTarjet partido={'Partido 1'} />
          <VsTarjet partido={'Partido 2'} />
        </Styles.Section2>
      </Container>
    </>
  )
}

export default Final