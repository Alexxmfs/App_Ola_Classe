import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../constants'
import { CircleButton } from '../components/Button'

const FirstIntroduction = (props) => {
  return (
    <View style={{ flex: 1, width: "100%", alignItems: 'center', justifyContent: 'center' }}>

    <Image
    source={assets.easyAccess}
    style={{ width: 390, height: 290 }}
    />

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
   <Text style={{
    fontFamily: FONTS.bold, 
    fontSize: SIZES.large,
    }}>
    Fácil Acesso
    </Text>

    <Text style={{
    fontFamily: FONTS.regular, 
    fontSize: SIZES.font,
    }}>
    Aprenda facilmente com Olá Classe!, você pode acessar muitos cursos e mentores.
    </Text>
    </View>
    
    <View style={{ flex: 1, left: 140 }}>
 
    <CircleButton 
    imgUrl = {assets.next}
    onPress={() => props.navigation.navigate("SecondIntroduction")}
    />
        </View>
    </View>
  )
}

export default FirstIntroduction