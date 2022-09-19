import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { assets } from "../..//constants";
import { useNavigation } from "@react-navigation/native";
import { CircleButton } from '../components/Button';

export default class CommentScreen extends Component {
  state = {
    messages: [],
  };
  componentWillMount() {
    if (!this.state.messages.length) {
      this.setState({
        messages: [
          {
            _id: Math.round(Math.random() * 1000000),
            text: "0 message",
            createdAt: new Date(),
            system: true,
          },
        ],
      });
    }
    this.setState({
      messages: [
        {
          _id: Math.round(Math.random() * 1000000),
          text: "É praticamente um crime uma aula como esta ser gratuita. Parabéns.",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Jordan",
            avatar:
              "https://raw.githubusercontent.com/Alexxmfs/App_Ola_Classe/logoOlaClasse/imgJordan.png",
          },
          sent: true,
          received: true,
        },
        {
          _id: Math.round(Math.random() * 1000000),
          text: "Que aula incrível",
          createdAt: new Date(),
          user: {
            _id: 3,
            name: "Ash",
            avatar:
              "https://raw.githubusercontent.com/Alexxmfs/App_Ola_Classe/logoOlaClasse/imgAsh.png",
          },
          sent: true,
          received: true,
        },
        {
          _id: Math.round(Math.random() * 1000000),
          text: "Bem-Vindo ao Comentário",
          createdAt: new Date(),
          system: true,
        },
      ],
    });
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
        <View>
          <BackScreen />
        </View>
        {this.state.messages.length === 0 && (
          <View
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                bottom: 50,
              },
            ]}
          >
            <Image
              source={{ uri: "https://i.stack.imgur.com/qLdPt.png" }}
              style={{
                ...StyleSheet.absoluteFillObject,
                resizeMode: "contain",
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
          parsePatterns={(linkStyle) => [
            {
              pattern: /#(\w+)/,
              style: { ...linkStyle, color: "lightgreen" },
              onPress: (props) => alert(`press on ${props}`),
            },
          ]}
        />
      </>
    );
  }
}

export const BackScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <View style={styles.circleButton}>
          <CircleButton
            imgUrl={assets.next}
            onPress={() => navigation.navigate("HomeScreen")}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 21,
              marginLeft: 80,
              marginTop: -40,
            }}
          >
            Comentários
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    marginTop: 40,
    right: 330,
    transform: [{ rotate: "180deg" }],
  },
});
