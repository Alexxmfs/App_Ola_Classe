import React, { useState, useEffect } from 'react'
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../constants';
import { CircleButton, ButtonImagens, ButtonVideos } from '../components/Button';
import { View, TouchableOpacity, Text, StyleSheet, Image, FlatList, SafeAreaView } from "react-native";
import { firebase, db } from '../../firebase';

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
  
      const data1 = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All
      });
  
      if (data1.cancelled) {
        return;
      }
  
      if (!data1.uri) {
        return;
      }
  
      setAvatar(data1);
    }
  
    async function uploadImage() {
      const data1 = new FormData();
  
      data1.append("avatar", {
        uri: avatar.uri,
        type: avatar.type
      });
  
      await Axios.post("http://localhost:3333/files", data1);
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
                style={{top: -25, marginLeft: 65}}
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
  
      const data2 = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All
      });
  
      if (data2.cancelled) {
        return;
      }
  
      if (!data2.uri) {
        return;
      }
  
      setAvatar(data2);
    }
  
    async function uploadImage() {
      const data2 = new FormData();
  
      data2.append("avatar", {
        uri: avatar.uri,
        type: avatar.type
      });
  
      await Axios.post("http://localhost:3333/files", data2);
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
                style={{top: -45, marginLeft: 330}}
                source={assets.iconCam}
            />
        </TouchableOpacity>
        </View>
  
      </View>
    );
  }

export const UploadPost = () => {
    const [avatar, setAvatar] = useState();
  
    async function imagePickerCallBackground() {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  
        if (status !== "granted") {
          alert("Nós precisamos dessa permissão.");
          return;
        }
      }
  
      const data3 = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All
      });
  
      if (data3.cancelled) {
        return;
      }
  
      if (!data3.uri) {
        return;
      }
  
      setAvatar(data3);
    }
  
    async function uploadImage() {
      const data3 = new FormData();
  
      data3.append("avatar", {
        uri: avatar.uri,
        type: avatar.type
      });
  
      await Axios.post("http://localhost:3333/files", data3);
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
        <TouchableOpacity style={styles.button} onPress={imagePickerCallBackground}>
            <Image 
                style={{top: 50, marginRight: 80 }}
                source={assets.iconCam}
            />
        </TouchableOpacity>
        </View>
  
      </View>
    );
  }

const UserProfileScreen = ({navigation}) => {
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
      <SafeAreaView style={{marginTop: 2}}>
        <View style={{marginTop: 25}}>
           <Image 
              style={{width: 395}}
              source={assets.backgroundProfile}
          />
        </View>
        <View style={{top: -70}}>
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




              {/* username */}
        <View  style={{marginTop: -400, alignItems: 'center', justifyContent: 'center'}}>
          <FlatList 
            data={data}
            keyExtractor={(item) => item.username}
            renderItem={({item}) =>{
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                     <Text
                      style={{
                        fontSize: 20,
                        paddingVertical: 140,
                        fontWeight: '600'
                         }}>
                          {item.username}
                      </Text>

                  <View style={{top: -135}}>
                     <Text
                      style={{
                        fontSize: 16,
                        color: '#898989'
                         }}>
                          {item.email}
                      </Text>
                    </View>

                </View>
              )
            }}
            />
        </View>
        <>
        <View style={{top: -235}}>
                 <Upload />
              </View>

          <View style={{width: '100%', height: 90, marginLeft: 70, marginTop: -120, flexDirection: 'row', paddingVertical: 5}}>
              <Text style={{marginLeft: -19, fontSize: 15, color: '#898989'}}>Seguidores</Text>
              <Text style={{paddingHorizontal: 50, fontSize: 15, color: '#898989'}}>Posts</Text>
              <Text style={{ fontSize: 15, color: '#898989'}}>Seguindo</Text>
                <View style={{flexDirection: 'row', paddingTop: 20}}>
                    <Text style={{paddingHorizontal: 10, right: 260, fontSize: 17, fontWeight: '600'}}>0</Text>
                    <Text style={{right: 168, fontSize: 17, fontWeight: '600'}}>0</Text>
                    <Text style={{paddingHorizontal: 10, right: 85, fontSize: 17, fontWeight: '600'}}>0</Text>
                </View>
          </View>

          <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: -10}}>
            <ButtonImagens />
            <ButtonVideos />
          </View>


            {/* <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <UploadPost />
            </View> */}

        </>
        </SafeAreaView>
  );
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
        height: 192,
      }
});




export default UserProfileScreen