import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { loadDecks } from '../actions'
import { purple } from '../utils/colors'

class Quiz extends Component {

  render() {
    return (
      <View>
        Test
      </View>
    )
  }
}

function mapStateToProps (state, props) {

}

export default connect(mapStateToProps, {loadDecks})(Decks)