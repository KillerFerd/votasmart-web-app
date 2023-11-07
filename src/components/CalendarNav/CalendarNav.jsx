import React from 'react';
import * as Styles from './Styles';
import LinkText from '../LinkText/LinkText';
import { Link, useLocation } from 'react-router-dom';

const CalendarNav = () => {

  const location = useLocation();

  return (
    <>
      <Styles.Container>
        <Styles.Nav>
          <Styles.Ul>
            <Styles.Li>
              <Link to="/app/calendario/fase-equipos">
                <LinkText selected={location.pathname === '/app/calendario/fase-equipos' || location.pathname === '/app/calendario/jornada'} linkTextType={'black'}>
                  Fase de Equipos
                </LinkText>
              </Link>
            </Styles.Li>
            <Styles.Li>
              <Link to="/app/calendario/cuartos-final">
                <LinkText selected={location.pathname === '/app/calendario/cuartos-final'} linkTextType={'black'}>
                  Cuartos de Final
                </LinkText>
              </Link>
            </Styles.Li>
            <Styles.Li>
              <Link to="/app/calendario/semifinal">
                <LinkText selected={location.pathname === '/app/calendario/semifinal'} linkTextType={'black'}>
                  Semifinal
                </LinkText>
              </Link>
            </Styles.Li>
            <Styles.Li>
              <Link to="/app/calendario/final">
                <LinkText selected={location.pathname === '/app/calendario/final'} linkTextType={'black'}>
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