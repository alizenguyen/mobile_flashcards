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

  navigateToDecksPage = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    const { questions } = this.props
    const { currentQuestion, showQuestion, correct, incorrect } = this.state

    console.log(questions.length)
    console.log(currentQuestion)
    console.log(questions)
    return (
      <View>
        <Text>
          {currentQuestion < questions.length
            ? [(showQuestion
                ? <View>
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
                : <View>
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
                <TouchableOpacity 
                    onPress={this.navigateToDecksPage}
                  >
                  <Text>
                    Back to decks.
                  </Text>
                </TouchableOpacity>
              </View>
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