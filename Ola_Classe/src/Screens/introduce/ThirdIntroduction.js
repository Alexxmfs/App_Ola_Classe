import { View, SafeAreaView, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../../constants'
import { CircleButton } from '../../components/Button';

const ThirdIntroduction = (props) => {
  return (
    <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center', paddingTop: 50 }}>

    <Image
    source={assets.findCourse}
    style={{ width: 390, height: 340 }}
    />

    <View style={{ paddingTop: 20, alignItems: 'center', justifyContent: 'center'}}>
   <Text style={{
    fontFamily: FONTS.bold, 
    fontSize: SIZES.large,
    }}>
    Pronto para encontrar um curso?
    </Text>

    <View style={{ width: '95%'}}>
    <Text style={{
    paddingTop: 20,
    fontFamily: FONTS.regular, 
    fontSize: SIZES.medium,
    }}>
        Descubra a experiência de aprendizagem online.
    </Text>
        </View>
    </View>
    
    <View style={{ flex: 1, left: 130, marginTop: 140 }}>
 
    <CircleButton 
    imgUrl = {assets.next}
    onPress={() => props.navigation.navigate("Registry")}
    />
        </View>
    </View>
  )
}

export default ThirdIntroduction