import { assets} from "../../constants";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Menu = ({ navigation }) => {
  // const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("FriendsMenu")}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 3,
            paddingLeft: 13,
            paddingRight: 35,
            borderRadius: 8,
            marginTop: -40,
          }}
        >
          <Image
            source={assets.iconFriends}
            style={{ width: 35, height: 35 }}
          ></Image>
          <Text style={{ fontSize: 17, fontWeight: "bold", paddingLeft: 15 }}>
            Amigos
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("CategoryMenu")}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 8,
            paddingLeft: 13,
            paddingRight: 35,
            borderRadius: 8,
            marginTop: 15,
          }}>
          <Image
            source={assets.iconCategory}
            style={{ width: 35, height: 35 }}
          ></Image>
          <Text style={{ fontSize: 17, fontWeight: "bold", paddingLeft: 15 }}>
            Categoria
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SavedItemsMenu")}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 8,
            paddingLeft: 13,
            paddingRight: 35,
            borderRadius: 8,
            marginTop: 15,
          }}
        >
          <Image
            source={assets.iconSaved}
            style={{
              width: 35,
              height: 35,
            }}
          ></Image>

          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              paddingLeft: 15,
            }}
          >
            Itens Salvos
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("TermsUseMenu")}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 8,
            paddingLeft: 13,
            paddingRight: 35,
            borderRadius: 8,
            marginTop: 15,
          }}
        >
          <Image
            source={assets.iconTermsUse}
            style={{
              width: 35,
              height: 35,
            }}
          ></Image>

          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              paddingLeft: 15,
            }}
          >
            Termos de Uso
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ConfigMenu")}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 8,
            paddingLeft: 13,
            paddingRight: 35,
            borderRadius: 8,
            marginTop: 15,
          }}
        >
          <Image
            source={assets.iconConfig}
            style={{
              width: 35,
              height: 35,
            }}
          ></Image>

          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              paddingLeft: 15,
            }}
          >
            Configuração
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#98C2FF",
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
  },
  containerSafeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  HeaderOlaClasse: {
    marginTop: -69,
    marginLeft: 12,
  },
});

export default Menu;