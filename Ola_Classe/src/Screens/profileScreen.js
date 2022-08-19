import React, { useState } from 'react'
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../constants';
import { CircleButton, ButtonWhite, ButtonBlue} from '../components/Button';
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Axios from "axios";

export const Upload = () => {
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


          <View>
        <TouchableOpacity style={styles.button} onPress={imagePickerCall}>
            <Image 
                style={{top: -25, marginLeft: 50}}
                source={assets.iconCam}
            />
        </TouchableOpacity>
        </View>
  
      </View>
    );
  }
export const UploadBackground = () => {
    const [avatar, setAvatar] = useState();
  
    async function imagePickerCallBackground() {
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
          style={styles.avatarBackground}
        />


          <View>
        <TouchableOpacity style={styles.button} onPress={imagePickerCallBackground}>
            <Image 
                style={{top: -45, marginLeft: 330, borderColor: 'red'}}
                source={assets.iconCam}
            />
        </TouchableOpacity>
        </View>
  
      </View>
    );
  }

const profileScreen = ({navigation}) => {
  return (
    <View>

        <View style={{marginTop: 25}}>
        <Image 
        style={{width: 395}}
        source={assets.backgroundProfile}
        />
        </View>
        <View style={{top: -75}}>
                <UploadBackground />
            </View>
        <View style={styles.circleButton}>
        <CircleButton 
         imgUrl = {assets.next}
         onPress={() => navigation.navigate("HomeScreen")}
        />
        
     </View>



        <View style={{alignItems: 'center', justifyContent: 'center', top: 50}}>
          <Image 
              source={assets.ImgProfileMenu}
             style={{width: 100, height: 100, borderRadius: 50}}
          />

        </View>

             <View style={{top: 21}}>
                 <Upload />
              </View>



    </View>
  )
}

const styles = StyleSheet.create({
    circleButton: {
        marginTop: -165,
        right: 335,
        transform: [{ rotate: "180deg"}]
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -8
      },
      avatar: {
        width: 100,
        height: 100,
        borderRadius: 50
      },
      avatarBackground: {
        width: 395,
        height: 200,
      }
});




export default profileScreen