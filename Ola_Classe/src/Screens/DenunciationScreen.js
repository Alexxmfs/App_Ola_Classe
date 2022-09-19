import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { assets } from "../../constants";
import { CircleButton } from "../components/Button";

export const DenunciationScreen = ({ navigation}) => {

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.circleButton}>
        <CircleButton
          imgUrl={assets.next}
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </View>

      <Text style={styles.titleDenuncia}>Denúncia</Text>

      <View>
        <Image source={assets.imageDenunciation} />
      </View>

      <View style={styles.containDesc}>
        <Text style={styles.Desc}>
          Você deseja denunciar o {"\n"} canal por qual motivo?
        </Text>
      </View>

      <TextInput
        style={{
          width: 250,
          height: 70,
          backgroundColor: "#b8cdf5",
          borderRadius: 8,
          padding: 8,
          marginTop: 40,
          textAlignVertical: "top",
          fontSize: 15,
        }}
        numberOfLines={4}
        multiline
        placeholder="Digite o @ do usuario e descreva o post indevido"
      />

      <View style={{marginTop: 40}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Denunciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containDesc: {
    width: "85%",
    marginTop: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  circleButton: {
    marginTop: -120,
    right: 150,
    transform: [{ rotate: "180deg" }],
  },
  titleDenuncia: {
    paddingBottom: 70,
    fontWeight: "700",
    fontSize: 22,
  },
  Desc: {
    fontWeight: "500",
    fontSize: 22,
  },
  button: {
    width: 110,
    height: 40,
    backgroundColor: "#0A58EE",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  textButton: {
  color: '#FFF', fontSize: 18, fontWeight: '700',
  }
});

export default DenunciationScreen