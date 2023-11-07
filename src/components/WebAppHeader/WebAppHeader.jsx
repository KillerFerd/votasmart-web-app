import React from 'react';
import * as Styles from './Styles';
import LinkText from '../LinkText/LinkText';
import Image from '../Image/Image';
import Usuario from '../../assets/usuario.png';
import { Link, useLocation } from 'react-router-dom';

const WebAppHeader = () => {
  const location = useLocation();

  const isRouteActive = (routePart) => location.pathname.includes(routePart);

  return (
    <Styles.ContenedorNav>
      <Styles.Null></Styles.Null>
      <Styles.Nav>
        <Styles.Ul>
          <Styles.Li>
            <Link to="/app/inicio">
              <LinkText selected={isRouteActive('/app/inicio')} linkTextType={'black'}>
                Inicio
              </LinkText>
            </Link>
          </Styles.Li>
          <Styles.Li>
            <Link to="/app/calendario/fase-equipos">
              <LinkText
                selected={
                  isRouteActive('/app/calendario/fase-equipos') ||
                  isRouteActive('/app/calendario/cuartos-final') ||
                  isRouteActive('/app/calendario/semifinal') ||
                  isRouteActive('/app/calendario/final') ||
                  isRouteActive('/app/calendario/jornada') ||
                  isRouteActive('/app/calendario/detalle-partido')
                }
                linkTextType={'black'}
              >
                Calendario
              </LinkText>
            </Link>
          </Styles.Li>
          <Styles.Li>
            <Link to="/app/equipos">
              <LinkText
                selected={
                  isRouteActive('/app/equipos') ||
                  isRouteActive('/app/equipos/detalle-equipo') ||
                  isRouteActive('/app/equipos/detalle-jugador')
                }
                linkTextType={'black'}
              >
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
