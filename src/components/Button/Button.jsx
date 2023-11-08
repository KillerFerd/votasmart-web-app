import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Styles';

const Button = ({ size, children, ...props }) => {
  return <styles.Button size={size} {...props}>{children}</styles.Button>;
};

Button.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'small', 'xsmall']).isRequired,
  children: PropTypes.node,
};

export default Button;
