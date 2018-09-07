import React from 'react'
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function TitleScreen () {
  return (
    <View>
      <MaterialCommunityIcons
        name={'cards-outline'}
        size={100}
      />
    </View>
  )
}