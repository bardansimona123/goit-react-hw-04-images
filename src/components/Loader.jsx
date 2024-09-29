import React from 'react';
import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loader}>
    <Oval color="#00BFFF" height={50} width={50} />
  </div>
);

export default Loader;
