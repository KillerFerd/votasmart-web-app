import React from 'react'
import * as Styles from './Styles'
import Text from '../../../../../components/Text/Text'
import Arbitro from './components/Arbitro/Arbitro'

const Arbitros = () => {
    return (
        <>
            <Styles.Container>
                <Text textType={'subTitle'}>Árbitros</Text>
                <Styles.Article1>
                    <Arbitro arbitro={'Central'}/>
                    <Arbitro arbitro={'Asistente 1'}/>
                    <Arbitro arbitro={'Asistente 2'}/>
                    <Arbitro arbitro={'Cuarto'}/>
                </Styles.Article1>
            </Styles.Container>
        </>
    )
}

export default Arbitros