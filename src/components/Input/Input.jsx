import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Styles';

const inputTypes = [
  {
    type: 'inputBorder',
    component: styles.InputBorder,
  },
  {
    type: 'inputTrans',
    component: styles.InputTrans,
  },
];

const Input = ({ inputType, size, center, ...props }) => {
  const selectedInputType = inputTypes.find((type) => type.type === inputType);

  if (!selectedInputType) {
    return null; // Maneja otros valores de tipo si es necesario
  }

  const StyledInput = selectedInputType.component;

  const inputProps = {
    size,
    ...props,
  };

  if (center) {
    inputProps.style = { textAlign: 'center' };
  }

  return <StyledInput {...inputProps}></StyledInput>;
};

Input.propTypes = {
  inputType: PropTypes.oneOf(['inputBorder', 'inputTrans']).isRequired,
  size: PropTypes.oneOf(['large', 'medium', 'small', 'xsmall']).isRequired,
  center: PropTypes.bool,
};

export default Input;
