import React from 'react'
import ContainerAdm from '../../../components/ContainerAdm/ContainerAdm'
import Text from '../../../components/Text/Text'
import TableDetails from '../../../components/TableDetails/TableDetails'
import Input from '../../../components/Input/Input'
import TextArea from '../../../components/TextArea/TextArea'
import Button from '../../../components/Button/Button'

const AgregarEquipoNuevo = () => {
  return (
    <>
      <ContainerAdm>
        <Text textType={'title'}>AGREGAR EQUIPO NUEVO</Text>
        <TableDetails>
          <tbody>
            <tr>
              <td><Text textType={'paragraph1'}>Nombre:</Text></td>
              <td><Input inputType={'inputBorder'} size={'large'} type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Año de Fundación:</Text></td>
              <td><Input inputType={'inputBorder'} size={'small'} type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Dirección Oficina:</Text></td>
              <td><Input inputType={'inputBorder'} size={'large'} type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Correo:</Text></td>
              <td><Input inputType={'inputBorder'} size={'large'} type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Estadio:</Text></td>
              <td><Input inputType={'inputBorder'} size={'large'} type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Lugar Estadio:</Text></td>
              <td><Input inputType={'inputBorder'} size={'large'} type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Teléfono 1</Text></td>
              <td><Input inputType={'inputBorder'} size={'medium'} type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Cantidad Titulos:</Text></td>
              <td><Input inputType={'inputBorder'} size={'small'} type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Descripción:</Text></td>
              <td><TextArea></TextArea></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Escudo:</Text></td>
              <td><Input inputType={'inputBorder'} size={'large'} type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Imagén Equipo:</Text></td>
              <td><Input inputType={'inputBorder'} size={'large'} type='file'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Imagén Uniforme:</Text></td>
              <td><Input inputType={'inputBorder'} size={'large'} type='file'></Input></td>
            </tr>
          </tbody>
        </TableDetails>
        <Button size={'small'}>Agregar</Button>
      </ContainerAdm>
    </>
  )
}

export default AgregarEquipoNuevo