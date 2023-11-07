import React from 'react'
import * as Styles from './Styles'
import Text from '../../../../../../../components/Text/Text'
import Image from '../../../../../../../components/Image/Image'
import Foto from '../../../../../../../assets/foto.png'
import Input from '../../../../../../../components/Input/Input'

const Arbitro = ({arbitro}) => {
    return (
        <>
            <Styles.Article>
                <Text textType={'paragraph1'}>{arbitro}</Text>
                <Image src={Foto} alt='arbitro' imageType={'mProfile'}></Image>
                <Input type='text'
                    disabled
                    value='pronto'
                    inputType={'inputTrans'}
                    size={'medium'}
                    center={true}>
                </Input>
            </Styles.Article>
        </>
    )
}

export default Arbitro