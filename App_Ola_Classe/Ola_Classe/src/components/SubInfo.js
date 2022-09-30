import { View, Text, Image } from 'react-native'
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';

export const IntroTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
    return (
        <View>
            <Text style={{ fontFamily: FONTS.semiBold, fontSize: titleSize, color: COLORS.primary }}>{title}</Text>
            <Text style={{ fontFamily: FONTS.regular, fontSize: subTitleSize, color: COLORS.primary }}>{subTitle}</Text>
        </View>
    )
}

export const EthPrice = ({ titleFirst })

// Não sei se vou usar ainda esse arquivo js
