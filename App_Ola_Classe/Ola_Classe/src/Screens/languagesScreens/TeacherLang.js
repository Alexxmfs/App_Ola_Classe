import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import ButtonCat from '../../components/Button'
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../../constants';
import { CircleButton, ButtonSubmit } from '../../components/Button';


const TeacherLang = ({navigation}) => {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#FFF'}}>
      <ScrollView>
        <View style={styles.circleButton}>
        <CircleButton 
         imgUrl = {assets.next}
         onPress={() => navigation.navigate("StudentOrTeacher")}
        />
     </View>
     <View style={styles.containerText}>
     <Text style={{ marginTop: 15, fontSize: SIZES.large - 3, fontFamily: FONTS.semiBold}}>Você tem experiência em quais áreas?</Text>  
     </View>
      <ButtonCat />
      <ButtonSubmit 
      onPress={() => navigation.navigate("SignUpScreen")}
              />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  containerText: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10
  },
  circleButton: {
      marginRight: 325,
      marginTop: 40,
      transform: [{ rotate: "180deg"}]
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
  
})



export default TeacherLang