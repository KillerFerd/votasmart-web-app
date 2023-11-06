import React from 'react'
import CalendarNav from '../../../components/CalendarNav/CalendarNav'
import Text from '../../../components/Text/Text'
import * as Styles from './styles'
import { Link } from 'react-router-dom';
import LinkText from '../../../components/LinkText/LinkText';

const FaseEquipos = () => {
  return (
    <>
      <CalendarNav />
      <Styles.Container>
        <Styles.Title>
          <Text textType={'title'}>FASE DE EQUIPOS</Text>
        </Styles.Title>
        <Styles.Table>
          <Styles.Tr>
            <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 1
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 12
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 2
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 13
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 3
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 14
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 4
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 15
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 5
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 16
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 6
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 17
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 7
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 18
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 8
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 19
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 9
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 20
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 10
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 21
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 11
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText vinculoType={'black'}>
                  Jornada 22
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
        </Styles.Table>
      </Styles.Container>
    </>
  )
}

export default FaseEquipos