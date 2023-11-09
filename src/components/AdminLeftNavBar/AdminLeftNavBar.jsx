// AdminLeftNavBar.jsx:
import React, { useState } from 'react';
import * as Styles from './Styles';
import { Link, useLocation } from 'react-router-dom';
import LinkText from '../LinkText/LinkText';
import Image from '../Image/Image';
import Dashboard from '../../assets/dashboard.png'
import Torneo from '../../assets/torneo.png'
import Equipo from '../../assets/equipo.png'
import Jugador from '../../assets/jugador.png'
import Tecnico from '../../assets/tecnico.png'
import Arbitro from '../../assets/arbitro.png'
import Jornada from '../../assets/jornada.png'
import Salir from '../../assets/salir.png'

const AdminLeftNavBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const location = useLocation();

    const isRouteActive = (routePart) => location.pathname.includes(routePart);

    return (
        <>
            <Styles.LeftNavBar $isVisible={isVisible}>
                <Styles.ButtonNavDiv>
                    <Styles.ButtonNav onClick={toggleVisibility}>X</Styles.ButtonNav>
                </Styles.ButtonNavDiv>
                <Styles.Article2>
                    <ul>
                        <Styles.Li>
                            <Styles.Article><Image imageType={'xxsImage'} src={Dashboard} alt='dashboard'></Image></Styles.Article>
                            <Link to={'/admin/dashboard'}><LinkText linkTextType={'white'}
                                selected={isRouteActive('/admin/dashboard')}>
                                Dashboard</LinkText></Link>
                        </Styles.Li>
                        <Styles.Li>
                            <Styles.Article><Image imageType={'xxsImage'} src={Torneo} alt='torneo'></Image></Styles.Article>
                            <Link to={'/admin/torneos'}><LinkText linkTextType={'white'}
                                selected={isRouteActive('/admin/torneos')}>Torneos
                            </LinkText></Link>
                        </Styles.Li>
                        <Styles.Li>
                            <Styles.Article><Image imageType={'xxsImage'} src={Equipo} alt='equipo'></Image></Styles.Article>
                            <Link to={'/admin/equipos'}><LinkText linkTextType={'white'}
                                selected={isRouteActive('/admin/equipos')}
                            >Equipos</LinkText></Link>
                        </Styles.Li>
                        <Styles.Li>
                            <Styles.Article><Image imageType={'xxsImage'} src={Jugador} alt='jugador'></Image></Styles.Article>
                            <Link to={'/admin/jugadores'}><LinkText linkTextType={'white'}
                                selected={isRouteActive('/admin/jugadores')}>
                                Jugadores</LinkText></Link>
                        </Styles.Li>
                        <Styles.Li>
                            <Styles.Article><Image imageType={'xxsImage'} src={Tecnico} alt='tecnico'></Image></Styles.Article>
                            <Link to={'/admin/tecnicos'}><LinkText linkTextType={'white'}
                                selected={isRouteActive('/admin/tecnicos')}>
                                Técnicos</LinkText></Link>
                        </Styles.Li>
                        <Styles.Li>
                            <Styles.Article><Image imageType={'xxsImage'} src={Arbitro} alt='arbitro'></Image></Styles.Article>
                            <Link to={'/admin/arbitros'}><LinkText linkTextType={'white'}
                                selected={isRouteActive('/admin/arbitros')}>
                                Árbitros</LinkText></Link>
                        </Styles.Li>
                        <Styles.Li>
                            <Styles.Article><Image imageType={'xxsImage'} src={Jornada} alt='jornada'></Image></Styles.Article>
                            <Link to={'/admin/jornadas'}><LinkText linkTextType={'white'}
                                selected={isRouteActive('/admin/jornadas')}>
                                Jornadas</LinkText></Link>
                        </Styles.Li>
                    </ul>
                    <ul>
                        <Styles.Li>
                            <Styles.Article><Image imageType={'xxsImage'} src={Salir} alt='salir'></Image></Styles.Article>
                            <Link to={'/app/inicio'}><LinkText linkTextType={'white'}>
                                Cerrar Sesión</LinkText></Link>
                        </Styles.Li>
                    </ul>
                </Styles.Article2>
            </Styles.LeftNavBar>
            <Styles.Div>
                <Styles.Button $isVisible={!isVisible} onClick={toggleVisibility}>
                    ☰
                </Styles.Button>
            </Styles.Div>
        </>
    );
};

export default AdminLeftNavBar;
