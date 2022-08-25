import React, { useRef } from 'react';
import { assets } from '../../constants'
import { View, TouchableOpacity, Text, Image } from 'react-native';
import LottieView from 'lottie-react-native'

export const IconLike = () => {
    const lottieRef = useRef(null);
    return(
    <View style={{left: 35}}>
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

export const IconWarning = () => {
    return(
    <View style={{top: 25, left: 250}}>
        <TouchableOpacity>
          <Image  
            style={{ width: 20, height: 20 }}
            source={assets.iconDenunciation}
          />
  
        </TouchableOpacity>
      </View>
    );
  }
  
export const IconSave = () => {
    return(
    <View style={{top: 23, left: 185}}>
        <TouchableOpacity>
          <Image  
            style={{ width: 25, height: 25 }}
            source={assets.IconSave}
          />
        </TouchableOpacity>
      </View>
    );
  }
  
export const IconComment = () => {
    return(
    <View style={{top: 23, left: 118}}>
        <TouchableOpacity>
          <Image  
            style={{ width: 25, height: 25 }}
            source={assets.IconComment}
          />
        </TouchableOpacity>
      </View>
    );
  }
  