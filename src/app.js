import React, { Component } from 'react'
import NavigationExperimental from 'react-native-deprecated-custom-components'
import Movies from './Movies'
import Confirmation from './Confirmation'

const RouteMapper = (route, navigator) => {
  if (route.name === 'movies') {
    return <Movies navigator={navigator} />
  } else if (route.name === 'confirmation') {
    return <Confirmation code={route.code} navigator={navigator} />
  }
}

export default class App extends Component {
  render() {
    return (
      <NavigationExperimental.Navigator
        // Default to movies route
        initialRoute={{ name: 'movies' }}
        // Use FloatFromBottom transition between screens
        configureScene={(route, routeStack) => NavigationExperimental.Navigator.SceneConfigs.FloatFromBottom}
        // Pass a route mapper functions
        renderScene={RouteMapper}
      />
    )
  }
}