import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Platform, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux';
import { purple, black, white, gray } from '../utils/colors'
import { handleSaveDeckTitle } from '../utils/api'
import { saveDeck } from '../actions'

//New Deck Comonent
class IndividualDeck extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   const { entryId } = navigation.state.params
  //   console.log(entryId)
  // }

  render () {
    const { title, entryId, metrics } = this.props

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
              <Text>Add Card</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate(
            'DeckHome',
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