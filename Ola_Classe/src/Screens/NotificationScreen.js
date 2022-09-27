import { assets } from "../../constants";
import {
  FlatList,
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Button,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { NavBarNotification } from "../components/Navbar";

import { ButtonAdicionar, ButtonExcluirAmigo } from "../components/Button";

import { firebase, db } from "../../firebase";

const HomeScreen = ({ navigation, item }) => {
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const handleSignout = async () => {
    try {
      await firebase.auth().signOut();
      console.log("Signed out succesfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "flex-start" }}>
        <Image
          source={assets.LogoOlaClasse}
          style={{
            width: 230,
            height: 200,
            borderRadius: 10,
            marginTop: 15,
            marginRight: 10,
            top: 20,
          }}
        ></Image>

        <TouchableOpacity>
          <Text
            style={{
              color: "white",
              marginLeft: 20,
              marginTop: -55,
              fontSize: 15,
            }}
          >
            Menu
          </Text>
        </TouchableOpacity>

        <View style={{ top: 340, marginLeft: 20 }}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 50 }}
            source={assets.ImgProfileMenu}
          />
        </View>

        <View
          style={{ flexGrow: 1, marginTop: 10, padding: 15, height: "66%" }}
        >
          {Menu("Menu")}

          <TouchableOpacity onPress={handleSignout}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 8,
                paddingLeft: 13,
                paddingRight: 35,
                paddingTop: 20,
                borderRadius: 8,
                marginTop: -120,
                backgroundColor: "#98C2FF",
              }}
            >
              <Image
                source={assets.iconLogout}
                style={{
                  width: 35,
                  height: 35,
                }}
              ></Image>

              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  paddingLeft: 15,
                }}
              >
                Sair
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <Animated.View
          style={{
            flexGrow: 1,
            backgroundColor: "white",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: showMenu ? 15 : 0,
            transform: [{ scale: scaleValue }, { translateX: offsetValue }],
          }}
        >
          <Animated.View
            style={{
              transform: [
                {
                  translateY: closeButtonOffset,
                },
              ],
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 0.88,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                Animated.timing(offsetValue, {
                  toValue: showMenu ? 0 : 230,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                Animated.timing(closeButtonOffset, {
                  toValue: !showMenu ? -30 : 0,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                setShowMenu(!showMenu);
              }}
            >
              <Image
                source={showMenu ? assets.close : assets.menu}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: "black",
                  marginTop: 40,
                }}
              ></Image>
            </TouchableOpacity>
            <View style={styles.HeaderOlaClasse}>
              <Header navigation={navigation} />

              <View style={{ marginTop: -25 }}>
                <NavBarNotification />
              </View>
            </View>

            <View>
              <Text style={styles.textNotification}>Notificações</Text>

              <View style={{ flexDirection: "row" }}>
                <Image source={assets.imgJohnBarros} style={styles.imgJonh} />
                <Text style={styles.textJohn}>John Barros</Text>

                <Text
                  style={{
                    marginLeft: -105,
                    fontSize: 14,
                    color: "gray",
                    marginTop: 32,
                  }}
                >
                  enviou uma solicitação de amizade
                </Text>

                <ButtonAdicionar />
                <ButtonExcluirAmigo />

              </View>

              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Image source={assets.imgAsh} style={styles.imgJonh} />
                <Text style={styles.textJohn}>Ash Pereira</Text>

                <Text
                  style={{
                    marginLeft: -100,
                    fontSize: 14,
                    color: "gray",
                    marginTop: 32,
                  }}
                >
                  enviou uma solicitação de amizade
                </Text>

                <ButtonAdicionar />
                <ButtonExcluirAmigo />

              </View>

              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Image source={assets.imgJordan} style={styles.imgJonh} />
                <Text style={styles.textJohn}>Jordan Bernado</Text>

                <Text
                  style={{
                    marginLeft: -135,
                    fontSize: 14,
                    color: "gray",
                    marginTop: 32,
                  }}
                >
                  enviou uma solicitação de amizade
                </Text>

                <ButtonAdicionar />
                <ButtonExcluirAmigo />

              </View>
            </View>

          </Animated.View>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

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

    {/* <TouchableOpacity 
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
    </TouchableOpacity> */}

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
    onPress={() => navigation.navigate("AccountSettingsMenu")}
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
                <View style={{marginLeft: 80, marginTop: -158}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("UserProfileScreen")}
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
    backgroundColor: "#98C2FF",
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
  },
  buttonAdd: {
    width: 100,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ACD3FC",
    alignItems: "center",
    justifyContent: "center",
  },
  imgJonh: {
    marginTop: 15,
    width: 75,
    height: 75,
  },
  textJohn: {
    fontSize: 19,
    fontWeight: "700",
    marginTop: 8,
    marginLeft: 15,
  },
  textNotification: {
    fontWeight: "700",
    fontSize: 20,
    marginTop: 10,
  },
  containerSafeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  HeaderOlaClasse: {
    marginTop: -69,
    marginLeft: 12,
  },
  heading: {
    paddingTop: 5,
    fontSize: 17,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: "95%",
    marginVertical: 5,
  },

  cardHorizontal: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: "80%",
    marginVertical: 5,
  },

  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
  },

  cardCategoria: {
    alignItems: "center",
    resizeMode: "contain",
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 1,
    height: 150,
    marginVertical: 5,
    resizeMode: "cover",
    margin: 5,
  },

  elevationCategoria: {
    elevation: 20,
    shadowColor: "#52006A",
  },

  center: {
    alignItems: "center",
    justifyContent: "center",
    height: 290,
  },
});

export default HomeScreen;
