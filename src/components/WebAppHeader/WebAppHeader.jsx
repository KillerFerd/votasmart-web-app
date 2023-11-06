import React from 'react';
import * as Styles from './Styles';
import Vinculo from '../LinkText/LinkText';
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
              <Vinculo selected={location.pathname === '/app/inicio'}
                vinculoType={'black'}>
                <p>Inicio</p>
              </Vinculo>
            </Link>
          </Styles.Li>
          <Styles.Li>
            <Link to="/app/calendario/fase-equipos">
              <Vinculo selected={
                location.pathname === '/app/calendario/fase-equipos' ||
                location.pathname === '/app/calendario/cuartos-final' ||
                location.pathname === '/app/calendario/semifinal' ||
                location.pathname === '/app/calendario/final' ||
                location.pathname === '/app/calendario/jornada' }
                vinculoType={'black'}>
                <p>Calendario</p>
              </Vinculo>
            </Link>
          </Styles.Li>
          <Styles.Li>
            <Link to="/app/equipos">
              <Vinculo selected={
                location.pathname === '/app/equipos' ||
                location.pathname === '/app/equipos/detalle-equipo' ||
                location.pathname === '/app/equipos/detalle-jugador'}
                vinculoType={'black'}>
                <p>Equipos</p>
              </Vinculo>
            </Link>
          </Styles.Li>
        </Styles.Ul>
      </Styles.Nav>
      <Link to="/admin/login">
        <Styles.Img>
          <Image imageType={'xxsImage'} alt="usuario" src={Usuario} ></Image>
        </Styles.Img>
      </Link>
    </Styles.ContenedorNav>

  );
};

export default WebAppHeader;
