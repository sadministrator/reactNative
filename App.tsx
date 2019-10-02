import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {Dimensions } from "react-native";
import Homescreen from './components/HomescreenComponent'
import Post from './components/PostComponent'

export default class App extends Component {
  render() {
    return (
      <Homescreen />
    )
  }
}