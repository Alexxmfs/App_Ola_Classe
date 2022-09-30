import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import LoginForm from '../components/loginScreen/LoginForm';
import { CircleButton } from '../components/Button';
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../constants';


const LoginScreen = ({navigation}) => (
    <View style={styles.container}>
        <View style={styles.circleButton}>
        <CircleButton 
         imgUrl = {assets.next}
         onPress={() => navigation.navigate("RegistryScreen")}
        />
     </View>
        <LoginForm navigation={navigation}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
    circleButton: {
        top: -180,
        right: 150,
        transform: [{ rotate: "180deg"}]
    }
})

export default LoginScreen