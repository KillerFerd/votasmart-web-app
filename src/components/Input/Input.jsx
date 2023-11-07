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

const Input = ({ inputType, selected, children, size, center, ...props }) => {
  const selectedInputType = inputTypes.find((type) => type.type === inputType);

  if (!selectedInputType) {
    return null; // Maneja otros valores de tipo si es necesario
  }

  const StyledInput = selectedInputType.component;

  return <StyledInput selected={selected} size={size} center={center} {...props}></StyledInput>;
};

Input.propTypes = {
  inputType: PropTypes.oneOf(['inputBorder', 'inputTrans']).isRequired,
  size: PropTypes.oneOf(['large', 'medium', 'small']).isRequired,
  center: PropTypes.bool,
};

export default Input;