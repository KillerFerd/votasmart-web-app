import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Styles';

const imageTypes = {
  xxsImage: styles.XxsImage,
  xsImage: styles.XsImage,
  sImage: styles.SImage,
  mImage: styles.MImage,
  mLogo: styles.MLogo,
  mProfile: styles.MProfile,
  lProfile: styles.LProfile
};

const Image = ({ imageType, ...props }) => {
  const StyledImage = imageTypes[imageType];

  if (!StyledImage) {
    return null; // Maneja otros valores de tipo si es necesario
  }

  return <StyledImage {...props} />;
};

Image.propTypes = {
  imageType: PropTypes.oneOf(['xxsImage', 'xsImage', 'sImage', 'mImage', 'mLogo', 'mProfile', 'lProfile']).isRequired
};

export default Image;
