import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Styles';

const imageTypes = [
  {
    imageType: 'xxsImage',
    component: styles.XxsImage,
  },
  {
    imageType: 'xsImage',
    component: styles.XsImage,
  },
  {
    imageType: 'sImage',
    component: styles.SImage,
  },
  {
    imageType: 'mImage',
    component: styles.MImage,
  },
  {
    imageType: 'mLogo',
    component: styles.MLogo,
  },
  {
    imageType: 'mProfile',
    component: styles.MProfile,
  },
  {
    imageType: 'lProfile',
    component: styles.LProfile,
  } 
];

const Image = ({ imageType, ...props }) => {
  const selectedImageType = imageTypes.find((type) => type.imageType === imageType);

  if (!selectedImageType) {
    return null; // Maneja otros valores de tipo si es necesario
  }

  const StyledImage = selectedImageType.component;

  return <StyledImage imageType={imageType} {...props}></StyledImage>;
};

Image.propTypes = {
  imageType: PropTypes.oneOf(['xxsImage', 'xsImage', 'sImage', 'mImage', 'mLogo', 'mProfile', 'lProfile']).isRequired
};

export default Image;
