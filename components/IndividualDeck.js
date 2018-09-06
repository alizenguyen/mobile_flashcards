import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';


class IndividualDeck extends Component {

  navigateToQuiz = () => {
    const { title } = this.props

    this.props.navigation.navigate(
      'Quiz',
      {
        entryId: title,
        navTitle: title
      }
    )
  }

  render () {
    const { title, metrics } = this.props

    return (
      <View>
        <View>
          <Text>{title}</Text>
          <Text>{metrics.questions.length} cards</Text>
        </View>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate(
            'NewCard',
            {
              entryId: title,
              navTitle: title
            }
          )}>
              <Text>Add Question</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={this.navigateToQuiz}>
            <Text>Start Quiz</Text>
        </TouchableOpacity>
    </View>
    )
  }
}
  
function mapStateToProps (state, { navigation }) {
  const { entryId } = navigation.state.params

   return {
    entryId,
    metrics: state[entryId],
    title: state[entryId].title
  }
}

export default connect(mapStateToProps)(IndividualDeck)