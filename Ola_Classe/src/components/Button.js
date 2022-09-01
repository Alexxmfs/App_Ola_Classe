import { TouchableOpacity, View, Text, Image, StyleSheet, ScrollView, TextInput } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, SIZES, SHADOWS, FONTS, assets, DarkBlue } from "../../constants";
import React, { Component } from "react";

export const CircleButton =({ imgUrl, onPress }) => {
    return (
        <TouchableOpacity
        style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.extraLarge,
        }}
        onPress={onPress}
        >
            <Image
            source={imgUrl}
            resizeMode="contain"
            style={{ width: 50, height: 50}}
            />

        </TouchableOpacity>
        );
}

export const ButtonWhite = ({ onPress }) => {
    return (
      <TouchableOpacity
      style={{
        width: 134,
        height: 50,
        borderWidth: 2,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium - 3,
        borderColor: COLORS.DarkBlue,

        padding: SIZES.small - 2,
      }}
      onPress={onPress}
    >

      <Text style={{ 
        fontFamily: FONTS.bold,
        color: COLORS.DarkBlue,
        fontSize: SIZES.font + 2,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Entrar
      </Text>
  
      </TouchableOpacity>
    );
  }

  export const ButtonBlue = ({ onPress }) => {
    return (
      <TouchableOpacity
      style={{
        width: 134,
        height: 50,
        backgroundColor: COLORS.DarkBlue,
        borderRadius: SIZES.medium - 3,

        padding: SIZES.small,
      }}
      onPress={onPress}
    >

      <Text style={{ 
        fontFamily: FONTS.bold,
        color: COLORS.white,
        fontSize: SIZES.font + 2,
        marginRight: 7 
      }}>
        Criar Conta
      </Text>
  
      </TouchableOpacity>
    );
  }

  export const ButtonImagens = ({ onPress }) => {
    return (
      <View style={{marginRight: -30}}>
      <TouchableOpacity
      style={{
        width: 134,
        height: 45,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium - 3,
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onPress={onPress}
    >

      <Text style={{ 
        color: 'black',
        fontSize: SIZES.font + 2,
        marginRight: 20,
        marginTop: -3
      }}>
        Imagens
      </Text>
  
      </TouchableOpacity>
    </View>
    );
  }

export const ButtonVideos = ({ onPress }) => {
    return (
      <View>
      <TouchableOpacity
      style={{
        width: 134,
        height: 45,
        backgroundColor: '#E8E8E8',
        borderRadius: SIZES.medium - 3,
        borderColor: COLORS.DarkBlue,

        padding: SIZES.small - 2,
      }}
      onPress={onPress}
    >

      <Text style={{ 
        color: 'black',
        fontSize: SIZES.font + 2,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Vídeos
      </Text>
  
      </TouchableOpacity>
      </View>
    );
  }

  export const ButtonCreateAccount = ({ onPress }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
    <TouchableOpacity
      style={{
        width: 350,
        padding: 10,
        backgroundColor: '#0A58EE',
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
       }}
       onPress={onPress}>
        <Text style={{ color: '#FFF', fontSize: 25, justifyContent: 'center', fontWeight: '700', alignItems: 'center', justifyContent: 'center'}}>
          Criar Conta
        </Text>
    </TouchableOpacity>
    </View>
  );  
} 
  export const ButtonSubmit = ({ onPress }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', height: 30}}>
    <TouchableOpacity
      style={{
        marginTop: -60,
        width: 350,
        padding: 10,
        backgroundColor: '#0A58EE',
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
       }}
       onPress={onPress}>
        <Text style={{ color: '#FFF', fontSize: 25, justifyContent: 'center', fontWeight: '700', alignItems: 'center', justifyContent: 'center'}}>
          Enviar
        </Text>
    </TouchableOpacity>
    </View>
  );  
} 

export const ButtonTeacher = ({ onPress }) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
      style={{
        width: 180,
        padding: 10,
        borderRadius: 15,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 25 
      }}       
      onPress={onPress}>
        <Text style={{fontSize: SIZES.large -3, fontFamily: FONTS.semiBold}}>Professor(a)</Text>
      </TouchableOpacity>
    </View>
  );
}

export const ButtonStudent = ({ onPress }) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
      style={{
        width: 180,
        padding: 10,
        borderRadius: 15,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -35
      }}
      onPress={onPress}>
        <Text style={{fontSize: SIZES.large -3, fontFamily: FONTS.semiBold}}>Aluno(a)</Text>
      </TouchableOpacity>
    </View>
  );
}


export default class ButtonCat extends React.Component {
  state = {
    on: false,
    on2: false
  };

  render() {
    const { on } = this.state;

    const { on2 } = this.state;

    const { on3 } = this.state;

    const { on4 } = this.state;

    const { on5 } = this.state;

    const { on6 } = this.state;

    const { on7 } = this.state;

    const { on8 } = this.state;

    const { on9 } = this.state;

    const { on10 } = this.state;

    const { on11 } = this.state;

    const { on12 } = this.state;

    const { on13 } = this.state;

    const { on14 } = this.state;

    const { on15 } = this.state;
    
    return (
    <View>
      <ScrollView>
     <View style={{flexDirection: 'row', marginTop: 35, justifyContent: 'space-around', paddingHorizontal: 30}}>
     <View>
      <TouchableOpacity
        onPress={() => this.setState({ on: !this.state.on })}
        style={{alignItems: 'center', justifyContent: 'center', height: 60, width: 60, borderRadius: 50, flexDirection: 'row', backgroundColor: on ? "#60bbfc" : "#bdbebf" }}
      >
        <Image 
        source={assets.python}
        style={{width: 50, height: 50}}
        />
      </TouchableOpacity>
        <Text style={{marginLeft: 8, fontWeight: '400', fontSize: 14}}>Python</Text>
      </View>
      <View>
      <TouchableOpacity
        onPress={() => this.setState({ on2: !this.state.on2 })}
        style={{alignItems: 'center', justifyContent: 'center', height: 60, width: 60, borderRadius: 50, flexDirection: 'row', backgroundColor: on2 ? "#60bbfc" : "#bdbebf" }}
      >
        <Image 
        source={assets.CSharp}
        style={{width: 55, height: 55}}
        />
      </TouchableOpacity>
        <Text style={{marginLeft: 7, fontWeight: '400', fontSize: 14}}>CSharp</Text>
      </View>
      <View>
      <TouchableOpacity
        onPress={() => this.setState({ on3: !this.state.on3 })}
        style={{alignItems: 'center', justifyContent: 'center', height: 60, width: 60, borderRadius: 50, flexDirection: 'row', backgroundColor: on3 ? "#60bbfc" : "#bdbebf" }}
      >
        <Image 
        source={assets.java}
        style={{width: 45, height: 45}}
        />
      </TouchableOpacity>
      <Text style={{marginLeft: 13, fontSize: 14, fontWeight: '400'}}>Java</Text>
        </View>
      </View>

      <View style={{marginTop: 25, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', paddingHorizontal: 30}}>
      <View>
      <TouchableOpacity
        onPress={() => this.setState({ on4: !this.state.on4 })}
        style={{alignItems: 'center', justifyContent: 'center', height: 60, width: 60, borderRadius: 50, flexDirection: 'row', backgroundColor: on4 ? "#60bbfc" : "#bdbebf" }}
      >
        <Image 
        source={assets.html}
        style={{width: 40, height: 40}}
        />
      </TouchableOpacity>
      <Text style={{marginLeft: 10}}>HTML</Text>
      </View>
      <View>
      <TouchableOpacity
        onPress={() => this.setState({ on5: !this.state.on5 })}
        style={{alignItems: 'center', justifyContent: 'center', height: 60, width: 60, borderRadius: 50, flexDirection: 'row', backgroundColor: on5 ? "#60bbfc" : "#bdbebf" }}
      >
        <Image 
        source={assets.css}
        style={{width: 40, height: 40}}
        />
      </TouchableOpacity>
      <Text style={{marginLeft: 16}}>CSS</Text>
      </View>
      <View>
      <TouchableOpacity
        onPress={() => this.setState({ on6: !this.state.on6 })}
        style={{alignItems: 'center', justifyContent: 'center', height: 60, width: 60, borderRadius: 50, flexDirection: 'row', backgroundColor: on6 ? "#60bbfc" : "#bdbebf" }}
      >
        <Image 
        source={assets.javascript}
        style={{width: 43, height: 43}}
        />
      </TouchableOpacity>
      <Text style={{marginLeft: 22}}>JS</Text>
      </View>
      </View>
      <View style={{marginTop: 25, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', paddingHorizontal: 30}}>
      <View>
      <TouchableOpacity
        onPress={() => this.setState({ on7: !this.state.on7 })}
        style={{alignItems: 'center', justifyContent: 'center', height: 60, width: 60, borderRadius: 50, flexDirection: 'row', backgroundColor: on7 ? "#60bbfc" : "#bdbebf" }}
      >
        <Image 
        source={assets.flutter}
        style={{width: 50, height: 50}}
        />
      </TouchableOpacity>
      <Text style={{marginLeft: 10}}>Flutter</Text>
      </View>
      <View>
      <TouchableOpacity
        onPress={() => this.setState({ on8: !this.state.on8 })}
        style={{alignItems: 'center', justifyContent: 'center', height: 60, width: 60, borderRadius: 50, flexDirection: 'row', backgroundColor: on8 ? "#60bbfc" : "#bdbebf" }}
      >
        <Image 
        source={assets.react}
        style={{width: 50, height: 50}}
        />
      </TouchableOpacity>
      <Text style={{marginLeft: 13, fontSize: 14}}>React</Text>
      </View>
      <View>
      <TouchableOpacity
        onPress={() => this.setState({ on9: !this.state.on9 })}
        style={{alignItems: 'center', justifyContent: 'center', height: 60, width: 60, borderRadius: 50, flexDirection: 'row', backgroundColor: on9 ? "#60bbfc" : "#bdbebf" }}
      >
        <Image 
        source={assets.swift}
        style={{width: 43, height: 43}}
        />
      </TouchableOpacity>
      <Text style={{marginLeft: 17}}>Swift</Text>
      </View>
      </View>
      <View style={{marginTop: 25, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', paddingHorizontal: 30}}>
      <View>
      <TouchableOpacity
        onPress={() => this.setState({ on10: !this.state.on10 })}
        style={{alignItems: 'center', justifyContent: 'center', height: 60, width: 60, borderRadius: 50, flexDirection: 'row', backgroundColor: on10 ? "#60bbfc" : "#bdbebf" }}
      >
        <Image 
        source={assets.kotlin}
        style={{width: 65, height: 65}}
        />
      </TouchableOpacity>
      <Text style={{marginLeft: 12}}>Kotlin</Text>
      </View>
      <View>
      <TouchableOpacity
        onPress={() => this.setState({ on11: !this.state.on11 })}
        style={{alignItems: 'center', justifyContent: 'center', height: 60, width: 60, borderRadius: 50, flexDirection: 'row', backgroundColor: on11 ? "#60bbfc" : "#bdbebf" }}
      >
        <Image 
        source={assets.dart}
        style={{width: 100, height: 100}}
        />
      </TouchableOpacity>
      <Text style={{marginLeft: 16}}>Dart</Text>
      </View>
      <View>
      <TouchableOpacity
        onPress={() => this.setState({ on12: !this.state.on12 })}
        style={{alignItems: 'center', justifyContent: 'center', height: 60, width: 60, borderRadius: 50, flexDirection: 'row', backgroundColor: on12 ? "#60bbfc" : "#bdbebf" }}
      >
        <Image 
        source={assets.typescript}
        style={{width: 38, height: 38}}
        />
      </TouchableOpacity>
      <Text style={{marginRight: -16}}>TypeScript</Text>
         </View>
        </View>
      <View style={{marginTop: 25, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', paddingHorizontal: 28}}>
      <View>
      <TouchableOpacity
        onPress={() => this.setState({ on13: !this.state.on13 })}
        style={{alignItems: 'center', justifyContent: 'center', height: 60, width: 60, borderRadius: 50, flexDirection: 'row', backgroundColor: on13 ? "#60bbfc" : "#bdbebf" }}
      >
        <Image 
        source={assets.node}
        style={{width: 40, height: 40}}
        />
      </TouchableOpacity>
      <Text style={{marginLeft: 13}}>Node</Text>
      </View>
      <View>
      <TouchableOpacity
        onPress={() => this.setState({ on14: !this.state.on14 })}
        style={{alignItems: 'center', justifyContent: 'center', height: 60, width: 60, borderRadius: 50, flexDirection: 'row', backgroundColor: on14 ? "#60bbfc" : "#bdbebf" }}
      >
        <Image 
        source={assets.vueJS}
        style={{width: 40, height: 40}}
        />
      </TouchableOpacity>
      <Text style={{marginLeft: 16}}>Vue.js</Text>
      </View>
      <View>
      <TouchableOpacity
        onPress={() => this.setState({ on15: !this.state.on15 })}
        style={{alignItems: 'center', justifyContent: 'center', height: 60, width: 60, borderRadius: 50, flexDirection: 'row', backgroundColor: on15 ? "#60bbfc" : "#bdbebf" }}
      >
        <Image 
        source={assets.angular}
        style={{width: 43, height: 43}}
        />
      </TouchableOpacity>
      <Text style={{marginLeft: 7}}>Angular</Text>
         </View>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: 300, height: 65, backgroundColor: '#C7D9FF', borderRadius: 15, marginTop: 20}}>
                  <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                  <Text style={{fontSize: SIZES.font + 1, fontWeight: '600'}}>Você tem interesse em alguma outra tecnologia que não esteja na lista?</Text>
                  </View>
            </View>
            <Image 
              source={assets.pensando}
              style={{width: 300, height: 250}}
            />
            <View style={{width: '100%', height: 130, alignItems: 'center', justifyContent: 'center'}}>
              <TextInput 
              placeholder="Digite o nome da tecnologia"
              style={{marginTop: 110, paddingLeft: 10, borderRadius: 8, marginBottom: 160, backgroundColor: '#DCE8FF', width: 280, height: 45, alignItems: 'center', justifyContent: 'center', fontWeight: '600'}}
              />

              </View>
                </View>

                </ScrollView>
              </View>
    );
  }
}

export const ButtonFriends = ({ onPress }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
    <TouchableOpacity
      style={{
        width: 100,
        padding: 5,
        backgroundColor: '#ACD3FC',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
       }}
       onPress={onPress}>
        <Text 
          style={{fontSize: 16,
            justifyContent: 'center',
            fontWeight: '500',
            alignItems: 'center',
            justifyContent: 'center'
            }}>
          Amigos
        </Text>
    </TouchableOpacity>
    </View>
  );  
}

export const DeleteButton = ({ onPress }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
    <TouchableOpacity
      style={{
        width: 100,
        padding: 5,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
       }}
       onPress={onPress}>
        <Text 
          style={{fontSize: 16,
            justifyContent: 'center',
            fontWeight: '500',
            alignItems: 'center',
            justifyContent: 'center'
            }}>
          Excluir
        </Text>
    </TouchableOpacity>
    </View>
  );  
} 

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'space-around',
    paddingHorizontal: 50,
    flexDirection: 'row',
  },
});