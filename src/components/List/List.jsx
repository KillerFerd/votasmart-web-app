import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Styles';

const List = ({ size, center, children, ...props }) => {
  return <styles.List size={size} center={center} {...props}>{children}</styles.List>;
};

List.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'small', 'xsmall']).isRequired,
  center: PropTypes.bool,
  children: PropTypes.node,
};

export default List;
