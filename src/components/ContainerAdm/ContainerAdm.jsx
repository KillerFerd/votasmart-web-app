import React from 'react';
import * as Styles from './Styles';

const ContainerAdm = (props) => {

  return (
    <>
      <Styles.Container>
        {props.children}
      </Styles.Container>
    </>
  );
}; 

export default ContainerAdm;