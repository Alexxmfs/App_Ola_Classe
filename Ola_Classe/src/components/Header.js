import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import {firebase} from '../../firebase';
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../constants'

const handleSignout = async () => {
try {
    await firebase.auth().signOut()
    console.log('Signed out succesfully!')
} catch (error) {
    console.log(error)
    }
}
const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleSignout}>
        <Image 
            style={styles.OlaClasse}
            source={assets.logo} 
          />
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20
    },

    iconsContainer: {
        top: 30,
        flexDirection: 'row'
    },
    logo: {
        top: 20,
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain'
    },
})

export default Header