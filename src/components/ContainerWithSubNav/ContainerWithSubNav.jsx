import React from 'react';
import * as Styles from './Styles';

const ContainerWithSubNav = (props) => {

  return (
    <>
      <Styles.Container>
        {props.children}
      </Styles.Container>
    </>
  );
}; 

export default ContainerWithSubNav;