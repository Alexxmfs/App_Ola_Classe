import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../constants';
import { CircleButton, ButtonWhite, ButtonBlue} from '../components/Button';

const Registry = (props) => {
  return (
    <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center' }}>

    <Image
    source={assets.register}
    style={{ width: 350, height: 350, marginLeft: 12 }}
    />

    <View style={{ paddingTop: 20, alignItems: 'center', justifyContent: 'center'}}>
   <Text style={{
    fontFamily: FONTS.bold, 
    fontSize: SIZES.large,
    }}>
    Estude Gratuitamente 
    </Text>

    <Text style={{
    paddingTop: 20,
    fontFamily: FONTS.regular, 
    fontSize: SIZES.medium,
    }}>
    Faça o login ou cadastre-se para salvar seu progresso enquanto você estuda no Olá Classe!
    </Text>
    </View>


    <View>
    
    <View style={{marginTop: 60, top: 52, marginRight: 10}}>
    <ButtonBlue 
    onPress={() => props.navigation.navigate("SignUp")}
    />
</View>

    <View style={{marginLeft: 112, top: 2}}>
    <ButtonWhite 
 
    onPress={() => props.navigation.navigate("SignIn")}
    />
  </View>



        </View>
    </View>
  )
}

export default Registry