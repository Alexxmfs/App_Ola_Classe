import React from 'react'
import { CircleButton, ButtonFriends, DeleteButton } from '../components/Button';
import { SIZES, assets } from '../../constants';
import { View, Text, StyleSheet, Image } from 'react-native'


const FriendsMenu = ({navigation}) => {
  return (
    <View>
        <View style={styles.circleButton}>
             <CircleButton 
                imgUrl = {assets.next}
                onPress={() => navigation.navigate("HomeScreen")}
        />
     </View>

        <View style={{marginLeft: 80, marginTop: 8}}>
            <Text    
                style={{
                    fontSize: SIZES.medium + 4,
                    fontWeight: '600',
                    marginTop: -50
                    }}>
                        Amigos
            </Text>
       </View>

        <View 
            style={{
                 flexDirection: 'column',
                 paddingLeft: 15,
                 marginTop: 15}}>
            <Image 
                style={{
                    width: 70,
                    height: 70
                }}
                source={assets.imgAsh}
            />
                <Text
                 style={{
                    marginLeft: 90,
                    fontSize: SIZES.medium + 4,
                    fontWeight: '700',
                    marginTop: -70
                    }}>
                        Ash Pereira
                </Text>

                <View style={{paddingTop: 8, marginRight: 100}}>
                <ButtonFriends
                />
                </View>

                <View style={{marginLeft: 140, marginTop: -32}}>
                <DeleteButton
                />
                </View>
        </View>


        <View 
            style={{
                 flexDirection: 'column',
                 paddingLeft: 15,
                 marginTop: 15}}>
            <Image 
                style={{
                    width: 70,
                    height: 70
                }}
                source={assets.imgJordan}
            />
                <Text
                 style={{
                    marginLeft: 90,
                    fontSize: SIZES.medium + 4,
                    fontWeight: '700',
                    marginTop: -70
                    }}>
                        Jordan Bernado
                </Text>

                <View style={{paddingTop: 8, marginRight: 100}}>
                <ButtonFriends
                />
                </View>

                <View style={{marginLeft: 140, marginTop: -32}}>
                <DeleteButton
                />
                </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    circleButton: {
        marginTop: 40,
        right: 330,
        transform: [{ rotate: "180deg"}]
    }
})

export default FriendsMenu