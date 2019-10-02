import React, { Component } from 'react'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { NavigationActions } from 'react-navigation';
import Homescreen from './components/HomescreenComponent'
import { expression } from '@babel/template';
import Post from './components/PostComponent'
import Comment from './components/CommentComponent'
import Commentscreen from './components/CommentscreenComponent';
import HelloWorld from './components/eso'

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

const AppNavigation = createStackNavigator({
  Home: Homescreen,
  Comments: Commentscreen,
})
const AppContainer = createAppContainer(AppNavigation);