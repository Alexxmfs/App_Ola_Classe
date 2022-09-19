import React from "react";
import { assets } from "../../../constants";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { CircleButton } from "../../components/Button";

const DeleteAccountScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.circleButton}>
        <CircleButton
          imgUrl={assets.next}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{ marginLeft: 80, marginTop: -40 }}>
        <Text style={styles.titleDeleteAccount}>Configurações de Conta</Text>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
        }}
      >
        <Text style={{ fontSize: 18, width: "90%" }}>
          Se quiser excluir definitivamente sua conta do Olá Classe, avise-nos.
        </Text>
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
  titleDeleteAccount: {
    fontSize: 20,
    fontWeight: "600",
  },
});
export default DeleteAccountScreen;
