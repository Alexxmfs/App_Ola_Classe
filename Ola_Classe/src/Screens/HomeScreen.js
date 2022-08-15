import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../constants';
import { ScrollView, Animated, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { NavBarHome } from '../components/Navbar';


const HomeScreen = ({navigation}) => {
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
            <View style={{ justifyContent: 'flex-start'}}>
        <Image source={assets.LogoOlaClasse} style={{
          width: 230,
          height: 230,
          borderRadius: 10,
          marginTop: 15,
          marginRight: 10
        }}></Image>

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
            <Header navigation={navigation} />

            <View style={{marginTop: -20}}>
            <NavBarHome />

            </View>

            </View>
          <View style={{width: '100%', height:'82%', alignItems: 'center', justifyContent: 'center', marginTop: -10}}>
            <ScrollView style={{width: '100%' , height: '60%'}}>



            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>CAAAAATEEEEEGORIAAAA</Text>
            <Text>zzzzzzzzzzzzzzzzzzzzzzzzzz</Text>
            <Text>zzzzzzzzzzzzzzzzzzzzzzzzzz</Text>
            <Text>zzzzzzzzzzzzzzzzzzzzzzzzzz</Text>
            <Text>zzzzzzzzzzzzzzzzzzzzzzzzzz</Text>
              </ScrollView>
            </View>
            

        </Animated.View>

      </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const Menu = () => {
  const navigation = useNavigation(); 
  return (
    <>
  <TouchableOpacity 
  onPress={() => navigation.navigate("FriendsMenu")}
  >
    <View style={{
      flexDirection: "row",
      alignItems: 'center',
      paddingVertical: 3,
      paddingLeft: 13,
      paddingRight: 35,
      borderRadius: 8,
      marginTop: -40
    }}>
      
      <Image source={assets.iconFriends} style={{
        width: 35, height: 35,
      }}></Image>
      
      <Text style={{
        fontSize: 17,
        fontWeight: 'bold',
        paddingLeft: 15,
      }}>Amigos</Text>
      
    </View>
    </TouchableOpacity>

    <TouchableOpacity 
    onPress={() => navigation.navigate("CategoryMenu")}
    >
    <View style={{
      flexDirection: "row",
      alignItems: 'center',
      paddingVertical: 8,
      paddingLeft: 13,
      paddingRight: 35,
      borderRadius: 8,
      marginTop: 15
    }}>
      
      <Image source={assets.iconCategory} style={{
        width: 35, height: 35,
      }}></Image>

      <Text style={{
        fontSize: 17,
        fontWeight: 'bold',
        paddingLeft: 15,
      }}>Categoria</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity 
    onPress={() => navigation.navigate("SavedItemsMenu")}
    >
    <View style={{
      flexDirection: "row",
      alignItems: 'center',
      paddingVertical: 8,
      paddingLeft: 13,
      paddingRight: 35,
      borderRadius: 8,
      marginTop: 15
    }}>
      
      <Image source={assets.iconSaved} style={{
        width: 35, height: 35,
      }}></Image>

      <Text style={{
        fontSize: 17,
        fontWeight: 'bold',
        paddingLeft: 15,
      }}>Itens Salvos</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity 
    onPress={() => navigation.navigate("TermsUseMenu")}
    >
    <View style={{
      flexDirection: "row",
      alignItems: 'center',
      paddingVertical: 8,
      paddingLeft: 13,
      paddingRight: 35,
      borderRadius: 8,
      marginTop: 15
    }}>
      
      <Image source={assets.iconTermsUse} style={{
        width: 35, height: 35,
      }}></Image>

      <Text style={{
        fontSize: 17,
        fontWeight: 'bold',
        paddingLeft: 15,
      }}>Termos de Uso</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity 
    onPress={() => navigation.navigate("ConfigMenu")}
    >
    <View style={{
      flexDirection: "row",
      alignItems: 'center',
      paddingVertical: 8,
      paddingLeft: 13,
      paddingRight: 35,
      borderRadius: 8,
      marginTop: 15
    }}>
      
      <Image source={assets.iconConfig} style={{
        width: 35, height: 35,
      }}></Image>

      <Text style={{
        fontSize: 17,
        fontWeight: 'bold',
        paddingLeft: 15,
      }}>Configuração</Text>
    </View>
    </TouchableOpacity>
  </>
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