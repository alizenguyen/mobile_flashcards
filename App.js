import React from 'react';
import ReduxThunk from 'redux-thunk';
import { View, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { azure, white } from './utils/colors'
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
import NewDeckCards from './components/NewDeckCards'
import IndividualDeck from './components/IndividualDeck'
import TitleScreen from './components/TitleScreen'
import Quiz from './components/Quiz'
import logger from './middlewares/logger'
import { setLocalNotification } from './utils/helpers'

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
    activeTintColor: Platform.OS === 'ios' ? azure : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : azure,
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
  Title: {
    screen: TitleScreen,
    navigationOptions: {
      header: null
    },
  },
  Home: {
    screen: Tabs,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: azure,
      }
    } 
  },
  DeckHome: {
    screen: IndividualDeck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: azure,
      }
    } 
  },
  NewCard: {
    screen: NewDeckCards,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: azure,
      }
    } 
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: azure,
      }
    } 
  },
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk, logger))

    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <MainNavigator style={{backgroundColor: white}}/>
        </View>
      </Provider>
    );
  }
}
