import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { purple } from '../utils/colors'

class Quiz extends Component {
  state = {
    correct: 0,
    incorrect: 0,
  }

  render() {
    return (
      <View>
        <Text>Test</Text>
      </View>
    )
  }
}

function mapStateToProps (state, {navigation}) {
  const { entryId } = navigation.state.params
  const questions = state[entryId].questions

  console.log(questions)
  return {
    questions: questions
  }
}

export default connect(mapStateToProps)(Quiz)