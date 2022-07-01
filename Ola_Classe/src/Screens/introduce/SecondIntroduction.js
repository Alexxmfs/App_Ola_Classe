import { View, SafeAreaView, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../../constants'
import { CircleButton } from '../../components/Button';

const SecondIntroduction = (props) => {
  return (
  <SafeAreaView>
    <View style={{ width: "100%", alignItems: 'center', justifyContent: 'center' }}>
      <Image 
      source={assets.onlineSchool}
      resizeMode= "cover"
      style={{marginTop: 30, width: 375, height: 405}}
      />
      <Text style={{
        fontFamily: FONTS.bold, 
        fontSize: SIZES.large,
        marginTop: 10
      }}>
        Escola Online
      </Text>
      
      <Text style={{
        fontFamily: FONTS.regular, 
        fontSize: SIZES.medium,
        paddingTop: 15
    }}>
      Qualquer lugar, qualquer hora. Comece a aprender hoje!
    </Text>

    <View style={{ left: 135, marginTop: 90}}>
    <CircleButton 
    style = {{right: 145}}
    imgUrl = {assets.next}
    onPress={() => props.navigation.navigate("ThirdIntroduction")}
    />
        </View>
    </View>
  </SafeAreaView>
    )
}

export default SecondIntroduction