import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'
//import {} from 'react-native-vector-icons'

export default class Post extends Component {
    render() {
        return (
            <Card
                title='HELLO WORLD'
                image={require('../images/bananas.jpg')}>
                <Text style={{ marginBottom: 10 }}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='VIEW NOW' />
            </Card>
        )
    }
}