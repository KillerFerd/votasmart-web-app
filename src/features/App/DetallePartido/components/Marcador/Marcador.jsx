import React from 'react'
import * as Styles from './Styles'
import Text from '../../../../../components/Text/Text'
import Image from '../../../../../components/Image/Image'
import Escudo from '../../../../../assets/escudo.png'
import Estadio from '../../../../../assets/estadio.png'
import Input from '../../../../../components/Input/Input'

const Marcador = () => {
    return (
        <>
            <Styles.Container>
                <Text textType={'subTitle'}>Marcador</Text>
                <Styles.Article>
                    <Styles.Ul>
                        <Styles.Li>
                            <Text textType={'paragraph1'}>Local</Text>
                        </Styles.Li>
                        <Styles.Li>
                            <Image src={Escudo} alt='escudo' imageType={'mImage'} />
                        </Styles.Li>
                        <Styles.Li>
                            <Input inputType={'inputTrans'}
                                size={'medium'}
                                type='text'
                                center={true}
                                value='pronto'
                                disabled>
                            </Input>
                        </Styles.Li>
                        <Styles.Li>
                            <Input inputType={'inputTrans'}
                                size={'small'}
                                type='text'
                                center={true}
                                value='pronto'
                                disabled>
                            </Input>
                        </Styles.Li>
                    </Styles.Ul>
                    <Styles.Ul>
                        <Styles.Li>
                            <Image src={Estadio} alt='estadio' imageType={'sImage'} />
                        </Styles.Li>
                        <Styles.Li>
                            <Input inputType={'inputTrans'}
                                size={'medium'}
                                type='text'
                                value='pronto'
                                center={true}
                                disabled>
                            </Input>
                        </Styles.Li>
                        <Styles.Li>
                            <Text textType={'paragraph1'}>Contra</Text>
                        </Styles.Li>
                    </Styles.Ul>
                    <Styles.Ul>
                        <Styles.Li>
                            <Text textType={'paragraph1'}>Local</Text>
                        </Styles.Li>
                        <Styles.Li>
                            <Image src={Escudo} alt='escudo' imageType={'mImage'} />
                        </Styles.Li>
                        <Styles.Li>
                            <Input inputType={'inputTrans'}
                                size={'medium'}
                                type='text'
                                center={true}
                                value='pronto'
                                disabled>
                            </Input>
                        </Styles.Li>
                        <Styles.Li>
                            <Input inputType={'inputTrans'}
                                size={'small'}
                                type='text'
                                center={true}
                                value='pronto'
                                disabled>
                            </Input>
                        </Styles.Li>
                    </Styles.Ul>
                </Styles.Article>
            </Styles.Container>
        </>
    )
}

export default Marcador