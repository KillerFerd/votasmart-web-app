import React from 'react';
import * as Styles from './Styles';
import Text from '../Text/Text';
import PropTypes from 'prop-types';

const Alert = ({ textAlert, typeAlert }) => {
  const alertText = {
    E001: 'Error de conexión con base de datos',
    I001: 'No hay datos disponibles',
    I002: 'No hay torneos vigentes, regrese más tarde',
  }[textAlert] || textAlert;

  const backgroundColor = {
    warning: '#FFFCCC', 
    info: '#AFC5C0',   
    error: '#FBCFD0',      
  }[typeAlert] || '#AFC5C0'; 

  return (
    <>
      <Styles.Div style={{ backgroundColor }}>
        <Text textType={'paragraph1'}>{alertText}</Text>
      </Styles.Div>
    </>
  );
};

Alert.propTypes = {
  textAlert: PropTypes.oneOf(['E001', 'I001', 'I002']).isRequired,
  typeAlert: PropTypes.oneOf(['warning', 'info', 'error']).isRequired,
};

export default Alert;
