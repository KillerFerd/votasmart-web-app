import React from 'react'
import ContainerAdm from '../../../components/ContainerAdm/ContainerAdm'
import Text from '../../../components/Text/Text'
import TableAdm from '../../../components/TableAdm/TableAdm'
import Input from '../../../components/Input/Input'
import Image from '../../../components/Image/Image'
import Info from '../../../assets/info.png'
import { Link } from 'react-router-dom'

const Jornadas = () => {
  return (
    <>
      <ContainerAdm>
        <Text textType={'title'}>JORNADAS</Text>
        <TableAdm>
          <thead>
            <tr>
              <td>
                <Text textType={'paragraph1'}>No.</Text>
              </td>
              <td>
                <Text textType={'paragraph1'}>Torneo</Text>
              </td>
              <td>
                <Text textType={'paragraph1'}>Nombre</Text>
              </td>
              <td>
                <Text textType={'paragraph1'}>Fecha Inicio</Text>
              </td>
              <td>
                <Text textType={'paragraph1'}>Fecha Fin</Text>
              </td>
              <td>
                <Text textType={'paragraph1'}></Text>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Input
                  inputType={'inputBorder'}
                  disabled
                  type='text'
                  size={'small'}
                  center={true}
                />
              </td>
              <td>
                <Input
                  inputType={'inputBorder'}
                  disabled
                  type='text'
                  size={'medium'}
                />
              </td>
              <td>
                <Input
                  inputType={'inputBorder'}
                  disabled
                  type='text'
                  size={'medium'}
                />
              </td>
              <td>
                <Input
                  inputType={'inputBorder'}
                  disabled
                  type='text'
                  size={'medium'}
                  center={true}
                />
              </td>
              <td>
                <Input
                  inputType={'inputBorder'}
                  disabled
                  type='text'
                  size={'medium'}
                  center={true}
                />
              </td>
              <td>
                <Link to="/admin/jornadas/detalle-jornada">
                  <Image imageType={'xxsImage'} src={Info} alt='información'></Image>
                </Link>
              </td>
            </tr>
          </tbody>
        </TableAdm>
      </ContainerAdm>
    </>
  )
}

export default Jornadas