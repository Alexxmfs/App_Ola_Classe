import { TouchableOpacity, View, Text, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, SIZES, SHADOWS, FONTS, assets, DarkBlue } from "../../constants";

export const CircleButton =({ imgUrl, onPress }) => {
    return (
        <TouchableOpacity
        style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.extraLarge,
        }}
        onPress={onPress}
        >
            <Image
            source={imgUrl}
            resizeMode="contain"
            style={{ width: 60, height: 60}}
            />

        </TouchableOpacity>
        )
}

export const ButtonWhite = ({ onPress }) => {
    return (
      <TouchableOpacity
      style={{
        width: 134,
        height: 50,
        borderWidth: 2,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium - 3,
        borderColor: COLORS.DarkBlue,

        padding: SIZES.small - 2,
      }}
      onPress={onPress}
    >

      <Text style={{ 
        fontFamily: FONTS.bold,
        color: COLORS.DarkBlue,
        fontSize: SIZES.font + 2,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Entrar
      </Text>
  
      </TouchableOpacity>
    )
  }

  export const ButtonBlue = ({ onPress }) => {
    return (
      <TouchableOpacity
      style={{
        width: 134,
        height: 50,
        backgroundColor: COLORS.DarkBlue,
        borderRadius: SIZES.medium - 3,

        padding: SIZES.small,
      }}
      onPress={onPress}
    >

      <Text style={{ 
        fontFamily: FONTS.bold,
        color: COLORS.white,
        fontSize: SIZES.font + 2,
        marginRight: 7 
      }}>
        Criar Conta
      </Text>
  
      </TouchableOpacity>
    )
  }