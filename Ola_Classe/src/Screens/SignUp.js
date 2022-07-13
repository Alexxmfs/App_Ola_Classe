import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { CustomInput, CustomInputDate} from '../components/CustomInput';
import { CircleButton, ButtonCreateAccount } from '../components/Button';
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../constants'
import { eye } from '../../assets/icons/eye.png'

const SignUp = (props) => {
  return (
  <View>
    <ScrollView>
    <View style={{ right: 315, marginTop: 60 ,transform: [{ rotate: "180deg"}]}}>
    <CircleButton 
    imgUrl = {assets.next}
    onPress={() => props.navigation.navigate("Registry")}
    />
  </View>
      <View style={{ marginTop: 10 }}>
        <Text 
          style={{
          fontSize: SIZES.extraLarge + 20,
          fontWeight: '700',
          marginLeft: 35,
          }}>
            Criar
        </Text>
    <Text    
          style={{
          fontSize: SIZES.extraLarge + 20,
          fontWeight: '700',
          marginLeft: 35,
          marginTop: -15
          }}>Conta</Text>
    </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
      <Text style={{marginRight: 240, fontWeight: '600'}}>Nome Completo</Text>
     <CustomInput
     />
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
      <Text style={{marginRight: 300, fontWeight: '600'}}>Email</Text>
     <CustomInput
     />
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
      <Text style={{marginRight: 290, fontWeight: '600'}}>Apelido</Text>
     <CustomInput
     />
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
      <Text style={{marginRight: 300, fontWeight: '600'}}>Senha</Text>
     <CustomInput
     />
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
      <Text style={{marginRight: 240, fontWeight: '600'}}>Confirmar Senha</Text>
     <CustomInput
     />
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
      <Text style={{marginRight: 220, fontWeight: '600'}}>Data de Nascimento</Text>
     <CustomInputDate
     />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <ButtonCreateAccount />
      </View>
      <View style={{height: 50}}>
      <TouchableOpacity  onPress={() => props.navigation.navigate("SignIn")}>
          <View style={{marginTop: 10, marginLeft: 20}}>
           <Text style={{color: '#A09C9C'}}>
           <Text>Já tem uma conta?</Text>
           <Text style={{color: '#0A58EE'}}> Conecte-se
            </Text>
        </Text>
      </View>
      </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  )
}

export default SignUp