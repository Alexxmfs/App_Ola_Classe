import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../constants';
import { ScrollView, Animated, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import React, { useRef, useState } from 'react';
import Header from '../components/Header';



const Animation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return(
   
    <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0,
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>
        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          <TouchableOpacity onPress={() => {
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>

            <Image source={showMenu ? assets.close : assets.menu} style={{
              width: 20,
              height: 20,
              tintColor: 'black',
              marginTop: 40,

            }}></Image>
          </TouchableOpacity>
          <View style={styles.HeaderOlaClasse}>
            <Header /> 
            </View>
          <View style={{width: '100%', height:'85%', alignItems: 'center', justifyContent: 'center'}}>
            <ScrollView style={{width: '100%' , height: '50%'}}>
            </ScrollView>
          </View>
            

        </Animated.View>

      </Animated.View>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#98C2FF',
      // alignItems: 'flex-start',
      // justifyContent: 'flex-start',
    },
    containerSafeArea: {
      flex: 1,
      backgroundColor: '#FFF'
    },
    HeaderOlaClasse: {
      marginTop: -69,
      marginLeft: 12
    },
  });

export default Animation;