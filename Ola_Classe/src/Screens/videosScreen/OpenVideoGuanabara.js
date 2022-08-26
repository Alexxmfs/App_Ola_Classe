import React from 'react';
import { StyleSheet, View } from 'react-native';
import { VideoGuanabara } from '../../components/Videos'
import { CircleButton } from '../../components/Button';
import { assets } from '../../../constants';

const OpenVideoGuanabara = ({navigation}) => {
  return (
    <View>
        <View style={styles.circleButton}>
             <CircleButton 
                imgUrl = {assets.next}
                onPress={() => navigation.navigate("HomeScreen")}
          />
       </View>
          <View style={styles.center}>
                  <VideoGuanabara />
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
    marginTop: 10
  },
  circleButton: {
    marginTop: 50,
    right: 330,
    transform: [{ rotate: "180deg"}]
},
});

export default OpenVideoGuanabara