/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Acesse o Código</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>O código está disponível no GitHub</p>
        </div>
        <button className={`${styles.btnPrimary}`}
        onClick={() => window.open('https://github.com/Alexxmfs/App_Ola_Classe', "_blank")}>
        Ver o Código</button>
          <div className={styles.flexCenter}>
            <img
             src={assets.telas} 
            />
          </div>
      </div>
    </div>
  )
}

export default Download
