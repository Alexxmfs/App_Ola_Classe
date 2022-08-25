import React from 'react';
import { StyleSheet, View } from 'react-native';
import { VideoGuanabara } from '../../components/Videos'

const OpenVideoSreen = () => {
  return (
    <View>
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
    marginTop: 100
  }
});

export default OpenVideoSreen