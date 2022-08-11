import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { assets } from '../../constants'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';


export const NavBarHome = () => {
  const navigation = useNavigation();

  return (
    <View styles={{ alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
        
    <View style={{top: 38}}>
        <Divider width={2} orientation='vertical' 
                 style={{width: 1000,  marginLeft: -400}} />  
            </View>

        <View style={{flexDirection: 'row', marginLeft: -8}}>

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





