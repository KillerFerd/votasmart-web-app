import React from 'react'
import CalendarNav from '../../../components/CalendarNav/CalendarNav'
import Container from '../../../components/Container/Container'
import Text from '../../../components/Text/Text'
import * as Styles from './Styles'
import { Link } from 'react-router-dom';
import LinkText from '../../../components/LinkText/LinkText';

const FaseEquipos = () => {
  return (
    <>
      <CalendarNav />
      <Container>
        <Styles.Title>
          <Text textType={'title'}>FASE DE EQUIPOS</Text>
        </Styles.Title>
        <Styles.Table>
          <Styles.Tr>
            <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 1
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 12
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 2
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 13
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 3
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 14
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 4
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 15
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 5
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 16
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 6
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 17
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 7
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 18
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 8
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 19
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 9
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 20
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 10
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 21
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
          <Styles.Tr>
          <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 11
                </LinkText>
              </Link>
              </Styles.Td>
              <Styles.Td>
              <Link to="/app/calendario/jornada">
                <LinkText linkTextType={'black'}>
                  Jornada 22
                </LinkText>
              </Link>
              </Styles.Td>
          </Styles.Tr>
        </Styles.Table>
      </Container>
    </>
  )
}

export default FaseEquipos