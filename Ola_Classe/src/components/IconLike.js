import React, { useRef } from 'react';
import { assets } from '../../constants'
import { View, TouchableOpacity, Text } from 'react-native';
import LottieView from 'lottie-react-native'

export default function iconLike() {
    const lottieRef = useRef(null);
    return(
    <View style={{top: 1}}>
        <TouchableOpacity
            onPress={() => {
               lottieRef.current.play()
               setTimeout(() => {
               lottieRef.current.pause()
           }, 1700)
         }}
        >
          <LottieView 
            style={{ width: 70, height: 70 }}
            source={assets.likeAnimation}
            ref={lottieRef}
          />
  
        </TouchableOpacity>
      </View>
    );
  }
  