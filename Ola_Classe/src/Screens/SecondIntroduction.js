import { View, SafeAreaView, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../constants'
import { CircleButton } from '../components/Button';

const SecondIntroduction = ({}) => {
  return (
  <SafeAreaView>
    <View style={{ width: "100%", alignItems: 'center', justifyContent: 'center' }}>
      <Image 
      source={assets.onlineSchool}
      resizeMode= "cover"
      style={{top: 30, width: 375, height: 410}}
      />
      <Text style={{
        fontFamily: FONTS.bold, 
        fontSize: SIZES.large,
        top: 50
      }}>
        Escola Online
      </Text>

      <Text style={{
        fontFamily: FONTS.regular, 
        fontSize: SIZES.font,
        paddingTop: 65
    }}>
      Qualquer lugar, qualquer hora. Comece a aprender hoje!
    </Text>

    <View style={{ left: 135, paddingTop: 140}}>
    <CircleButton 
    style = {{right: 145}}
    imgUrl = {assets.next}
    onPress={() => props.navigation.navigate("")}
    />
        </View>
    </View>
  </SafeAreaView>
    )
}

export default SecondIntroduction