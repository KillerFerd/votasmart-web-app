import React from 'react';
import * as Styles from './Styles';
import LinkText from '../LinkText/LinkText';
import { Link, useLocation } from 'react-router-dom';

const CalendarNav = () => {

  const location = useLocation();

  const isRouteActive = (routePart) => location.pathname.includes(routePart);

  return (
    <>
      <Styles.Container>
        <Styles.Nav>
          <Styles.Ul>
            <Styles.Li>
              <Link to="/app/calendario/fase-equipos">
                <LinkText selected={isRouteActive('/app/calendario/fase-equipos') ||
                  isRouteActive('/app/calendario/jornada')}
                  linkTextType={'black'}>
                  Fase de Equipos
                </LinkText>
              </Link>
            </Styles.Li>
            <Styles.Li>
              <Link to="/app/calendario/cuartos-final">
                <LinkText selected={isRouteActive('/app/calendario/cuartos-final')} linkTextType={'black'}>
                  Cuartos de Final
                </LinkText>
              </Link>
            </Styles.Li>
            <Styles.Li>
              <Link to="/app/calendario/semifinal">
                <LinkText selected={isRouteActive('/app/calendario/semifinal')} linkTextType={'black'}>
                  Semifinal
                </LinkText>
              </Link>
            </Styles.Li>
            <Styles.Li>
              <Link to="/app/calendario/final">
                <LinkText selected={isRouteActive('/app/calendario/final')} linkTextType={'black'}>
                  Final
                </LinkText>
              </Link>
            </Styles.Li>
          </Styles.Ul>
        </Styles.Nav>
      </Styles.Container>
    </>
  );
};

export default CalendarNav;