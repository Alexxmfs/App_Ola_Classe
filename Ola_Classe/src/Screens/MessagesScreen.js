import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// import "prop-types";

const styles = StyleSheet.create({
  mapView: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
  },
});


export default class MessagesScreen extends Component {
  state = {
    messages: [],
  };
  
//   renderCustomView = (props) => {
//     if (props.currentMessage.location) {
//       return (
//         <View style={props.containerStyle}>
//           <MapView
//               provider={PROVIDER_GOOGLE}
//               style={[styles.mapView]}
//               region={{
//                 latitude: props.currentMessage.location.latitude,
//                 longitude: props.currentMessage.location.longitude,
//                 latitudeDelta: 0.1,
//                 longitudeDelta: 0.1,
//               }}
//               scrollEnabled={false}
//               zoomEnabled={false}
//             >
//               <MapView.Marker
//                 coordinate={{
//                 latitude: props.currentMessage.location.latitude,
//                 longitude: props.currentMessage.location.longitude
//                 }}
//               />
//             </MapView>
//         </View>
//       );
//     }
//     return null
//   }

  componentWillMount() {
    if(!this.state.messages.length) {
      this.setState({ messages:  [
        {
         _id: Math.round(Math.random() * 1000000),
         text: '0 message',
         createdAt: new Date(),
         system: true
      }]})
    }
    this.setState({ messages:  [
      {
        _id: Math.round(Math.random() * 1000000),
        text: '#awesome',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Developer',
        },
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: '',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
        image: 'http://www.pokerpost.fr/wp-content/uploads/2017/12/iStock-604371970-1.jpg',
        sent: true,
        received: true,
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: 'Send me a picture!',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Developer',
        },
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: 'Opa',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Ash',
        },
        sent: true,
        received: true,
        location: {
          latitude: 48.864601,
          longitude: 2.398704
        },
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: 'Where are you?',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Developer',
        },
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: 'Yes, and I use Gifted Chat!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://www.ofuxico.com.br/wp-content/uploads/2022/05/conheca-a-historia-de-wanda-maximoff-foto.jpg'
        },
        sent: true,
        received: true
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: 'Are you building a chat app?',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Developer',
        },
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: "You are officially rocking GiftedChat.",
        createdAt: new Date(),
        system: true,
      },
    ]});
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  //  https://stackoverflow.com/a/54550286/1458375
  render() {
    return (
      <>
      {this.state.messages.length === 0 && (
        <View style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 50
          }]}>
          <Image 
            source={{ uri: 'https://i.stack.imgur.com/qLdPt.png' }}
            style={{
              ...StyleSheet.absoluteFillObject,
              resizeMode: 'contain'
            }}
          />
      </View>
      )}
      <GiftedChat
       messages={this.state.messages}
       onSend={(messages) => this.onSend(messages)}
       renderCustomView={this.renderCustomView}
       user={{
         _id: 1,
       }}
       parsePatterns={linkStyle => [
          {
            pattern: /#(\w+)/,
            style: { ...linkStyle, color: 'lightgreen' },
            onPress: props => alert(`press on ${props}`),
          },
        ]}
     />
     </>
    );
  }
}