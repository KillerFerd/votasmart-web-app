import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Styles';

const textTypes = [
  {
    textType: 'title',
    component: styles.Title,
  },
  {
    textType: 'subTitle',
    component: styles.SubTitle,
  },
  {
    textType: 'paragraph1',
    component: styles.Paragraph1,
  },
  {
    textType: 'paragraph2',
    component: styles.Paragraph2,
  }
];

const Text = ({ textType, ...props }) => {
  const selectedTextType = textTypes.find((type) => type.textType === textType);

  if (!selectedTextType) {
    return null; // Maneja otros valores de tipo si es necesario
  }

  const StyledText = selectedTextType.component;

  return <StyledText textType={textType} {...props}></StyledText>;
};

Text.propTypes = {
  textType: PropTypes.oneOf(['title', 'subTitle', 'paragraph1', 'paragraph2']).isRequired
};

export default Text;
