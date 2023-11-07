import React from 'react';
import * as Styles from './Styles';
import LinkText from '../LinkText/LinkText';
import Image from '../Image/Image';
import Usuario from '../../assets/usuario.png'
import { Link, useLocation } from 'react-router-dom';

const WebAppHeader = () => {
  const location = useLocation();

  return (
    <Styles.ContenedorNav>
      <Styles.Null></Styles.Null>
      <Styles.Nav>
        <Styles.Ul>
          <Styles.Li>
            <Link to="/app/inicio">
              <LinkText selected={location.pathname === '/app/inicio'}
                linkTextType={'black'}>
                Inicio
              </LinkText>
            </Link>
          </Styles.Li>
          <Styles.Li>
            <Link to="/app/calendario/fase-equipos">
              <LinkText selected={
                location.pathname === '/app/calendario/fase-equipos' ||
                location.pathname === '/app/calendario/cuartos-final' ||
                location.pathname === '/app/calendario/semifinal' ||
                location.pathname === '/app/calendario/final' ||
                location.pathname === '/app/calendario/jornada' ||
                location.pathname === '/app/calendario/detalle-partido'}
                linkTextType={'black'}>
                Calendario
              </LinkText>
            </Link>
          </Styles.Li>
          <Styles.Li>
            <Link to="/app/equipos">
              <LinkText selected={
                location.pathname === '/app/equipos' ||
                location.pathname === '/app/equipos/detalle-equipo' ||
                location.pathname === '/app/equipos/detalle-jugador'}
                linkTextType={'black'}>
                Equipos
              </LinkText>
            </Link>
          </Styles.Li>
        </Styles.Ul>
      </Styles.Nav>
      <Link to="/admin/login">
        <Styles.Img>
          <Image imageType={'xxsImage'} alt="usuario" src={Usuario} />
        </Styles.Img>
      </Link>
    </Styles.ContenedorNav>

  );
};

export default WebAppHeader;
