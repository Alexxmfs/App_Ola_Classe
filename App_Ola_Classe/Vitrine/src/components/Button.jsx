import React from 'react'

import styles from '../styles/Global';

const Button = ({ assetUrl, Link }) => {
  return (
    <div className={styles.btnBlack}
          onClick={() => window.open('https://expo.dev/accounts/zprinted/projects/Ola_Classe/builds/71548221-c5dd-4def-a2d5-5031ffe57734', "_blank")}>
      <img src={assetUrl} alt="expo_icon" 
      className={styles.btnIcon} />
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-normal text-xs`}>Veja em</p>
        <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
      </div>
    </div>
  )
}

export default Button