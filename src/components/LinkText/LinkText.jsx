import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Styles';

const linkTextTypes = [
  {
    type: 'black',
    component: styles.BlackLinkText,
  },
  {
    type: 'white',
    component: styles.WhiteLinkText,
  },
];

const LinkText = ({ vinculoType: linkTextType, selected, children, ...props }) => {
  const selectedLinkTextType = linkTextTypes.find((type) => type.type === linkTextType);

  if (!selectedLinkTextType) {
    return null; // Maneja otros valores de tipo si es necesario
  }

  const StyledLinkText = selectedLinkTextType.component;

  return <StyledLinkText selected={selected} {...props}>{children}</StyledLinkText>;
};

LinkText.propTypes = {
  linkTextType: PropTypes.oneOf(['black', 'white']).isRequired,
  selected: PropTypes.bool, // Propiedad "selected" para controlar el color de fondo
  children: PropTypes.node.isRequired,
};

export default LinkText;
