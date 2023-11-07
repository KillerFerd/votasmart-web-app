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
          <tbody>
            <Styles.Tr>
              <Styles.Td>
                <Link to="/app/calendario/jornada/1">
                  <LinkText linkTextType={'black'}>
                    Jornada 1
                  </LinkText>
                </Link>
              </Styles.Td>
              <Styles.Td>
                <Link to="/app/calendario/jornada/12">
                  <LinkText linkTextType={'black'}>
                    Jornada 12
                  </LinkText>
                </Link>
              </Styles.Td>
            </Styles.Tr>
            <Styles.Tr>
              <Styles.Td>
                <Link to="/app/calendario/jornada/2">
                  <LinkText linkTextType={'black'}>
                    Jornada 2
                  </LinkText>
                </Link>
              </Styles.Td>
              <Styles.Td>
                <Link to="/app/calendario/jornada/13">
                  <LinkText linkTextType={'black'}>
                    Jornada 13
                  </LinkText>
                </Link>
              </Styles.Td>
            </Styles.Tr>
            <Styles.Tr>
              <Styles.Td>
                <Link to="/app/calendario/jornada/3">
                  <LinkText linkTextType={'black'}>
                    Jornada 3
                  </LinkText>
                </Link>
              </Styles.Td>
              <Styles.Td>
                <Link to="/app/calendario/jornada/14">
                  <LinkText linkTextType={'black'}>
                    Jornada 14
                  </LinkText>
                </Link>
              </Styles.Td>
            </Styles.Tr>
            <Styles.Tr>
              <Styles.Td>
                <Link to="/app/calendario/jornada/4">
                  <LinkText linkTextType={'black'}>
                    Jornada 4
                  </LinkText>
                </Link>
              </Styles.Td>
              <Styles.Td>
                <Link to="/app/calendario/jornada/15">
                  <LinkText linkTextType={'black'}>
                    Jornada 15
                  </LinkText>
                </Link>
              </Styles.Td>
            </Styles.Tr>
            <Styles.Tr>
              <Styles.Td>
                <Link to="/app/calendario/jornada/5">
                  <LinkText linkTextType={'black'}>
                    Jornada 5
                  </LinkText>
                </Link>
              </Styles.Td>
              <Styles.Td>
                <Link to="/app/calendario/jornada/16">
                  <LinkText linkTextType={'black'}>
                    Jornada 16
                  </LinkText>
                </Link>
              </Styles.Td>
            </Styles.Tr>
            <Styles.Tr>
              <Styles.Td>
                <Link to="/app/calendario/jornada/6">
                  <LinkText linkTextType={'black'}>
                    Jornada 6
                  </LinkText>
                </Link>
              </Styles.Td>
              <Styles.Td>
                <Link to="/app/calendario/jornada/17">
                  <LinkText linkTextType={'black'}>
                    Jornada 17
                  </LinkText>
                </Link>
              </Styles.Td>
            </Styles.Tr>
            <Styles.Tr>
              <Styles.Td>
                <Link to="/app/calendario/jornada/7">
                  <LinkText linkTextType={'black'}>
                    Jornada 7
                  </LinkText>
                </Link>
              </Styles.Td>
              <Styles.Td>
                <Link to="/app/calendario/jornada/18">
                  <LinkText linkTextType={'black'}>
                    Jornada 18
                  </LinkText>
                </Link>
              </Styles.Td>
            </Styles.Tr>
            <Styles.Tr>
              <Styles.Td>
                <Link to="/app/calendario/jornada/8">
                  <LinkText linkTextType={'black'}>
                    Jornada 8
                  </LinkText>
                </Link>
              </Styles.Td>
              <Styles.Td>
                <Link to="/app/calendario/jornada/19">
                  <LinkText linkTextType={'black'}>
                    Jornada 19
                  </LinkText>
                </Link>
              </Styles.Td>
            </Styles.Tr>
            <Styles.Tr>
              <Styles.Td>
                <Link to="/app/calendario/jornada/9">
                  <LinkText linkTextType={'black'}>
                    Jornada 9
                  </LinkText>
                </Link>
              </Styles.Td>
              <Styles.Td>
                <Link to="/app/calendario/jornada/20">
                  <LinkText linkTextType={'black'}>
                    Jornada 20
                  </LinkText>
                </Link>
              </Styles.Td>
            </Styles.Tr>
            <Styles.Tr>
              <Styles.Td>
                <Link to="/app/calendario/jornada/10">
                  <LinkText linkTextType={'black'}>
                    Jornada 10
                  </LinkText>
                </Link>
              </Styles.Td>
              <Styles.Td>
                <Link to="/app/calendario/jornada/21">
                  <LinkText linkTextType={'black'}>
                    Jornada 21
                  </LinkText>
                </Link>
              </Styles.Td>
            </Styles.Tr>
            <Styles.Tr>
              <Styles.Td>
                <Link to="/app/calendario/jornada/11">
                  <LinkText linkTextType={'black'}>
                    Jornada 11
                  </LinkText>
                </Link>
              </Styles.Td>
              <Styles.Td>
                <Link to="/app/calendario/jornada/22">
                  <LinkText linkTextType={'black'}>
                    Jornada 22
                  </LinkText>
                </Link>
              </Styles.Td>
            </Styles.Tr>
          </tbody>
        </Styles.Table>
      </Container>
    </>
  )
}

export default FaseEquipos