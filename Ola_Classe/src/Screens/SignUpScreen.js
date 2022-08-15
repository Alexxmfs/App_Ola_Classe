import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import SignupForm from '../components/signupScreen/SignForm';
import { SIZES, assets } from '../../constants';
import { CircleButton } from '../components/Button';
import LottieView from 'lottie-react-native';


const SignupScreen = ({navigation}) => (
<View style={styles.container}>
    <ScrollView>
    <View style={styles.circleButton}>
        <CircleButton 
         imgUrl = {assets.next}
         onPress={() => navigation.navigate("StudentOrTeacher")}
        />
     </View>
        <View>
            <View style={{ marginBottom: -10, marginLeft: 20}}>
            <Text style={styles.text}>Criar</Text>
            </View>
            <View style={{ marginLeft: 20}}>
                <Text style={styles.text}>Conta</Text>
            </View>
        </View>
        <View style={styles.logoContainer}>
            <LottieView 
            source={assets.animationSignUp}
            autoPlay={true}
            Loop={false}
            style={{width: 350, height: 350, marginTop: -45}}
            />
        </View>
        <SignupForm navigation={navigation}/>
        </ScrollView>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
        marginTop: -20
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
        justifyContent: 'center',
    },
    text: {
        fontSize: SIZES.extraLarge + 15,
        fontWeight: '700'
    },
    circleButton: {
        marginTop: 20,
        right: 310,
        transform: [{ rotate: "180deg"}]
    }
})

export default SignupScreen