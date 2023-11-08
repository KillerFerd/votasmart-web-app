import React from 'react'
import ContainerAdm from '../../../components/ContainerAdm/ContainerAdm'
import Text from '../../../components/Text/Text'
import TableDetails from '../../../components/TableDetails/TableDetails'
import Input from '../../../components/Input/Input'
import Image from '../../../components/Image/Image'
import Info from '../../../assets/info.png'
import Foto from '../../../assets/foto.png'
import * as Styles from './Styles'

const DetalleJugador = () => {
  return (
    <>
      <ContainerAdm>
        <Text textType={'title'}>NOMBRE JUGADOR</Text>
        <Styles.Section1>
          <Styles.Image>
            <Image imageType={'lImage'} src={Foto} alt='fotografía'></Image>
          </Styles.Image>
          <TableDetails>
            <tbody>
              <tr>
                <td><Text textType={'paragraph1'}>Año de Nacimiento:</Text></td>
                <td><Input inputType={'inputTrans'} size={'small'} disabled type='text'></Input></td>
              </tr>
              <tr>
                <td><Text textType={'paragraph1'}>Lugar de Nacimiento:</Text></td>
                <td><Input inputType={'inputTrans'} size={'large'} disabled type='text'></Input></td>
              </tr>
              <tr>
                <td><Text textType={'paragraph1'}>Nacionalidad:</Text></td>
                <td><Input inputType={'inputTrans'} size={'medium'} disabled type='text'></Input></td>
              </tr>
              <tr>
                <td><Text textType={'paragraph1'}>País de Origen:</Text></td>
                <td><Input inputType={'inputTrans'} size={'medium'} type='text'></Input></td>
              </tr>
              <tr>
                <td><Text textType={'paragraph1'}>Altura:</Text></td>
                <td><Input inputType={'inputTrans'} size={'small'} disabled type='text'></Input></td>
              </tr>
              <tr>
                <td><Text textType={'paragraph1'}>Peso:</Text></td>
                <td><Input inputType={'inputTrans'} size={'small'} disabled type='text'></Input></td>
              </tr>
              <tr>
                <td><Text textType={'paragraph1'}>Genero:</Text></td>
                <td><Input inputType={'inputTrans'} size={'medium'} disabled type='text'></Input></td>
              </tr>
              <tr>
                <td><Text textType={'paragraph1'}>Teléfono:</Text></td>
                <td><Input inputType={'inputTrans'} size={'medium'} disabled type='text'></Input></td>
              </tr>
              <tr>
                <td><Text textType={'paragraph1'}>Correo:</Text></td>
                <td><Input inputType={'inputTrans'} size={'large'} disabled type='text'></Input></td>
              </tr>
              <tr>
                <td><Text textType={'paragraph1'}>Dirección Residencia:</Text></td>
                <td><Input inputType={'inputTrans'} size={'large'} disabled type='text'></Input></td>
              </tr>
              <tr>
                <td><Text textType={'paragraph1'}>Imagén Identificación:</Text></td>
                <td><Image imageType={'xxsImage'} src={Info} alt='identificación'></Image></td>
              </tr>
              <tr>
                <td><Text textType={'paragraph1'}>Estado:</Text></td>
                <td><Input inputType={'inputTrans'} size={'medium'} disabled type='text'></Input></td>
              </tr>
            </tbody>
          </TableDetails>
        </Styles.Section1>
      </ContainerAdm>
    </>
  )
}

export default DetalleJugador