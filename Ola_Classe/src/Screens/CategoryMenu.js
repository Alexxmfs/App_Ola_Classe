import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { CircleButton } from '../components/Button';
import { SIZES, assets } from '../../constants';

const CategoryMenu = ({navigation}) => {
  return (
<View>
  <ScrollView>
    <View >
        <View style={styles.circleButton}>
             <CircleButton 
                imgUrl = {assets.next}
                onPress={() => navigation.navigate("HomeScreen")}
        />
     </View>

        <View style={{marginLeft: 80, marginTop: 8}}>
            <Text    
                style={{
                    fontSize: SIZES.medium + 4,
                    fontWeight: '600',
                    marginTop: -50
                    }}>
                        Categorias
            </Text>
       </View>

                  
       <View style={styles.center}>
       <TouchableOpacity style={styles.center}
        onPress={() => navigation.navigate("CategoryAngularScreen")}
       >
        
          <View style={[styles.card, styles.elevation, styles.center]}>
            <View style={styles.center}>
                <Image 
                  source={assets.CatAngularMenu}
                  style={{width: 300, height: 175, borderRadius: 10}}
                   />
                 <Text style={styles.heading}>
                   Angular
                  </Text>
              </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.center}>
          <View style={[styles.card, styles.elevation, styles.center]}>
            <View style={styles.center}>
                <Image 
                  source={assets.CatCSharpMenu}
                  style={{width: 300, height: 175, borderRadius: 10}}
                   />
                 <Text style={styles.heading}>
                   C Sharp
                  </Text>
              </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.center}>
          <View style={[styles.card, styles.elevation, styles.center]}>
            <View style={styles.center}>
                <Image 
                  source={assets.CathtmMenu}
                  style={{width: 300, height: 175, borderRadius: 10}}
                   />
                 <Text style={styles.heading}>
                   HTML
                  </Text>
              </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.center}>
          <View style={[styles.card, styles.elevation, styles.center]}>
            <View style={styles.center}>
                <Image 
                  source={assets.CatCSSMenu}
                  style={{width: 300, height: 175, borderRadius: 10}}
                   />
                 <Text style={styles.heading}>
                   CSS
                  </Text>
              </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.center}>
          <View style={[styles.card, styles.elevation, styles.center]}>
            <View style={styles.center}>
                <Image 
                  source={assets.CatJsMenu}
                  style={{width: 300, height: 175, borderRadius: 10}}
                   />
                 <Text style={styles.heading}>
                   JavaScript
                  </Text>
              </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.center}>
          <View style={[styles.card, styles.elevation, styles.center]}>
            <View style={styles.center}>
                <Image 
                  source={assets.CatDartMenu}
                  style={{width: 300, height: 175, borderRadius: 10}}
                   />
                 <Text style={styles.heading}>
                   Dart
                  </Text>
              </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.center}>
          <View style={[styles.card, styles.elevation, styles.center]}>
            <View style={styles.center}>
                <Image 
                  source={assets.CatJavaMenu}
                  style={{width: 300, height: 175, borderRadius: 10}}
                   />
                 <Text style={styles.heading}>
                   Java
                  </Text>
              </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.center}>
          <View style={[styles.card, styles.elevation, styles.center]}>
            <View style={styles.center}>
                <Image 
                  source={assets.CatKotlinMenu}
                  style={{width: 300, height: 175, borderRadius: 10}}
                   />
                 <Text style={styles.heading}>
                   Kotlin
                  </Text>
              </View>
            </View>
            </TouchableOpacity>

       </View>
    </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  circleButton: {
      marginTop: 40,
      right: 330,
      transform: [{ rotate: "180deg"}]
  },

  heading: {
    paddingTop: 5,
    fontSize: 17,
    fontWeight: '600',
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '90%',
    marginVertical: 5,
  },

  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default CategoryMenu