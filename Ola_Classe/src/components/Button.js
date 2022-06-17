import { TouchableOpacity, View, Text, Image } from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS, assets} from "../../constants";

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
            style={{ width: 45, height: 45}}
            />

        </TouchableOpacity>
        )
}