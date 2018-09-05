import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
// import { createStackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Constants } from 'expo'
import { purple, white } from './utils/colors'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    //CONSTANTS COMES WITH THE STATUS BAR HEIGHT FOR EACH PlATFORM SO WE DON'T HAVE TO KNOW THE EXACT NUMBER
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

// const MainNavigator = createStackNavigator({
//   Home: {
//     screen: Tabs,
//     navigationOptions: {
//       header: null
//     } 
//   },
//   EntryDetail: {
//     screen: EntryDetail,
//     navigationOptions: {
//       headerTintColor: white,
//       headerStyle: {
//         backgroundColor: purple,
//       }
//     }
//   }
// })

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <Text>Test</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
