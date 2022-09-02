import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Statusbar,
  Dimensions,
  Image
} from 'react-native';

const images = [
  'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
  'https://images.unsplash.com/photo-1592561199818-6b69d3d1d6e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
  'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
];

const WIDTH = Dimensions.get('window').window;
const HEIGHT = Dimensions.get('window').height;

const App = () => {
  const [imgActive, setimgActive] = useState(0);

 const onchange = (nativeEvent) => {
      if(nativeEvent) {
        const slide =  Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide != imgActive) {
          setimgActive(slide);
        }
      }
  }
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
          <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
          >
            {
              images.map((e, index) => 
                  <Image 
                    key={e}
                    resizeMode='stretch'
                    style={styles.wrap}
                    source={{uri: e}}
                  />
              )
            }
          </ScrollView>
          <View style={styles.wrapDot}>
              {
                images.map((e, index) => 
                  <Text key={e}
                   style={imgActive == index ? styles.dotActive : styles.dot}
                   >
                     ⚫︎   
                   </Text>
                )
              }
          </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    resizeMode: 'cover',
    width: 393,
    height: 200
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dotActive: {
    margin: 3,
    color: 'black'
  },
  dot: {
    margin: 3,
    color: 'white'
  }
});

export default App
