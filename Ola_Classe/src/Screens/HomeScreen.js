import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../constants';
import { ScrollView, FlatList, Animated, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Button } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { NavBarHome } from '../components/Navbar';
import { IconLike, IconWarning, IconSave, IconComment }   from '../components/IconsCard';

import { firebase, db } from '../../firebase';


const HomeScreen = ({navigation, item}) => {

  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const handleSignout = async () => {
    try {
        await firebase.auth().signOut()
        console.log('Signed out succesfully!')
    } catch (error) {
        console.log(error)
        }
    }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: 'flex-start'}}>
        <Image source={assets.LogoOlaClasse} style={{
          width: 230,
          height: 200,
          borderRadius: 10,
          marginTop: 15,
          marginRight: 10,
          top: 20
        }}></Image>

        <TouchableOpacity>
          <Text style={{
            color: 'white',
            marginLeft: 20,
            marginTop: -55,
            fontSize: 15
          }}>Menu</Text>
        </TouchableOpacity>

          <View style={{top: 340, marginLeft: 20}}>
              <Image 
                style={{width: 60, height: 60, borderRadius: 50}}
                source={assets.ImgProfileMenu}
              />
          </View>
          
        <View style={{ flexGrow: 1, marginTop: 10,  padding: 15, height: '66%' }}>

          {Menu("Menu")}


              <TouchableOpacity 
                 onPress={handleSignout}
                 >
              <View style={{
                flexDirection: "row",
                alignItems: 'center',
                paddingVertical: 8,
                paddingLeft: 13,
                paddingRight: 35,
                borderRadius: 8,
                marginTop: -120,
                backgroundColor: '#98C2FF'
              }}>
                
                <Image source={assets.iconLogout} style={{
                  width: 35, height: 35,
                }}></Image>

                <Text style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  paddingLeft: 15,
                }}>Sair</Text>
              </View>
              </TouchableOpacity>
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
         paddingVertical: 10,
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
          <View style={{width: '100%', height:'85%', alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
            <ScrollView style={{width: '100%' , height: '80%'}}>

          
    <View style={styles.center}>
        <View style={[styles.card, styles.elevation, styles.center]}>
          <View style={styles.center}>
            <View style={{flexDirection: 'row', paddingBottom: 8, marginRight: 220}}>
              <Image 
              style={{width: 40, height: 40, marginRight: 235, marginTop: -8}}
              source={assets.imgAsh}
              />
               <Text style={{marginLeft: -225, fontWeight: '600', fontSize: 16}}>Ash</Text>
               </View>
              <Image 
                source={assets.postMeme}
                style={{width: 300, height: 175, borderRadius: 10}}
                 />
            </View>
            <View style={{flexDirection: 'row', marginRight: 240, marginTop: -49}}>
                    <IconLike />
                    <IconWarning />
                    <IconSave />
                    <IconComment />

                    </View>
               </View>
          </View>

    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
        <View style={[styles.card, styles.elevation, styles.center]}>
          <View style={styles.center}>
            <View style={{flexDirection: 'row', paddingBottom: 2, paddingTop: 5, marginRight: 130}}>
              <Image 
              style={{width: 40, height: 40, marginRight: 235, marginTop: -8}}
              source={assets.ImgCursoEmVideo}
              />
               <Text style={{marginLeft: -225, fontWeight: '600', fontSize: 16}}>Curso em Video</Text>
               </View>

               <TouchableOpacity
                    onPress={() => navigation.navigate("OpenVideoGuanabara")}
                  >
                   <Image 
                    source={assets.TumbnailGuanabara}
                    style={{width: 300, height: 175, borderRadius: 10}}
                    />
                  </TouchableOpacity>  
                     <View style={{paddingTop: 5}}>
                       <Text
                        style={{
                          fontWeight: '700',
                          fontSize: 16
                        }}>
                             Curso Pyhton #01 - Seja Programador
                        </Text>
                     </View>
            </View>

            <View style={{flexDirection: 'row', paddingTop: 10, marginRight: 240, marginTop: -49}}>
                    <IconLike />
                    <IconWarning />
                    <IconSave />
                    <IconComment />
                    </View>
          </View>
          </View>

    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
        <View style={[styles.card, styles.elevation, styles.center]}>
          <View style={styles.center}>
            <View style={{flexDirection: 'row', paddingBottom: 8, marginRight: 110}}>
              <Image 
              style={{width: 40, height: 40, marginRight: 235, marginTop: -8, borderRadius: 50}}
              source={assets.imgDechamps}
              />
               <Text style={{marginLeft: -225, fontWeight: '600', fontSize: 16}}>Filipe Deschamps</Text>
               </View>

               <TouchableOpacity
                    onPress={() => navigation.navigate("OpenVideoDechamps")}
                  >
                   <Image 
                    source={assets.tumbnailDechamps}
                    style={{width: 300, height: 175, borderRadius: 10}}
                    />
                  </TouchableOpacity>  
            </View>
            <View style={{flexDirection: 'row', marginRight: 240, marginTop: -49}}>
                    <IconLike />
                    <IconWarning />
                    <IconSave />
                    <IconComment />
                  </View>
              </View>
          </View>

    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
        <View style={[styles.card, styles.elevation, styles.center]}>
          <View style={styles.center}>
            <View style={{flexDirection: 'row', paddingBottom: 8, marginRight: 185}}>
              <Image 
              style={{width: 40, height: 40, marginRight: 235, marginTop: -8}}
              source={assets.imgJordan}
              />
               <Text style={{marginLeft: -225, fontWeight: '600', fontSize: 16}}>Jordan</Text>
               </View>
                   <Image 
                    source={assets.memeCebola}
                    style={{width: 300, height: 175, borderRadius: 10}}
                    />
            </View>
            <View style={{flexDirection: 'row', marginRight: 240, marginTop: -49}}>
                    <IconLike />
                    <IconWarning />
                    <IconSave />
                    <IconComment />
                  </View>
              </View>
          </View>
            

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
  const [data, setData] = useState([]);

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

    <FlatList 
            data={data}
            keyExtractor={(item) => item.username}
            renderItem={({item}) =>{
              return (
                <View style={{marginLeft: 80, marginTop: -190}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("profileScreen")}
                  >
                     <Text
                      style={{
                        fontSize: 16,
                        paddingVertical: 140,
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
  heading: {
    paddingTop: 5,
    fontSize: 17,
    fontWeight: '600',
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '95%',
    marginVertical: 5,
  },

  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 290
  }
});

export default HomeScreen