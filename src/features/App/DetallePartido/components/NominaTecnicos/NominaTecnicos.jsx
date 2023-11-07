import React from 'react'
import * as Styles from './Styles'
import Text from '../../../../../components/Text/Text'
import Input from '../../../../../components/Input/Input'

const NominaTecnicos = ({ subTitle }) => {
    return (
        <>
            <Styles.Container>
                <Text textType={'subTitle'}>{subTitle}</Text>
                <Styles.Table>
                    <thead>
                        <Styles.Tr>
                            <td><Text textType={'paragraph1'}>Técnico</Text></td>
                            <td><Text textType={'paragraph1'}>Puesto</Text></td>
                            <td><Text textType={'paragraph1'}>T. Roja</Text></td>
                            <td><Text textType={'paragraph1'}>t. Amarilla</Text></td>
                        </Styles.Tr>
                    </thead>
                    <tbody>
                        <Styles.Tr>
                            <td>
                                <Input
                                    type='text'
                                    inputType={'inputBorder'}
                                    disabled
                                    size={'large'}
                                />
                            </td>
                            <td>
                                <Input
                                    type='text'
                                    inputType={'inputBorder'}
                                    disabled
                                    size={'medium'}
                                    center={true}
                                />
                            </td>        
                            <td>
                                <Input
                                    type='text'
                                    inputType={'inputBorder'}
                                    disabled
                                    size={'small'}
                                    center={true}
                                />
                            </td>          
                            <td>
                                <Input
                                    type='text'
                                    inputType={'inputBorder'}
                                    disabled
                                    size={'small'}
                                    center={true}
                                />
                            </td>                                                                                
                        </Styles.Tr>
                    </tbody>
                </Styles.Table>
            </Styles.Container>
        </>
    )
}

export default NominaTecnicos