import React from 'react'
import * as Styles from  './Styles'

const TableAdm = (props) => {
  return (
    <>
        <Styles.Table>
            {props.children}
        </Styles.Table>
    </>
  )
}

export default TableAdm