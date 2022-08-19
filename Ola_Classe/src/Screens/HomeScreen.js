import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../constants';
import { ScrollView, FlatList, Animated, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Button } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { NavBarHome } from '../components/Navbar';

import { firebase, db } from '../../firebase';

const HomeScreen = ({navigation, item}) => {
  const [data, setData] = useState([]);

  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

    const getUsers = () => {
      db.collection('users')
      .get()
      .then((querySnapshot) => {
        let d = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.owner_uid, '=>', doc.data());
          const user = {
            owner_uid: doc.owner_uid,
            username: doc.data().username,
            email: doc.data().email,
          };
          d.push(user);
        });
        // console.log(d);
        setData(d);
      })
      .catch(() => {
        console.log('erroooooooooooooo!!!')
      });

    };
  
    useEffect(() => {
      getUsers()
  }, [])

  
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

          <View style={{top: 370, marginLeft: 20}}>
              <Image 
                style={{width: 60, height: 60, borderRadius: 50}}
                source={assets.ImgProfileMenu}
              />
          </View>

        <View style={{ flexGrow: 1, marginTop: 10,  padding: 15, height: '66%' }}>

          {Menu("Menu")}

          <FlatList 
            data={data}
            keyExtractor={(item) => item.username}
            renderItem={({item}) =>{
              return (
                <View style={{marginLeft: 80, marginTop: 10}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("profileScreen")}
                  >
                     <Text
                      style={{
                        fontSize: 16,
                         fontWeight: '600'
                         }}>
                          {item.username}
                      </Text>
                  </TouchableOpacity>
                </View>
              )
            }}
            />
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

            <View style={{marginTop: -25}}>
            <NavBarHome />

            </View>

            </View>
          <View style={{width: '100%', height:'82%', alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
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
    <View style={{top: -50}}>
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
      marginTop: -42
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
<View>
</View>
  </View>
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