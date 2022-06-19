import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../constants'
import { CircleButton } from '../components/Button'

const FirstIntroduction = (props) => {
  return (
    <SafeAreaView>
    <View style={{ width: "100%", alignItems: 'center', justifyContent: 'center' }}>
    <Image 
    source={assets.Line}
    style={{ top: 312, width: "100%"}}
    />
    <Image
    source={assets.easyAccess}
    style={{ width: 270, height: 290, top: 30 }}
    />

    <Text style={{
    fontFamily: FONTS.bold, 
    fontSize: SIZES.large,
    top: 45
    }}>
    Fácil Acesso
    </Text>

    <Text style={{
    fontFamily: FONTS.regular, 
    fontSize: SIZES.font,
    paddingTop: 65
    }}>
    Aprenda facilmente com Olá Classe!, você pode acessar muitos cursos e mentores.
    </Text>
    <View style={{ left: 135, paddingTop: 70}}>
    <CircleButton 
    style = {{ right: 150}}
    imgUrl = {assets.next}
    onPress={() => props.navigation.navigate("SecondIntroduction")}
    />
        </View>
    </View>
    </SafeAreaView>
  )
}

export default FirstIntroduction