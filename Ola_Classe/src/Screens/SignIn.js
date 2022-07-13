import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { CustomInput, CustomInputDate} from '../components/CustomInput';
import { CircleButton, ButtonCreateAccount } from '../components/Button';
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../constants'
import { eye } from '../../assets/icons/eye.png'
import { Touchable } from 'react-native';

const SignIn = (props) => {
  return (
    <View>
    <View style={{ right: 315, marginTop: 60 ,transform: [{ rotate: "180deg"}]}}>
    <CircleButton 
    imgUrl = {assets.next}
    onPress={() => props.navigation.navigate("Registry")}
    />
  </View>
  <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
        <Text 
          style={{
          fontSize: SIZES.extraLarge + 8,
          fontWeight: '700',
          }}>
            Olá  novamente!
        </Text>
    <Text    
          style={{
          fontSize: SIZES.extraLarge + 2,
          marginTop: -13,
          alignItems: 'center', 
          justifyContent: 'center',
          }}>Bem vindo de volta, você </Text>
          <View>
          <Text
            style={{
            fontSize: SIZES.extraLarge + 2,
            alignItems: 'center', 
            justifyContent: 'center',
            marginTop: -8
            }}>
            fez falta!
            </Text>
            </View>
    </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
      <Text style={{marginRight: 300, fontWeight: '600'}}>Email</Text>
     <CustomInput
     />
     </View>
     <View style={{alignItems: 'center', marginTop: 10}}>
      <Text style={{marginRight: 300, fontWeight: '600'}}>Senha</Text>
     <CustomInput
     />
     <View style={{ marginRight: 215}}>
     <Text style={{ color: '#0A58EE'}}>Esqueceu a senha?</Text>
     </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <ButtonCreateAccount />
      </View>
      <View style={{height: 50}}>
        <TouchableOpacity  onPress={() => props.navigation.navigate("SignUp")}>
          <View style={{marginTop: 10, marginLeft: 25}}>
           <Text style={{color: '#A09C9C'}}>
           <Text>Não tem uma conta?</Text>
           <Text style={{color: '#0A58EE'}}>Cadastre-se
            </Text>
        </Text>
      </View>
      </TouchableOpacity>
       
      </View>
    </View>
  )
}

export default SignIn