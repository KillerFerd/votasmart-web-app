import React from 'react'
import ContainerAdm from '../../../components/ContainerAdm/ContainerAdm'
import Text from '../../../components/Text/Text'
import TableDetails from '../../../components/TableDetails/TableDetails'
import Input from '../../../components/Input/Input'
import List from '../../../components/List/List'
import TableAdm from '../../../components/TableAdm/TableAdm'
import Button from '../../../components/Button/Button'

const DetallePartido = () => {
  return (
    <>
      <ContainerAdm>
        <Text textType={'title'}>DETALLE DEL PARTIDO</Text>
        <TableDetails>
          <tbody>
            <tr>
              <td><Text textType={'paragraph1'}>Fecha:</Text></td>
              <td><Input
                inputType={'inputBorder'}
                size={'large'}
                type='date' /></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Hora:</Text></td>
              <td><Input
                inputType={'inputBorder'}
                size={'medium'}
                type='time' /></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Equipo Local:</Text></td>
              <td>
                <List size={'medium'}>
                  <option value="1">Opción 1</option>
                  <option value="1">Opción 2</option>
                </List>
              </td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Equipo Visitante:</Text></td>
              <td>
                <List size={'medium'}>
                  <option value="1">Opción 1</option>
                  <option value="1">Opción 2</option>
                </List>
              </td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Equipo Ganador:</Text></td>
              <td><Input
                inputType={'inputBorder'}
                size={'medium'}
                type='text'
                disabled /></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Equipo Perdedor:</Text></td>
              <td><Input
                inputType={'inputBorder'}
                size={'medium'}
                type='text'
                disabled /></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Goles Local:</Text></td>
              <td><Input
                inputType={'inputBorder'}
                size={'xsmall'}
                type='text'
                disabled /></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Goles Visitante:</Text></td>
              <td><Input
                inputType={'inputBorder'}
                size={'xsmall'}
                type='text'
                disabled /></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Puntos Local:</Text></td>
              <td><Input
                inputType={'inputBorder'}
                size={'xsmall'}
                type='text'
                disabled /></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Puntos Visitante:</Text></td>
              <td><Input
                inputType={'inputBorder'}
                size={'xsmall'}
                type='text'
                disabled /></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Estado:</Text></td>
              <td>
                <List size={'medium'}>
                  <option value="1">Opción 1</option>
                  <option value="1">Opción 2</option>
                </List></td>
            </tr>
          </tbody>
        </TableDetails>
        <Text textType={'subTitle'}>Nomina Jugadores Equipo Local</Text>
        <TableAdm>
          <thead>
            <tr>
              <td><Text textType={'paragraph1'}>No.</Text></td>
              <td><Text textType={'paragraph1'}>Jugador</Text></td>
              <td><Text textType={'paragraph1'}>Número</Text></td>
              <td><Text textType={'paragraph1'}>Posición</Text></td>
              <td><Text textType={'paragraph1'}>Tipo</Text></td>
              <td><Text textType={'paragraph1'}>R</Text></td>
              <td><Text textType={'paragraph1'}>A</Text></td>
              <td><Text textType={'paragraph1'}>G</Text></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Input inputType={'inputBorder'} size={'xsmall'} disabled type='text'></Input></td>
              <td><Input inputType={'inputBorder'} size={'medium'} disabled type='text'></Input></td>
              <td><Input inputType={'inputBorder'} size={'xsmall'} disabled type='text'></Input></td>
              <td><List size={'medium'}><option value="1">Opción 1</option><option value="1">Opción 2</option></List></td>
              <td><List size={'medium'}><option value="1">Opción 1</option><option value="1">Opción 2</option></List></td>
              <td><Input inputType={'inputBorder'} size={'xsmall'} center={true} type='text'></Input></td>
              <td><Input inputType={'inputBorder'} size={'xsmall'} center={true} type='text'></Input></td>
              <td><Input inputType={'inputBorder'} size={'xsmall'} center={true} type='text'></Input></td>
            </tr>
          </tbody>
        </TableAdm>
        <Text textType={'subTitle'}>Nomina Técnicos Equipo Local</Text>
        <TableAdm>
          <thead>
            <tr>
              <td><Text textType={'paragraph1'}>No.</Text></td>
              <td><Text textType={'paragraph1'}>Técnico</Text></td>
              <td><Text textType={'paragraph1'}>Cargo</Text></td>
              <td><Text textType={'paragraph1'}>Tipo</Text></td>
              <td><Text textType={'paragraph1'}>R</Text></td>
              <td><Text textType={'paragraph1'}>A</Text></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Input inputType={'inputBorder'} size={'xsmall'} disabled type='text'></Input></td>
              <td><Input inputType={'inputBorder'} size={'medium'} disabled type='text'></Input></td>
              <td><Input inputType={'inputBorder'} size={'medium'} disabled type='text'></Input></td>
              <td><List size={'medium'}><option value="1">Opción 1</option><option value="1">Opción 2</option></List></td>
              <td><Input inputType={'inputBorder'} size={'xsmall'} center={true} type='text'></Input></td>
              <td><Input inputType={'inputBorder'} size={'xsmall'} center={true} type='text'></Input></td>
            </tr>
          </tbody>
        </TableAdm>
        <Text textType={'subTitle'}>Nomina Jugadores Equipo Visitante</Text>
        <TableAdm>
          <thead>
            <tr>
              <td><Text textType={'paragraph1'}>No.</Text></td>
              <td><Text textType={'paragraph1'}>Jugador</Text></td>
              <td><Text textType={'paragraph1'}>Número</Text></td>
              <td><Text textType={'paragraph1'}>Posición</Text></td>
              <td><Text textType={'paragraph1'}>Tipo</Text></td>
              <td><Text textType={'paragraph1'}>R</Text></td>
              <td><Text textType={'paragraph1'}>A</Text></td>
              <td><Text textType={'paragraph1'}>G</Text></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Input inputType={'inputBorder'} size={'xsmall'} disabled type='text'></Input></td>
              <td><Input inputType={'inputBorder'} size={'medium'} disabled type='text'></Input></td>
              <td><Input inputType={'inputBorder'} size={'xsmall'} disabled type='text'></Input></td>
              <td><List size={'medium'}><option value="1">Opción 1</option><option value="1">Opción 2</option></List></td>
              <td><List size={'medium'}><option value="1">Opción 1</option><option value="1">Opción 2</option></List></td>
              <td><Input inputType={'inputBorder'} size={'xsmall'} center={true} type='text'></Input></td>
              <td><Input inputType={'inputBorder'} size={'xsmall'} center={true} type='text'></Input></td>
              <td><Input inputType={'inputBorder'} size={'xsmall'} center={true} type='text'></Input></td>
            </tr>
          </tbody>
        </TableAdm>
        <Text textType={'subTitle'}>Nomina Técnicos Equipo Visitante</Text>
        <TableAdm>
          <thead>
            <tr>
              <td><Text textType={'paragraph1'}>No.</Text></td>
              <td><Text textType={'paragraph1'}>Técnico</Text></td>
              <td><Text textType={'paragraph1'}>Cargo</Text></td>
              <td><Text textType={'paragraph1'}>Tipo</Text></td>
              <td><Text textType={'paragraph1'}>R</Text></td>
              <td><Text textType={'paragraph1'}>A</Text></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Input inputType={'inputBorder'} size={'xsmall'} disabled type='text'></Input></td>
              <td><Input inputType={'inputBorder'} size={'medium'} disabled type='text'></Input></td>
              <td><Input inputType={'inputBorder'} size={'medium'} disabled type='text'></Input></td>
              <td><List size={'medium'}><option value="1">Opción 1</option><option value="1">Opción 2</option></List></td>
              <td><Input inputType={'inputBorder'} size={'xsmall'} center={true} type='text'></Input></td>
              <td><Input inputType={'inputBorder'} size={'xsmall'} center={true} type='text'></Input></td>
            </tr>
          </tbody>
        </TableAdm>
        <Text textType={'subTitle'}>Nomina Árbitros</Text>
        <TableDetails>
          <tbody>
            <tr>
              <td><Text textType={'paragraph1'}>Árbitro Central:</Text></td>
              <td><List size={'large'}><option value="1">Opción 1</option><option value="1">Opción 2</option></List></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Asistente 1:</Text></td>
              <td><List size={'large'}><option value="1">Opción 1</option><option value="1">Opción 2</option></List></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Asistente 2:</Text></td>
              <td><List size={'large'}><option value="1">Opción 1</option><option value="1">Opción 2</option></List></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Cuarto Árbitro:</Text></td>
              <td><List size={'large'}><option value="1">Opción 1</option><option value="1">Opción 2</option></List></td>
            </tr>                                    
          </tbody>
        </TableDetails>
        <Button size={'medium'}>Guardar Cambios</Button>
      </ContainerAdm>
    </>
  )
}

export default DetallePartido