import React from 'react'

import assets from '../assets'
import styles from '../styles/Global';

const FeatureCard = ({ iconUrl, iconText}) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
    </div>
)

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Tecnologias</h1>
          <p  className={`${styles.pText} ${styles.whiteText}`}>Corpo e alma do aplicativo 'Olá, classe!'</p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react} iconText="React Native" />  
          <FeatureCard iconUrl={assets.javascript} iconText="JavaScript" />  
          <FeatureCard iconUrl={assets.firebase} iconText="Firebase" />  
          <FeatureCard iconUrl={assets.ReactNavigate} iconText="React Navigation" />  
          <FeatureCard iconUrl={assets.formik} iconText="Formik" />  
          <FeatureCard iconUrl={assets.expo02} iconText="Expo" />  
          <FeatureCard iconUrl={assets.tailwindcss} iconText="Tailwindcss" />  
        </div>
      </div>
    </div>
  )
}

export default Features
