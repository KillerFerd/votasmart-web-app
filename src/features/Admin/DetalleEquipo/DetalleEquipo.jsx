import React from 'react'
import * as Styles from './Styles'
import ContainerAdm from '../../../components/ContainerAdm/ContainerAdm'
import Text from '../../../components/Text/Text'
import Image from '../../../components/Image/Image'
import Escudo from '../../../assets/escudo.png'
import TableDetails from '../../../components/TableDetails/TableDetails'
import Input from '../../../components/Input/Input'
import Landscape from '../../../assets/landscape.png'
import Foto from '../../../assets/foto.png'

const DetalleEquipo = () => {
  return (
    <>
      <ContainerAdm>
        <Text textType={'title'}>NOMBRE DEL EQUIPO</Text>
        <Styles.Section1>
          <Styles.Image>
            <Image imageType={'lImage'} alt='escudo' src={Escudo}></Image>
          </Styles.Image>
          <Styles.Paragraph>
            <Text textType={'paragraph1'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eum suscipit vitae quidem debitis odit adipisci ab accusamus, voluptatum laborum quia impedit deleniti culpa dignissimos asperiores tempora animi consequatur? Aspernatur.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, cupiditate. Ut blanditiis unde officia doloremque voluptate neque sint eum perferendis et ducimus, quod eligendi provident earum deleniti consectetur a distinctio!
            </Text>
          </Styles.Paragraph>
        </Styles.Section1>
        <TableDetails>
          <tbody>
            <tr>
              <td><Text textType={'paragraph1'}>Año de Fundación:</Text></td>
              <td><Input inputType={'inputTrans'} size={'small'} disabled type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Dirección Oficina:</Text></td>
              <td><Input inputType={'inputTrans'} size={'large'} disabled type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Correo:</Text></td>
              <td><Input inputType={'inputTrans'} size={'large'} disabled type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Estadio:</Text></td>
              <td><Input inputType={'inputTrans'} size={'large'} disabled type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Lugar Estadio:</Text></td>
              <td><Input inputType={'inputTrans'} size={'large'} disabled type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Teléfono:</Text></td>
              <td><Input inputType={'inputTrans'} size={'medium'} disabled type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Cantidad de Títulos</Text></td>
              <td><Input inputType={'inputTrans'} size={'xsmall'} disabled type='text'></Input></td>
            </tr>
            <tr>
              <td><Text textType={'paragraph1'}>Estado</Text></td>
              <td><Input inputType={'inputTrans'} size={'medium'} disabled type='text'></Input></td>
            </tr>
          </tbody>
        </TableDetails>
        <Styles.Section1>
          <Styles.Landscape>
            <Image imageType={'lImage'} src={Landscape} alt='equipo'></Image>
          </Styles.Landscape>
          <Styles.Uniform>
            <Text textType={'paragraph1'}>Uniforme</Text>
            <Image imageType={'mImage'} src={Foto} alt='uniforme'></Image>
          </Styles.Uniform>
        </Styles.Section1>
      </ContainerAdm>
    </>
  )
}

export default DetalleEquipo