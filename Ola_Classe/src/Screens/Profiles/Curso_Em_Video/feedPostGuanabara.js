import React from "react";
import { assets, SIZES } from "../../../../constants";
import { CircleButton } from "../../../components/Button";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  IconLike,
  IconWarning,
  IconSave,
  IconComment,
} from "../../../components/IconsCard";

const feedPostGuanabara = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.circleButton}>
          <CircleButton
            imgUrl={assets.next}
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={{ marginLeft: 80, marginTop: 8 }}>
          <Text
            style={{
              fontSize: SIZES.medium + 4,
              fontWeight: "600",
              marginTop: -50,
            }}
          >
            Publicações
          </Text>
        </View>
        <View style={styles.center}>
          <View style={[styles.card, styles.elevation, styles.center]}>
            <View style={styles.center}>
              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 8,
                  marginRight: 145,
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
              <Image
                source={assets.publicationVueJS}
                style={{ width: 300, height: 175, borderRadius: 10 }}
              />
            </View>
            <View
              style={{ flexDirection: "row", marginRight: 240, marginTop: -49 }}
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
            marginTop: 20,
          }}
        >
          <View style={[styles.card, styles.elevation, styles.center]}>
            <View style={styles.center}>
              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 8,
                  marginRight: 145,
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
              <Image
                source={assets.postGuanabaraLarge02}
                style={{ width: 300, height: 175, borderRadius: 10 }}
              />
            </View>
            <View
              style={{ flexDirection: "row", marginRight: 240, marginTop: -49 }}
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
            marginTop: 20,
          }}
        >
          <View style={[styles.card, styles.elevation, styles.center]}>
            <View style={styles.center}>
              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 8,
                  marginRight: 145,
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
              <Image
                source={assets.postGuanabaraLarge03}
                style={{ width: 300, height: 175, borderRadius: 10 }}
              />
            </View>
            <View
              style={{ flexDirection: "row", marginRight: 240, marginTop: -49 }}
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
            marginTop: 20,
          }}
        >
          <View style={[styles.card, styles.elevation, styles.center]}>
            <View style={styles.center}>
              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 8,
                  marginRight: 145,
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
              <Image
                source={assets.postGuanabaraLarge04}
                style={{ width: 300, height: 175, borderRadius: 10 }}
              />
            </View>
            <View
              style={{ flexDirection: "row", marginRight: 240, marginTop: -49 }}
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
  );
};

const styles = StyleSheet.create({
  circleButton: {
    marginTop: 40,
    right: 330,
    transform: [{ rotate: "180deg" }],
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: "85%",
    marginVertical: 5,
  },

  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    height: 290,
  },
});

export default feedPostGuanabara;
