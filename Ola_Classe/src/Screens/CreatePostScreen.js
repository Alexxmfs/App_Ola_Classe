import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View, Image, ActivityIndicator, Text } from 'react-native';
import { CircleButton } from '../components/Button';
import { assets } from '../../constants';

import * as Firebase from 'firebase'
import * as ImagePicker from 'expo-image-picker'

import { firebase } from '../../firebase';

export default function CreatePostScreen({navigation}) {


  if(!Firebase.apps.length){
    Firebase.initializeApp(firebase)
  }

  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const  { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permisions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  

  console.log(result);

  if(!result.cancelled) {
    setImage(result.uri);
  }
};

  const uploadImage = async () => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', image, true);
      xhr.send(null);
    });

    //tirar o ('images')
    const ref = Firebase.storage().ref('images').child(new Date().toISOString())
    const snapshot = ref.put(blob);
  
    snapshot.on(Firebase.storage.TaskEvent.STATE_CHANGED,()=>{
      setUploading(true)
    },
    (error)=>{
      setUploading(false)
      console.log(error);
      blob.close()
      return
    },
    ()=>{
      snapshot.snapshot.ref.getDownloadURL().then((url)=>{
        setUploading(false)
        console.log("download url :",url)
        blob,close();
        return url;
      })
    }
    );
  }

  return (    
    <View style={styles.container}>

      <View style={styles.circleButton}>
             <CircleButton 
                imgUrl = {assets.next}
                onPress={() => navigation.navigate("HomeScreen")}
        />
        
      </View>

      <View style={{marginTop: 5}}>
        <Image
        style={{width: 300, height: 300, borderRadius: 8}}
        source={assets.placeholderImg}
        />
        </View>

      <View style={{top: -300}}>
          <Image source={{uri: image}} style={{width: 300, height:300, borderRadius: 8}}/>
      </View>

      <View style={{marginTop: -220}}>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.text}>Escolha uma imagem</Text>
      </TouchableOpacity>
      </View>

      <View style={{marginTop: 30}}>
      {!uploading?<TouchableOpacity style={styles.buttonSubmit} onPress={uploadImage}>
        <Text style={styles.text}>Enviar</Text>
      </TouchableOpacity>:<ActivityIndicator size="large" color="#165ac7"/>}
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
  backgroundColor: '#ACD3FC',
  width: 200,
  paddingTop: 15,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  },
  buttonSubmit: {
  backgroundColor: '#ACD3FC',
  width: 200,
  paddingTop: 15,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  },
  text: {
    fontSize: 17,
    color: '#FFF',
    fontWeight: '600',
    top: -7
  },
  circleButton: {
    top: -70,
    right: 150,
    transform: [{ rotate: "180deg"}]
},
  
});

