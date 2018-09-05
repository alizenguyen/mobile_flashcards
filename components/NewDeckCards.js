import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux';
import { purple, black, white, gray } from '../utils/colors'
import { handleAddCardToDeck } from '../utils/api'

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
class NewDeckCards extends React.Component {
  state = {
    cardTitle: '',
    cardAnswer: '',
    errorNotice: false
  };

  handleSubmit = () => {
    if (this.state.cardTitle && this.state.cardAnswer) {
      const { cardTitle, cardAnswer } = this.state;

      handleAddCardToDeck(deckTitle, cardAnswer);

      this.setState({
        errorMessage: false,
        titleText: ''
      });

    //   this.props.navigation.navigate(
    //     'NewDeckCards',
    //     {
    //       entryId: titleText,
    //       navTitle: titleText
    //     },
    //     Keyboard.dismiss()
    //   );
    // } else {
    //   this.setState({ errorMessage: true })
    // }

    };
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

// const mapStateToProps = state => {

// };

export default NewDeckCards