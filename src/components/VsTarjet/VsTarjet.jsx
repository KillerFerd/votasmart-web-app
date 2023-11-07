import React from 'react';
import * as Styles from './Styles';
import Text from '../Text/Text';
import Image from '../Image/Image'
import Escudo from '../../assets/escudo.png'
import Estadio from '../../assets/estadio.png'
import Info from '../../assets/info.png'
import Input from '../Input/Input';
import { Link } from 'react-router-dom';

const VsTarjet = ({partido}) => {

    return (
        <>
            <Styles.Section>
                <Styles.VsTarjetArt1>
                    <Text textType={'paragraph1'}>{partido}</Text>
                    <Styles.Paragraph1Mod><Text textType={'paragraph1'}>00/00/0000</Text></Styles.Paragraph1Mod>
                    <Text textType={'paragraph1'}>00:00</Text>
                </Styles.VsTarjetArt1>
                <Styles.VsTarjetArt2>
                    <Styles.Ul>
                        <Styles.Li>
                            <Text textType={'paragraph1'}>Local</Text>
                        </Styles.Li>
                        <Styles.Li>
                            <Image imageType={'sImage'} alt='escudo' src={Escudo}></Image>
                        </Styles.Li>
                        <Styles.Li>
                            <Input inputType={'inputTrans'}
                                size={'medium'}
                                center={true}
                                type='text'
                                value='pronto'
                                disabled ></Input>
                        </Styles.Li>
                        <Styles.Li>
                            <Input inputType={'inputTrans'}
                                size={'small'}
                                center={true}
                                type='text'
                                value='pronto'
                                disabled ></Input>
                        </Styles.Li>
                    </Styles.Ul>
                    <Styles.Ul>
                        <Styles.Li>
                            <Image imageType={'xsImage'} alt='estadio' src={Estadio}></Image>
                        </Styles.Li>
                        <Styles.Li>
                            <Input inputType={'inputTrans'}
                                size={'medium'}
                                center={true}
                                type='text'
                                value='pronto'
                                disabled ></Input>
                        </Styles.Li>
                        <Styles.Li>
                            <Text textType={'paragraph1'}>Contra</Text>
                        </Styles.Li>
                        <Styles.Li>
                            <Link to="/app/calendario/detalle-partido">
                                <Image imageType={'xxsImage'} alt='información' src={Info}></Image>
                            </Link>
                        </Styles.Li>
                    </Styles.Ul>
                    <Styles.Ul>
                        <Styles.Li>
                            <Text textType={'paragraph1'}>Local</Text>
                        </Styles.Li>
                        <Styles.Li>
                            <Image imageType={'sImage'} alt='escudo' src={Escudo}></Image>
                        </Styles.Li>
                        <Styles.Li>
                            <Input inputType={'inputTrans'}
                                size={'medium'}
                                center={true}
                                type='text'
                                value='pronto'
                                disabled ></Input>
                        </Styles.Li>
                        <Styles.Li>
                            <Input inputType={'inputTrans'}
                                size={'small'}
                                center={true}
                                type='text'
                                value='pronto'
                                disabled ></Input>
                        </Styles.Li>
                    </Styles.Ul>
                </Styles.VsTarjetArt2>
            </Styles.Section>
        </>
    );
};

export default VsTarjet;