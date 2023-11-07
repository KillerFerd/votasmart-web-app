import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Styles';

const textTypes = {
  title: styles.Title,
  subTitle: styles.SubTitle,
  paragraph1: styles.Paragraph1,
  paragraph2: styles.Paragraph2
};

const Text = ({ textType, ...props }) => {
  const StyledText = textTypes[textType];

  if (!StyledText) {
    return null; // Maneja otros valores de tipo si es necesario
  }

  return <StyledText {...props} />;
};

Text.propTypes = {
  textType: PropTypes.oneOf(['title', 'subTitle', 'paragraph1', 'paragraph2']).isRequired
};

export default Text;
