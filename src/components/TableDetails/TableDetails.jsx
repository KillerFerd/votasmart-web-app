import React from 'react'
import * as Styles from  './Styles'

const TableDetails = (props) => {
  return (
    <>
        <Styles.Table>
            {props.children}
        </Styles.Table>
    </>
  )
}

export default TableDetails