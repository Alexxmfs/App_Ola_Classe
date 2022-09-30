import React from "react";
import { assets } from "../../../constants";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { CircleButton } from "../../components/Button";
import { RadioButton } from "react-native-paper";

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

      <View style={{ flexDirection: "row", marginTop: 30, marginLeft: 15 }}>
        <ButtonRadio />
      </View>

      <View style={{marginTop: 50, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity style={styles.buttonDelete}>
          <Text style={styles.textExcluir}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const ButtonRadio = () => {
  const [checked, setChecked] = React.useState(null);

  return (
    <View style={{ flexDirection: "row" }}>
      <RadioButton
        value="first"
        status={checked === "first" ? "checked" : "unchecked"}
        onPress={() => setChecked("first")}
      />
      <View style={{ width: "85%", marginLeft: 15 }}>
        <Text style={{ fontSize: 16 }}>
          A exclusão da sua conta é permanente. Ao excluir sua conta do Olá
          Classe, você não poderá recuperar o conteúdo ou informações que
          compartilhou no Olá classe.
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
  buttonDelete: {
    width: 280,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#0A58EE",
    alignItems: 'center',
    justifyContent: 'center',
  },
  textExcluir: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFF'
  }
});
export default DeleteAccountScreen;
