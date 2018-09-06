import React from 'react';
import ReduxThunk from 'redux-thunk';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Constants } from 'expo'
import { purple, white } from './utils/colors'
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
import IndividualDeck from './components/IndividualDeck'
import logger from './middlewares/logger'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    //CONSTANTS COMES WITH THE STATUS BAR HEIGHT FOR EACH PlATFORM SO WE DON'T HAVE TO KNOW THE EXACT NUMBER
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    } 
  },
  DeckHome: {
    screen: IndividualDeck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    } 
  },
})

export default class App extends React.Component {
  render() {
    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk, logger))

    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
