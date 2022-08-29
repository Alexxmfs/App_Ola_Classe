import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { VideoGuanabara } from '../../components/Videos'
import { CircleButton } from '../../components/Button';
import { assets } from '../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconLike, IconWarning, IconSave, IconComment }   from '../../components/IconsCard';


const OpenVideoGuanabara = ({navigation}) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.circleButton}>
             <CircleButton 
                imgUrl = {assets.next}
                onPress={() => navigation.navigate("HomeScreen")}
          />
       </View>

       <View style={{marginTop: 20, marginRight: 15, flexDirection: 'row'}}>
        <Image 
        style={{width: 50, height: 50}}
        source={assets.ImgCursoEmVideo}
        />
           <Text style={{marginLeft: 15, marginTop: 9 ,fontSize: 19, fontWeight: '600'}}>Curso em Video</Text>
            
            <View style={{marginLeft: 90, marginTop: 5}}>
              <TouchableOpacity style={styles.buttonSeguir}>
                <Text style={styles.textSeguir}>Seguir</Text>
              </TouchableOpacity>
            </View>

       </View>

          <View style={{paddingTop: 10, marginRight: 80}}>
              <Text style={styles.title}>Curso Python #01 - Seja um Programador</Text>
               <Text style={styles.visualizações}>5.396.597 visualizações 3 de abril de 2017</Text>
           </View>

          <View style={styles.center}>
                  <VideoGuanabara />
            </View>

            <View style={styles.containerIcons}>
                  <View style={{marginRight: 95, width: '100%'}}>
                    <IconLike />
                  </View>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    backgroundColor: 'red',
    marginTop: 5
  },
  circleButton: {
    marginTop: 50,
    right: 160,
    transform: [{ rotate: "180deg"}]
},
  buttonSeguir: {
    backgroundColor: '#ACD3FC',
    width: 70,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  textSeguir: {
    fontSize: 15,
    fontWeight: '600',
  },
  title: {
    fontWeight: '600',
    fontSize: 16
  },  
  visualizações: {
    color: '#898989'
  },
  containerIcons: {
    marginTop: 15,
    flexDirection: 'row',
    backgroundColor: '#ACD3FC',
    width: 150,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default OpenVideoGuanabara