import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native'
import { firebase } from '../../../firebase';
import React, { useState } from 'react'

import { Formik } from 'formik';
import * as Yup from 'yup'
import  Validator  from 'email-validator';
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../../constants'


const LoginForm = ({navigation}) => {
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string()
        .required()
        .min(8, 'Your password has to have at least 8 characters')
    })

    const onLogin = async (email, password) => {
        try { 
            await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log("🔥 Firebase login Successful ✅", email, password)
        } catch(error) {
            Alert.alert(
                'Algo de errado aconteceu ❌',
                error.message + '\n\n... What would you like to do next 🧙‍♂️'
                [
                    {
                        text: 'Ok',
                        onPress: () => console.log('OK'),
                        style: 'cancel'
                    },
                    { text: 'Sign Up', onPress: () => navigation.push('SignupScreen') }
                ]
                )
        }
    }

  return (
    <View style={styles.wrapper}>

        <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => {
            onLogin(values.email, values.password)
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
        >
            {({ handleChange, handleBlur, handleSubmit, values, isValid }) => 
            (
        <>
        <View style={styles.textCenter}>
        <Text style={{fontSize: SIZES.extraLarge + 5, fontFamily: FONTS.bold}}>Olá Novamente!</Text>
        <View>
            <Text style={{fontSize: SIZES.extraLarge + 5}}>Bem vindo de volta, você</Text>
        </View>
        <View>
            <Text style={{fontSize: SIZES.extraLarge + 5}}>fez falta!</Text>
        </View>
        </View>
        <View 
        style={[
            styles.inputField,
            {
             borderColor: values.email.length < 1 || Validator.validate(values.email)
              ? '#ccc' 
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
             1 > values.password.length || values.password.length >= 6 
              ? '#ccc' 
              : 'red'
            },
         ]}
        >
        <TextInput
        placeholderTextColor="#444"
        placeholder="Senha"
        autoCapitalize='none'
        autoCorrect={false}
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
            disabled={!isValid}
            >
            <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>

        <View style={styles.signupContainer}>
            <Text style={{marginTop: 30, marginLeft: 10}}>Não tem uma conta? </Text>
            <TouchableOpacity onPress={() => navigation.push('SignUpScreen')}>
                <Text style={{ color: '#6BB0F5', marginLeft: 148, marginTop: -20}}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
        </>
            )}
        </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
    },
    inputField: {
    top: -65,
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
      marginTop: -45,
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
    },
    textCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        top: -120,
    }
    })
    

export default LoginForm