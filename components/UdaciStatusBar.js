import React from 'react';
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'

export default function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    //CONSTANTS COMES WITH THE STATUS BAR HEIGHT FOR EACH PlATFORM SO WE DON'T HAVE TO KNOW THE EXACT NUMBER
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}