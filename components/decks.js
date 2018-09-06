import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { loadDecks } from '../actions'
import { purple } from '../utils/colors'

class Decks extends Component {

  componentDidMount () {
    loadDecks();
    console.log(this.props.decks);
  }

  componentDidUpdate() {
    loadDecks();
    console.log(this.props.decks);
  }

  render() {
    return (
      <View>
        {Object.keys(this.props.decks).length === 0
          ? <Text style={{color: purple}}>Please add a deck.</Text>
          : this.props.deckArray.map(
            (deck) => { 
              return (
                <TouchableOpacity key={deck.title}>
                  <View>
                      <Text>{deck.title}</Text>
                      <Text>{`${deck.questions.length} cards`}</Text>
                  </View>
                </TouchableOpacity>
              )}
            )
        }
      </View>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    decks: state,
    deckArray: Object.values(state)
  }
}

export default connect(mapStateToProps, {loadDecks})(Decks)

