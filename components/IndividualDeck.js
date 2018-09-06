import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';

class IndividualDeck extends Component {
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
          <View>
              <Text>Add Question</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            {
              entryId: title,
              navTitle: title
            }
          )}>
          <View>
            <Text>Start Quiz</Text>
          </View>
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