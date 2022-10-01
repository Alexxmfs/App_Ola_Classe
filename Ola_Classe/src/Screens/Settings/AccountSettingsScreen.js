import React from "react";
import { assets } from "../../../constants";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { CircleButton } from "../../components/Button";

const AccountSettingsScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.circleButton}>
        <CircleButton
          imgUrl={assets.next}
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </View>
      <View style={{ marginLeft: 80, marginTop: -40 }}>
        <Text style={styles.titleConfig}>Configurações de Conta</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("#")}>
        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Text style={{ fontSize: 17, marginLeft: 15 }}>Editar Perfil</Text>

          <Image
            source={assets.arrowBlue}
            style={{ width: 25, height: 25, marginLeft: 250, marginTop: -5 }}
          />
        </View>
      </TouchableOpacity>

      <View>
        <Image
          source={assets.headerLine}
          style={{ width: 400, marginTop: 5 }}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("#")}>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ fontSize: 17, marginLeft: 15 }}>Recuperar Conta</Text>

          <Image
            source={assets.arrowBlue}
            style={{ width: 25, height: 25, marginLeft: 210, marginTop: -5 }}
          />
        </View>
      </TouchableOpacity>

      <View>
        <Image
          source={assets.headerLine}
          style={{ width: 400, marginTop: 5 }}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("DeleteAccountScreen")}
      >
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ fontSize: 17, marginLeft: 15 }}>Excluir Conta</Text>

          <Image
            source={assets.arrowBlue}
            style={{ width: 25, height: 25, marginLeft: 235, marginTop: -5 }}
          />
        </View>
      </TouchableOpacity>

      <View>
        <Image
          source={assets.headerLine}
          style={{ width: 400, marginTop: 5 }}
        />
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
  titleConfig: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default AccountSettingsScreen;
