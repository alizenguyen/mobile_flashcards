import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Platform, StyleSheet, Keyboard } from 'react-native'
import { FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux';
import { purple, white } from '../utils/colors'
import { handleAddCardToDeck } from '../utils/api'
import { addCardToDeck } from '../actions'

//Submit button for adding a new deck
function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>Create Deck</Text>
    </TouchableOpacity>
  )
}

//New Deck Comonent
class NewDeckCards extends Component {
  state = {
    cardTitle: '',
    cardAnswer: '',
    errorNotice: false
  };

  handleSubmit = () => {
    if (this.state.cardTitle && this.state.cardAnswer) {
      const { cardTitle, cardAnswer } = this.state;
      const { title } = this.props;

      const card = {
        question: cardTitle,
        answer: cardAnswer
      }

      handleAddCardToDeck(title, card)
      this.props.dispatch(addCardToDeck(title, card));

      this.setState({
        errorMessage: false,
        titleText: ''
      });

      this.props.navigation.navigate(
        'DeckHome',
        {
          entryId: title,
          navTitle: title
        },
        Keyboard.dismiss()
      )
    } else {
      this.setState({ errorMessage: true })
    }
  }

  render() {

    return (
      <View style={styles.center}>
        <View styles={styles.row}>
          <Text>Input a Question.</Text>
        </View>
        <View styles={styles.row}>
          <FormInput
              placeholder='Card Title'
              placeholderTextColor='gray'
              onChangeText={cardTitle => this.setState({ cardTitle })}
              value={this.state.cardTitle}
          />
          <FormInput
              placeholder='Card Answer'
              placeholderTextColor='gray'
              onChangeText={cardAnswer => this.setState({ cardAnswer })}
              value={this.state.cardAnswer}
          />
          <FormValidationMessage>
            {this.state.errorMessage ? 'Please input a deck title.': ''}
          </FormValidationMessage>
        </View>
        <SubmitBtn onPress={this.handleSubmit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
  },
  androidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    marginTop: 40,
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
})

function mapStateToProps (state, { navigation }) {
  const { entryId } = navigation.state.params

   return {
    entryId,
    metrics: state[entryId],
    title: state[entryId].title
  }
}

export default connect(mapStateToProps)(NewDeckCards)