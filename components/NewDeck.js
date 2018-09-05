import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Platform, StyleSheet, KeyboardAvoidingView, } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux';
import { purple, black, white, gray } from '../utils/colors'
import { savingDeck } from '../actions'
import { handleSaveDeckTitle } from '../utils/api'

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
class NewDeck extends React.Component {
  state = {
    deckTitle: '',
    errorNotice: false
  };

  handleSubmit = () => {
    if (this.state.deckTitle) {
      const { deckTitle } = this.state;

      handleSaveDeckTitle(deckTitle);

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
      <KeyboardAvoidingView style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center'
        }}
        behavior="padding"
      >
        <View style={styles.center}>
          <View styles={styles.row}>
            <Text>What is the title of your new deck?</Text>
          </View>
          <View styles={styles.row}>
            <FormInput
                placeholder='Question Title'
                placeholderTextColor='gray'
                style={{width: 10}}
                onChangeText={deckTitle => this.setState({ deckTitle })}
                value={this.state.deckTitle}
              />
            <FormValidationMessage>
              {this.state.errorMessage ? 'Please input a deck title.': ''}
            </FormValidationMessage>
          </View>
          <SubmitBtn onPress={this.handleSubmit} />
        </View>
      </KeyboardAvoidingView>
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

function mapStateToProps (state, props) {
  // console.log(state)
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(NewDeck)