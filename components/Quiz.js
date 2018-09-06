import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { purple } from '../utils/colors'

class Quiz extends Component {
  state = {
    currentQuestion: 0,
    correct: 0,
    incorrect: 0,
    showQuestion: true,
  }

  render() {
    const { questions } = this.props
    const { currentQuestion, showQuestion } = this.state

    console.log(questions.length)
    console.log(currentQuestion)
    console.log(questions)
    console.log(questions[currentQuestion].question)
    return (
      <View>
        <Text>
          {currentQuestion < questions.length
            ? [(showQuestion
                ? <View>
                    <Text>{questions[currentQuestion].question}</Text>
                    <TouchableOpacity>
                      <Text>
                        View Answer
                      </Text>
                    </TouchableOpacity>
                  </View>
                : <View>
                    <Text>{questions[currentQuestion].answer}</Text>
                    <TouchableOpacity>
                      <Text>
                        Return to Question
                      </Text>
                    </TouchableOpacity>
                  </View>)]
            : <Text>No more questions.</Text>
          }
        </Text>
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