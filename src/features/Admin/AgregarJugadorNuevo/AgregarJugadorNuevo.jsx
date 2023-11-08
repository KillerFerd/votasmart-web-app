import React from 'react'
import ContainerAdm from '../../../components/ContainerAdm/ContainerAdm'
import Text from '../../../components/Text/Text'
import TableDetails from '../../../components/TableDetails/TableDetails'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import List from '../../../components/List/List'

const AgregarJugadorNuevo = () => {
  return (
    <>
      <ContainerAdm>
        <Text textType={'title'}>AGREGAR JUGADOR NUEVO</Text>
        <TableDetails>
          <tbody>
            <tr>
              <td><Text textType={'paragraph1'}>Nombre:</Text></td>
              <td><Input inputType={'inputBorder'} size={'large'} type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Apellido:</Text></td>
              <td><Input inputType={'inputBorder'} size={'large'} type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Año de Nacimiento:</Text></td>
              <td><Input inputType={'inputBorder'} size={'small'} type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Lugar de Nacimiento:</Text></td>
              <td><Input inputType={'inputBorder'} size={'large'} type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>País de Origen:</Text></td>
              <td>
                <List size={'medium'}>
                  <option value="1">Opción 1</option>
                  <option value="1">Opción 2</option>
                </List>
              </td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Altura:</Text></td>
              <td><Input inputType={'inputBorder'} size={'small'} type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Peso:</Text></td>
              <td><Input inputType={'inputBorder'} size={'small'} type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Genero:</Text></td>
              <td>
                <List size={'medium'}>
                  <option value="1">Opción 1</option>
                  <option value="1">Opción 2</option>
                </List>
              </td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Teléfono:</Text></td>
              <td><Input inputType={'inputBorder'} size={'medium'} type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Correo:</Text></td>
              <td><Input inputType={'inputBorder'} size={'large'} type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Dirección Residencia:</Text></td>
              <td><Input inputType={'inputBorder'} size={'large'} type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Imagén Jugador:</Text></td>
              <td><Input inputType={'inputBorder'} size={'large'} type='file'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Imagén Identificación:</Text></td>
              <td><Input inputType={'inputBorder'} size={'large'} type='file'></Input></td>
            </tr>
          </tbody>
        </TableDetails>
        <Button size={'small'}>Agregar</Button>
      </ContainerAdm>
    </>
  )
}

export default AgregarJugadorNuevo