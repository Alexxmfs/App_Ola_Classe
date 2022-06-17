import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, assets, FONTS, SHADOWS, Introduction } from '../../constants'

const FirstIntroduction = () => {
  return (
    <View style={{ width: "100%", height: 373, alignItems: 'center', justifyContent: 'center' }}>
    <Image 
    source={assets.Line}
    style={{ top: 285}}
    />
    <Image
    source={assets.easyAccess}
    style={{ width: 270, height: 290, top: 3 }}
    />

    <View>
    <Text style={{
    fontFamily: FONTS.bold, 
    fontSize: SIZES.large
    }}>
      Fácil Acesso
      </Text>


        </View>
    </View>
  )
}

export default FirstIntroduction