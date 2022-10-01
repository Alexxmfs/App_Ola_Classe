import React, { Component } from "react";
import {
  CircleButton,
  ButtonSeguir,
  ButtonImagens,
  ButtonVideos,
  ButtonImagensHover,
  ButtonVideosHover,
} from "../../../components/Button";
import { assets } from "../../../../constants";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { IconLike, IconWarning, IconComment }   from '../../../components/IconsCard';

const VideosCursoEmVideo = ({ navigation }) => {
  return (
  <ScrollView>
    <View>
      <View>
        <Image
          source={assets.imgBackgroundCursoemVideo}
          style={styles.backgroundImg}
        />
      </View>

      <View style={styles.circleButton}>
        <CircleButton
          imgUrl={assets.next}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("MessagesScreenGuana")}
          style={styles.buttonMessage}
        >
          <Text style={styles.textMessage}>Mensagem</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerProfile}>
        <Image
          source={assets.largeImgGuanabara}
          style={{ borderRadius: 50, width: 95, height: 95, marginTop: 60 }}
        />
        <Text style={styles.textUsername}>Curso em Video</Text>
        <Text style={styles.textName}>Guanabara</Text>
      </View>

      <View
        style={{
          width: "100%",
          height: 90,
          marginLeft: 70,
          marginTop: 15,
          flexDirection: "row",
          paddingVertical: 5,
        }}
      >
        <Text style={{ marginLeft: -19, fontSize: 15, color: "#898989" }}>
          Seguidores
        </Text>
        <Text style={{ paddingHorizontal: 50, fontSize: 15, color: "#898989" }}>
          Posts
        </Text>
        <Text style={{ fontSize: 15, color: "#898989" }}>Seguindo</Text>
        <View style={{ flexDirection: "row", paddingTop: 20 }}>
          <Text
            style={{
              paddingHorizontal: 10,
              right: 271,
              fontSize: 17,
              fontWeight: "600",
            }}
          >
            100K
          </Text>
          <Text style={{ right: 208, fontSize: 17, fontWeight: "600" }}>
            120...
          </Text>
          <Text
            style={{
              paddingHorizontal: 10,
              right: 158,
              fontSize: 17,
              fontWeight: "600",
            }}
          >
            800
          </Text>
        </View>
      </View>

      <ButtonSeguir />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <ButtonImagensHover
          onPress={() => navigation.navigate("profileCursoemVideo")}
        />
        <ButtonVideosHover onPress={() => navigation.navigate("#")} />
      </View>

   <View style={{marginTop: 15}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            right: 50,
            marginLeft: 30
          }}
        >
          <View
            style={[styles.cardHorizontal, styles.elevation, styles.center]}
          >
            <View style={styles.center}>
              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 2,
                  paddingTop: 5,
                  marginRight: 130,
                }}
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    marginRight: 235,
                    marginTop: -8,
                  }}
                  source={assets.ImgCursoEmVideo}
                />
                <Text
                  style={{ marginLeft: -225, fontWeight: "600", fontSize: 16 }}
                >
                  Curso em Video
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("OpenVideoGuanabara")}
              >
                <Image
                  source={assets.tumbnailGuanabara2}
                  style={{ width: 300, height: 175, borderRadius: 10 }}
                />
              </TouchableOpacity>
              <View style={{ paddingTop: 5 }}>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 16,
                  }}
                >
                  Curso Pyhton #02 - Python na prática
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                marginRight: 240,
                marginTop: -49,
              }}
            >
              <IconLike />
              <IconWarning />
              {/* <IconSave /> */}
              <IconComment />
            </View>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            marginLeft: -105,
          }}
        >
          <View
            style={[styles.cardHorizontal, styles.elevation, styles.center]}
          >
            <View style={styles.center}>
              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 2,
                  paddingTop: 5,
                  marginRight: 130,
                }}
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 235,
                    marginTop: -8,
                  }}
                  source={assets.ImgCursoEmVideo}
                />
                <Text
                  style={{ marginLeft: -225, fontWeight: "600", fontSize: 16 }}
                >
                  Curso em Video
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("OpenVideoGuanabara")}
              >
                <Image
                  source={assets.TumbnailGuanabara}
                  style={{ width: 300, height: 175, borderRadius: 10 }}
                />
              </TouchableOpacity>
              <View style={{ paddingTop: 5 }}>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 16,
                  }}
                >
                  Curso Pyhton #01 - Seja Programador
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                marginRight: 240,
                marginTop: -49,
              }}
            >
              <IconLike />
              <IconWarning />
              {/* <IconSave /> */}
              <IconComment />
            </View>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            marginLeft: -65,
          }}
        >
          <View
            style={[styles.cardHorizontal, styles.elevation, styles.center]}
          >
            <View style={styles.center}>
              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 2,
                  paddingTop: 5,
                  marginRight: 130,
                }}
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 235,
                    marginTop: -8,
                  }}
                  source={assets.ImgCursoEmVideo}
                />
                <Text
                  style={{ marginLeft: -225, fontWeight: "600", fontSize: 16 }}
                >
                  Curso em Video
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("OpenVideoGuanabara")}
              >
                <Image
                  source={assets.tumbnailGuanabaraCarousel}
                  style={{ width: 300, height: 175, borderRadius: 10 }}
                />
              </TouchableOpacity>
              <View style={{ paddingTop: 5 }}>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 16,
                  }}
                >
                  Curso Pyhton #01 - Seja Programador
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                marginRight: 240,
                marginTop: -49,
              }}
            >
              <IconLike />
              <IconWarning />
              {/* <IconSave /> */}
              <IconComment />

              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
</ScrollView>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    marginTop: -160,
    right: 330,
    transform: [{ rotate: "180deg" }],
  },
  backgroundImg: {
    width: 395,
    marginTop: 28,
  },
  buttonMessage: {
    width: 95,
    backgroundColor: "#ACD3FC",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 290,
    marginTop: -45,
  },
  textMessage: {
    fontWeight: "600",
    fontSize: 15,
  },
  containerProfile: {
    alignItems: "center",
    justifyContent: "center",
  },
  textUsername: {
    fontSize: 22,
    fontWeight: "450",
  },
  textName: {
    fontSize: 17,
    color: "#7D7979",
  },
  
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '95%',
    marginVertical: 5,
  },

  cardHorizontal: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '80%',
    marginVertical: 5,
  },

  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  
  cardCategoria: {
    alignItems: 'center',
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 1,
    height: 150,
    marginVertical: 5,
    resizeMode: 'cover',
    margin: 5
  },

  elevationCategoria: {
    elevation: 20,
    shadowColor: '#52006A',
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 290
  }
});

export default VideosCursoEmVideo;
