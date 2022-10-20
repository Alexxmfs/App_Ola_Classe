import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { VideoDechamps } from '../../components/Videos'
import { CircleButton, ButtonImagens, ButtonVideos } from '../../components/Button';
import { assets } from '../../../constants';
import { IconLike, IconWarning, IconSave, IconComment, IconDislike }   from '../../components/IconsCard';


const OpenVideoGuanabara = ({navigation}) => {
  return (
      <ScrollView>
      <View style={{ alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.circleButton}>
             <CircleButton 
                imgUrl = {assets.next}
                onPress={() => navigation.navigate("HomeScreen")}
          />
       </View>

       <View style={{marginTop: 20, marginRight: 15, flexDirection: 'row'}}>
        <Image 
        style={{width: 50, height: 50, borderRadius: 50}}
        source={assets.imgDechamps}
        />

        <TouchableOpacity
        onPress={() => navigation.navigate("#")}>
           <Text style={{marginLeft: 5, marginTop: 9 ,fontSize: 19, fontWeight: '600'}}>Filipe Deschamps</Text>
           </TouchableOpacity>
           
            <View style={{marginLeft: 90, marginTop: 5}}>
              <TouchableOpacity style={styles.buttonSeguir}>
                <Text style={styles.textSeguir}>Seguir</Text>
              </TouchableOpacity>
            </View>

       </View>

          <View style={{paddingTop: 10, marginRight: 100}}>
              <Text style={styles.title}>Um dos conceitos mais importantes...</Text>
               <Text style={styles.visualizações}>200.457 visualizações 30 de out. de 2019</Text>
           </View>

          <View style={styles.center}>
                  <VideoDechamps />
            </View>

            <View style={styles.containerIcons}>
                  <View style={{marginRight: 90, width: '100%'}}>
                      <View style={{marginTop: 25, marginLeft: 14}}>
                        <IconLike />
                      </View>
                          <View style={{left: 87, marginTop: -62}}>
                            <IconDislike />
                          </View>
                              <View style={{left: -5, top: -76}}>
                               <IconComment />
                             </View>
                  </View>
            </View>



      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
        <Text style={{fontSize: 16, fontWeight: '700', marginRight: 290}}>Videos</Text>
        <View style={[styles.card, styles.elevation, styles.centerVideo]}>
          <View style={styles.centerVideo}>
            <View style={{flexDirection: 'row', paddingBottom: 2, paddingTop: 5, marginRight: 130}}>
              <Image 
              style={{width: 40, height: 40, marginRight: 235, marginTop: -8}}
              source={assets.ImgCursoEmVideo}
              />
               <Text style={{marginLeft: -225, fontWeight: '600', fontSize: 16}}>Curso em Video</Text>
               </View>

               <TouchableOpacity
                    onPress={() => navigation.navigate("#")}
                  >
                   <Image 
                    source={assets.tumbnailGuanabara2}
                    style={{width: 300, height: 175, borderRadius: 10}}
                    />
                  </TouchableOpacity>  
                     <View style={{paddingTop: 5}}>
                       <Text
                        style={{
                          fontWeight: '700',
                          fontSize: 16
                        }}>
                             Curso Python #02 - Para que serve o Python?
                        </Text>
                     </View>
            </View>

            <View style={{flexDirection: 'row', paddingTop: 10, marginRight: 240, marginTop: -49}}>
                    <IconLike />
                    <IconWarning />
                    <IconComment />
                    </View>
          </View>
          </View>

      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
        <View style={[styles.card, styles.elevation, styles.centerVideo]}>
          <View style={styles.centerVideo}>
            <View style={{flexDirection: 'row', paddingBottom: 2, paddingTop: 5, marginRight: 85}}>
              <Image 
              style={{width: 40, height: 40, borderRadius: 50, marginRight: 235, marginTop: -8}}
              source={assets.imgSujeitoProgramador}
              />
               <Text style={{marginLeft: -225, fontWeight: '600', fontSize: 16}}>Sujeito Programador</Text>
               </View>

               <TouchableOpacity
                    onPress={() => navigation.navigate("OpenVideoGuanabara")}
                  >
                   <Image 
                    source={assets.tumbnailSujeitoProgram}
                    style={{width: 300, height: 175, borderRadius: 10}}
                    />
                  </TouchableOpacity>  
                     <View style={{paddingTop: 5}}>
                       <Text
                        style={{
                          fontWeight: '700',
                          fontSize: 16
                        }}>
                             Entender Context API com React Native de uma vez por todas! ✅
                        </Text>
                     </View>
            </View>

            <View style={{flexDirection: 'row', paddingTop: 10, marginRight: 240, marginTop: -49}}>
                    <IconLike />
                    <IconWarning />
                    <IconComment />
                    </View>
          </View>
          </View>


          </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    marginTop: 5,
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
    borderWidth: 2,
    borderColor: '#ACD3FC',
    width: 155,
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerVideo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 310,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    paddingTop: 5,
    width: 325,
    marginVertical: 5,
  },

  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },

});

export default OpenVideoGuanabara