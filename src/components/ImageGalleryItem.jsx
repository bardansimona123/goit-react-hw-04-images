import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ smallImage, largeImage, onImageClick }) => (
  <li className={styles['gallery-item']} onClick={() => onImageClick(largeImage)}>
    <img src={smallImage} alt="" className={styles['gallery-image']} />
  </li>
);

export default ImageGalleryItem;
