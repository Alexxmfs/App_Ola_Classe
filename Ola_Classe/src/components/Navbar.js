import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect }from 'react'
import { assets } from '../../constants'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Axios from "axios";


export const NavBarHome = () => {
  const navigation = useNavigation();

  return (
    <View styles={{ alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
        
    <View style={{top: 38}}>
        <Divider width={2} orientation='vertical' 
                 style={{width: 1000,  marginLeft: -400}} />  
            </View>

        <View style={{flexDirection: 'row'}}>

          <TouchableOpacity>
            <Image 
            style={{width: 40, height: 40}}
            source={assets.iconHomeActivated}
            />

            </TouchableOpacity>

          <TouchableOpacity
          onPress={() => navigation.navigate("VideoScreen")}
          >
            <Image 
            style={{width: 40, height: 40, marginLeft: 30}}
            source={assets.iconVideo}
            />
            </TouchableOpacity>

          <View style={{marginTop: 40}}>
            <Upload />
            </View>

            <TouchableOpacity
            onPress={() => navigation.navigate("ChatScreen")}
            >
            <Image 
            style={{width: 40, height: 40, marginLeft: -18}}
            source={assets.iconChat}
            />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate("NotificationScreen")}
            >
            <Image 
            style={{width: 45, height: 40, marginLeft: 30}}
            source={assets.iconBell}
            />
            </TouchableOpacity>
        </View>
    </View>
  )
}


export const NavBarVideo = () => {
  const navigation = useNavigation();

  return (
    <View styles={{ alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
        
    <View style={{top: 38}}>
        <Divider width={2} orientation='vertical' 
                 style={{width: 1000,  marginLeft: -400}} />  
            </View>

        <View style={{flexDirection: 'row', marginLeft: -8}}>

          <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Image 
            style={{width: 40, height: 40}}
            source={assets.iconHome}
            />

            </TouchableOpacity>

          <TouchableOpacity
          onPress={() => navigation.navigate("VideoScreen")}
          >
            <Image 
            style={{width: 40, height: 40, marginLeft: 30}}
            source={assets.iconVideoActivated}
            />

            </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("CreatePostScreen")}
           >
            <Image 
            style={{width: 70, height: 70, marginLeft: 30, marginTop: -18}}
            source={assets.iconPost}
            />

            </TouchableOpacity>


            <TouchableOpacity
            onPress={() => navigation.navigate("ChatScreen")}
            >
            <Image 
            style={{width: 40, height: 40, marginLeft: 30}}
            source={assets.iconChat}
            />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate("NotificationScreen")}
            >
            <Image 
            style={{width: 45, height: 40, marginLeft: 30}}
            source={assets.iconBell}
            />
            </TouchableOpacity>


        </View>

    </View>
  )
}


export const NavBarPost = () => {
  const navigation = useNavigation();

  return (
    <View styles={{ alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
        
    <View style={{top: 38}}>
        <Divider width={2} orientation='vertical' 
                 style={{width: 1000,  marginLeft: -400}} />  
            </View>

        <View style={{flexDirection: 'row', marginLeft: -8}}>

          <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Image 
            style={{width: 40, height: 40}}
            source={assets.iconHome}
            />

            </TouchableOpacity>

          <TouchableOpacity
          onPress={() => navigation.navigate("VideoScreen")}
          >
            <Image 
            style={{width: 40, height: 40, marginLeft: 30}}
            source={assets.iconVideoActivated}
            />

            </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("CreatePostScreen")}
           >
            <Image 
            style={{width: 70, height: 70, marginLeft: 30, marginTop: -18}}
            source={assets.iconPost}
            />

            </TouchableOpacity>


            <TouchableOpacity
            onPress={() => navigation.navigate("ChatScreen")}
            >
            <Image 
            style={{width: 40, height: 40, marginLeft: 30}}
            source={assets.iconChat}
            />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate("NotificationScreen")}
            >
            <Image 
            style={{width: 45, height: 40, marginLeft: 30}}
            source={assets.iconBell}
            />
            </TouchableOpacity>


        </View>

    </View>
  )
}


export const NavBarChat = () => {
  const navigation = useNavigation();

  return (
    <View styles={{ alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
        
    <View style={{top: 38}}>
        <Divider width={2} orientation='vertical' 
                 style={{width: 1000,  marginLeft: -400}} />  
            </View>

        <View style={{flexDirection: 'row', marginLeft: -8}}>

          <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Image 
            style={{width: 40, height: 40}}
            source={assets.iconHome}
            />

            </TouchableOpacity>

          <TouchableOpacity
          onPress={() => navigation.navigate("VideoScreen")}
          >
            <Image 
            style={{width: 40, height: 40, marginLeft: 30}}
            source={assets.iconVideo}
            />

            </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("CreatePostScreen")}
           >
            <Image 
            style={{width: 70, height: 70, marginLeft: 30, marginTop: -18}}
            source={assets.iconPost}
            />

            </TouchableOpacity>


            <TouchableOpacity
            onPress={() => navigation.navigate("ChatScreen")}
            >
            <Image 
            style={{width: 40, height: 40, marginLeft: 30}}
            source={assets.iconChatActivated}
            />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate("NotificationScreen")}
            >
            <Image 
            style={{width: 45, height: 40, marginLeft: 30}}
            source={assets.iconBell}
            />
            </TouchableOpacity>


        </View>

    </View>
  )
}


export const NavBarNotification = () => {
  const navigation = useNavigation();

  return (
    <View styles={{ alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
        
    <View style={{top: 38}}>
        <Divider width={2} orientation='vertical' 
                 style={{width: 1000,  marginLeft: -400}} />  
            </View>

        <View style={{flexDirection: 'row', marginLeft: -8}}>

          <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Image 
            style={{width: 40, height: 40}}
            source={assets.iconHome}
            />

            </TouchableOpacity>

          <TouchableOpacity
          onPress={() => navigation.navigate("VideoScreen")}
          >
            <Image 
            style={{width: 40, height: 40, marginLeft: 30}}
            source={assets.iconVideo}
            />

            </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("CreatePostScreen")}
           >
            <Image 
            style={{width: 70, height: 70, marginLeft: 30, marginTop: -18}}
            source={assets.iconPost}
            />

            </TouchableOpacity>


            <TouchableOpacity
            onPress={() => navigation.navigate("ChatScreen")}
            >
            <Image 
            style={{width: 40, height: 40, marginLeft: 30}}
            source={assets.iconChat}
            />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate("NotificationScreen")}
            >
            <Image 
            style={{width: 45, height: 40, marginLeft: 30}}
            source={assets.iconBellActivated}
            />
            </TouchableOpacity>


        </View>

    </View>
  )
}



export default function Upload() {
  const [avatar, setAvatar] = useState();

  async function imagePickerCall() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== "granted") {
        alert("Nós precisamos dessa permissão.");
        return;
      }
    }

    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All
    });

    if (data.cancelled) {
      return;
    }

    if (!data.uri) {
      return;
    }

    setAvatar(data);
  }

  async function uploadImage() {
    const data = new FormData();

    data.append("avatar", {
      uri: avatar.uri,
      type: avatar.type
    });

    await Axios.post("http://localhost:3333/files", data);
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: avatar
            ? avatar.uri
            : "https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png"
        }}
        style={styles.avatar}
      />
      <TouchableOpacity style={styles.button} onPress={imagePickerCall}>
        <Image source={assets.iconPost} />
      </TouchableOpacity>

      <Image 
      style={{width: 50, height: 60, top:40}}
      source={avatar}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
});

