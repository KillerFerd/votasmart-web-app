import React from 'react'
import ContainerAdm from '../../../components/ContainerAdm/ContainerAdm'
import Text from '../../../components/Text/Text'
import TableDetails from '../../../components/TableDetails/TableDetails'
import Input from '../../../components/Input/Input'
import TableAdm from '../../../components/TableAdm/TableAdm'
import Image from '../../../components/Image/Image'
import Info from '../../../assets/info.png'
import { Link } from 'react-router-dom'

const DetalleJornada = () => {
  return (
    <ContainerAdm>
      <Text textType={'title'}>NOMBRE JORNADA</Text>
      <TableDetails>
        <tbody>
          <tr>
            <td><Text textType={'paragraph1'}>Torneo:</Text></td>
            <td>
              <Input
                inputType={'inputTrans'}
                disabled
                size={'large'}
                type='text'
              />
            </td>
          </tr>
          <tr>
            <td><Text textType={'paragraph1'}>Fecha Inicio:</Text></td>
            <td>
              <Input
                inputType={'inputTrans'}
                disabled
                size={'medium'}
                type='text'
              />
            </td>
          </tr>
          <tr>
            <td><Text textType={'paragraph1'}>Fecha Fin:</Text></td>
            <td>
              <Input
                inputType={'inputTrans'}
                disabled
                size={'medium'}
                type='text'
              />
            </td>
          </tr>
        </tbody>
      </TableDetails>
      <Text textType={'subTitle'}>Partidos de la Jornada</Text>
      <TableAdm>
        <thead>
          <tr>
            <td><Text textType={'paragraph1'}>No.</Text></td>
            <td><Text textType={'paragraph1'}>Local</Text></td>
            <td><Text textType={'paragraph1'}>Visitante</Text></td>
            <td><Text textType={'paragraph1'}>Fecha</Text></td>
            <td><Text textType={'paragraph1'}>Hora</Text></td>
            <td><Text textType={'paragraph1'}>G L.</Text></td>
            <td><Text textType={'paragraph1'}>G V.</Text></td>
            <td><Text textType={'paragraph1'}></Text></td>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <Input
              inputType={'inputBorder'}
              size={'xsmall'}
              type='text'
              disabled
              center={true}
            />
          </td>
          <td>
            <Input
              inputType={'inputBorder'}
              size={'medium'}
              type='text'
              disabled
            />
          </td>
          <td>
            <Input
              inputType={'inputBorder'}
              size={'medium'}
              type='text'
              disabled
            />
          </td>
          <td>
            <Input
              inputType={'inputBorder'}
              size={'medium'}
              type='text'
              disabled
              center={true}
            />
          </td>
          <td>
            <Input
              inputType={'inputBorder'}
              size={'small'}
              type='text'
              disabled
              center={true}
            />
          </td>
          <td>
            <Input
              inputType={'inputBorder'}
              size={'xsmall'}
              type='text'
              disabled
              center={true}
            />
          </td>
          <td>
            <Input
              inputType={'inputBorder'}
              size={'xsmall'}
              type='text'
              disabled
              center={true}
            />
          </td>
          <td>
            <Link to="/admin/jornadas/detalle-jornada/detalle-partido">
              <Image imageType={'xxsImage'} src={Info} alt='información'></Image>
            </Link>
          </td>
        </tr>
        </tbody>
      </TableAdm>
    </ContainerAdm>
  )
}

export default DetalleJornada