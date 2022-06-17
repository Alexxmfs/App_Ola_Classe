import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../constants'
import { CircleButton } from '../components/Button'

const FirstIntroduction = (props) => {
  return (
    <View style={{ width: "100%", alignItems: 'center', justifyContent: 'center' }}>
    <Image 
    source={assets.Line}
    style={{ top: 297, width: "100%"}}
    />
    <Image
    source={assets.easyAccess}
    style={{ width: 270, height: 290, top: 15 }}
    />

    <View style={{ alignItems: 'center', justifyContent: 'center', width: 320 }}>
    <Text style={{
    fontFamily: FONTS.bold, 
    fontSize: SIZES.large,
    top: 20
    }}>
    Fácil Acesso
    </Text>

    <Text style={{
    fontFamily: FONTS.regular, 
    fontSize: SIZES.font,
    top: 40
    }}>
    Aprenda facilmente com Olá Classe!, você pode acessar muitos cursos e mentores.
    </Text>
    <View style={{ left: 135, top: 150}}>
    <CircleButton 
    style = {{ right: 150}}
    imgUrl = {assets.next}
    onPress={() => props.navigation.navigate("SecondIntroduction")}
    />
</View>
        </View>
    </View>
  )
}

export default FirstIntroduction