import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Quiz extends Component {
  state = {
    currentQuestion: 0,
    correct: 0,
    incorrect: 0,
    showQuestion: true,
  }

  restartQuiz = () => {
    this.setState(() =>{
      return {
        showQuestion: true,
        currentQuestion: 0,
        correct: 0,
        incorrect: 0
      }
    })

    clearLocalNotification()
      .then(setLocalNotification)
  }

  navigateToDecksPage = () => {
    this.props.navigation.navigate('Home');

    clearLocalNotification()
      .then(setLocalNotification)
  }

  render() {
    const { questions } = this.props
    const { currentQuestion, showQuestion, correct, incorrect } = this.state

    return (
      <View>
        <View>
          {currentQuestion < questions.length
            ? [(showQuestion
                ? <View key={questions[currentQuestion].question}>
                    <Text>Question: {currentQuestion + 1}/{questions.length} </Text>
                    <Text>{questions[currentQuestion].question}</Text>
                    {/* View Answer Button */}
                    <TouchableOpacity 
                      onPress={() => {
                        this.setState({
                          showQuestion: false
                        });
                      }}
                    >
                      <Text>
                        View Answer
                      </Text>
                    </TouchableOpacity>
                    {/* Correct Button */}
                    <TouchableOpacity 
                      onPress={() => {
                        this.setState({
                          currentQuestion: currentQuestion + 1,
                          correct: correct + 1
                        });
                      }}
                    >
                      <Text>
                        Correct
                      </Text>
                    </TouchableOpacity>
                    {/* Incorrect Button */}
                    <TouchableOpacity 
                      onPress={() => {
                        this.setState({
                          currentQuestion: currentQuestion + 1,
                          correct: correct + 1
                        });
                      }}
                    >
                      <Text>
                        Incorrect
                      </Text>
                    </TouchableOpacity>
                  </View>
                : <View key={questions[currentQuestion].question}>
                    <Text>Question: {currentQuestion + 1}/{questions.length} </Text>
                    <Text>{questions[currentQuestion].answer}</Text>
                    {/* View Question Button */}
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          showQuestion: true
                        });
                      }}
                    >
                      <Text>
                        Return to Question
                      </Text>
                    </TouchableOpacity>
                    {/* Correct Button */}
                    <TouchableOpacity 
                      onPress={() => {
                        this.setState({
                          currentQuestion: currentQuestion + 1,
                          correct: correct + 1
                        });
                      }}
                    >
                      <Text>
                        Correct
                      </Text>
                    </TouchableOpacity>
                    {/* Incorrect Button */}
                    <TouchableOpacity 
                      onPress={() => {
                        this.setState({
                          currentQuestion: currentQuestion + 1,
                          correct: correct + 1
                        });
                      }}
                    >
                      <Text>
                        Incorrect
                      </Text>
                    </TouchableOpacity>
                  </View>)]
            : <View> 
                <Text>No more questions.</Text>
                <Text>You scored {correct}/{questions.length}.</Text>
                <TouchableOpacity 
                    onPress={this.restartQuiz}
                  >
                  <Text>
                    Restart Quiz.
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={this.navigateToDecksPage}
                  >
                  <Text>
                    Back to decks.
                  </Text>
                </TouchableOpacity>
              </View>
          }
        </View>
      </View>
    )
  }
}

function mapStateToProps (state, {navigation}) {
  const { entryId } = navigation.state.params
  const questions = state[entryId].questions

  console.log(questions)
  return {
    qID: entryId,
    questions: questions
  }
}

export default connect(mapStateToProps)(Quiz)