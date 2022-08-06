import React from 'react'
import { 
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
 } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';
import { firebase, db } from '../../../firebase';
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../../constants'



const SignupForm = ({navigation}) => {
  const SignupFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    username: Yup.string().required().min(2, 'A username is required'),
    password: Yup.string()
    .required()
    .min(6, 'Your password has to have at least 6 characters')
  })

  const getRandomProfilePicture = async () => {
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    return data.results[0].picture.large
  }

  const onSignup = async (email, password, username) => {
    try {
     const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
      console.log('🔥 Firebase User Created Successfully ✅', email, password)
    
      db.collection('users')
      .doc(authUser.user.email)
      .set({
        owner_uid: authUser.user.uid,
        username: username,
        email: authUser.user.email,
        profile_picture: await getRandomProfilePicture(),
      })
    } catch(error) {
      Alert.alert('🔥 My Lord...', error.message)
    }
  }

  return (
  <View style={styles.wrapper}>
  <Formik
  initialValues={{email: '', username: '', password: ''}}
  onSubmit={(values) => {
    onSignup(values.email, values.password, values.username)
  }}
  validationSchema={SignupFormSchema}
  validateOnMount={true}
  >
      {({ handleChange, handleBlur, handleSubmit, values, isValid }) => 
      (
  <>
  <View 
  style={[
      styles.inputField,
      {
       borderColor: values.email.length < 1 || Validator.validate(values.email)
        ? '#ACD3FC' 
        : 'red'
      },
   ]}
  >  
    <TextInput
  placeholderTextColor="#444"
  placeholder="Email"
  autoCapitalize='none'
  keyboardType='email-address'
  textContentType='emailAddress'
  autoFocus={true}
  onChangeText={handleChange('email')}
  onBlur={handleBlur('email')}
  value={values.email}
  />
  </View>


  <View    
   style={[
      styles.inputField,
      {
       borderColor: 
       1 > values.username.length || values.username.length >= 6 
        ? '#ACD3FC' 
        : 'red'
      },
   ]}
  >
      <TextInput
      placeholderTextColor="#444"
      placeholder="Username"
      autoCapitalize='none'
      textContentType='username'
      onChangeText={handleChange('username')}
      onBlur={handleBlur('username')}
      value={values.username}
      />
      </View>

  <View    
   style={[
      styles.inputField,
      {
       borderColor: 
       1 > values.password.length || values.password.length >= 6 
        ? '#ACD3FC' 
        : 'red'
      },
   ]}
  >
  <TextInput
  placeholderTextColor="#444"
  placeholder="Senha"
  autoCapitalize='none'
  secureTextEntry={true}
  textContentType='password'
  onChangeText={handleChange('password')}
  onBlur={handleBlur('password')}
  value={values.password}
  />
  </View>
  <Pressable 
      titleSize={20}
      style={styles.button(isValid)}
      onPress={handleSubmit}
      >
      <Text style={styles.buttonText}>Criar Conta</Text>
  </Pressable>
  <Text style={{top: 20, marginRight: 160}}>Já tem uma conta? </Text>
  <View style={styles.loginContainer}>
      <TouchableOpacity onPress={() => navigation.push('LoginScreen')}>
          <Text style={{ color: '#6BB0F5', top: -50, marginRight: 45 }}>Conecte-se</Text>
      </TouchableOpacity>
  </View>
  </>
      )}
    </Formik>
  </View>
)}

const styles = StyleSheet.create({
wrapper: {
},
inputField: {
top: -45,
borderRadius: 8,
padding: 8,
height: 50,
backgroundColor: '#DCE8FF',
marginBottom: 10,
borderWidth: 1,
justifyContent: 'center',
borderColor: '#ACD3FC',
},

button: (isValid) => ({
  backgroundColor: isValid ? '#0A58EE': '#9ACAF7',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  width: 370,
  height: 55,
  marginTop: -15,
  padding: SIZES.small,
}),

buttonText: {
  fontWeight: '600',
  color: '#FFF',
  fontSize: 22,
},

loginContainer: {
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'center',
  marginTop: 50,
}
})

export default SignupForm