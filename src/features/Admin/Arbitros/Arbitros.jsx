import React from 'react'
import ContainerAdm from '../../../components/ContainerAdm/ContainerAdm'
import Text from '../../../components/Text/Text'
import Button from '../../../components/Button/Button'
import TableAdm from '../../../components/TableAdm/TableAdm'
import Input from '../../../components/Input/Input'
import { Link } from 'react-router-dom'
import Image from '../../../components/Image/Image'
import Info from '../../../assets/info.png'

const Arbitros = () => {
  return (
    <>
      <ContainerAdm>
        <Text textType={'title'}>ARBITROS</Text>
        <Link to={'/admin/arbitros/agregar-arbitro-nuevo'}>
          <Button size={'medium'}>Agregar Árbitro</Button>
        </Link>
        <TableAdm>
          <thead>
            <tr>
              <td><Text textType={'paragraph1'}>No.</Text></td>
              <td><Text textType={'paragraph1'}>Árbitro</Text></td>
              <td><Text textType={'paragraph1'}>Puesto</Text></td>
              <td><Text textType={'paragraph1'}>Número</Text></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Input inputType={'inputBorder'} size={'xsmall'} disabled type='text' center={true} /></td>
              <td><Input inputType={'inputBorder'} size={'large'} disabled type='text' /></td>
              <td><Input inputType={'inputBorder'} size={'medium'} disabled type='text' /></td>
              <td><Input inputType={'inputBorder'} size={'small'} disabled type='text' /></td>
              <td><Link to='/admin/arbitros/detalle-arbitro'><Image imageType={'xxsImage'} src={Info} alt='información' /></Link></td>
            </tr>
          </tbody>
        </TableAdm>
      </ContainerAdm>
    </>
  )
}

export default Arbitros