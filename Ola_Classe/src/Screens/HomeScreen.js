import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../constants';
import { ScrollView, Animated, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/menu';
import Animation from '../components/animation';


const HomeScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
            <View style={{ justifyContent: 'flex-start'}}>
        <Image source={assets.LogoOlaClasse} style={{
          width: 230,
          height: 230,
          borderRadius: 10,
          marginTop: 15,
          marginRight: 10
        }}>
        </Image>
        
        <TouchableOpacity>
          <Text style={{
            color: 'white',
            marginLeft: 20,
            marginTop: -55,
            fontSize: 15
          }}>Menu</Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 10,  padding: 15, height: '66%' }}>
          {Menu("Menu")}
        </View>  

       <Animation/>

       <Menu/>
       
      </View>
    </SafeAreaView>
  );
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

export default HomeScreen