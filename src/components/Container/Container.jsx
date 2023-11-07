import React from 'react';
import * as Styles from './Styles';

const Container = (props) => {

  return (
    <>
      <Styles.Container>
        {props.children}
      </Styles.Container>
    </>
  );
}; 

export default Container;