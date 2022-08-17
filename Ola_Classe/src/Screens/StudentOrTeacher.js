import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { CircleButton, ButtonTeacher, ButtonStudent } from '../components/Button'
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../constants';

const StudentOrTeacher = ({navigation}) => {
  return (
    <View>
    <View style={styles.circleButton}>
        <CircleButton 
         imgUrl = {assets.next}
         onPress={() => navigation.navigate("RegistryScreen")}
        />
     </View>
         <View>
     <Text
      style={
        {fontSize: SIZES.extraLarge + 2,
         fontFamily: FONTS.bold,
         marginTop: 40,
         marginLeft: 35
         }}>
            Quem é você?
    </Text>
         </View>
         <View style={styles.container}>
            <Image 
            source={assets.teacher} />
            <ButtonTeacher 
           onPress={() => navigation.navigate("TeacherLang")}
          />
         </View>
         <View style={styles.student}>
            <Image 
            styles={{width: 100, height: 150}}
            source={assets.student} />
            <ButtonStudent 
          onPress={() => navigation.navigate("StudentLang")}
          />
         </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    student: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -40
    },
    circleButton: {
        top: 40,
        right: 330,
        transform: [{ rotate: "180deg"}]
    },
    
})

export default StudentOrTeacher