import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function TitleScreen () {

  return (
    <View>
      <ImageBackground 
        source={require('../assets/images/title_background.png')}
        style={styles.backgroundImage}
        imageStyle={{resizeMode: 'cover'}}
      >
        <Text>test</Text>
        {/* <MaterialCommunityIcons
          name={'cards-outline'}
          size={100}
        /> */}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  }
});