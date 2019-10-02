import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Card, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class Post extends Component {
    state = {
        likes: 0
    }

    upvote = () => {
        likes: this.state.likes + 1
    }

    downvote = () => {
        likes: this.state.likes - 1
    }

    render() {
        return (
            <Card
                title='Check this out!'
                image={require('../images/bananas.jpg')}>
                <Text style={{ marginBottom: 10 }}>
                    Look at these mf'ing bananas.
                </Text>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                    <Button
                        buttonStyle={{ width: '95%', marginRight: 90 }}
                        title='Read more' />
                    <TouchableOpacity onPress={this.downvote} style={{ marginTop: 10, alignSelf: 'flex-start' }}>
                        <Icon style={{ alignSelf: 'flex-start', paddingTop: 4, paddingRight: 10 }} name="arrow-down" size={15} color="#616161" />
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, color: "#616161", alignSelf: 'flex-start', fontSize: 15, fontWeight: 'bold' }}>{this.state.likes}</Text>
                    <TouchableOpacity onPress={this.upvote} style={{ marginTop: 10, alignSelf: 'flex-start' }}>
                        <Icon style={{ alignSelf: 'flex-start', paddingTop: 2, paddingLeft: 10 }} name="arrow-up" size={15} color="#616161" />
                    </TouchableOpacity>
                </View>
            </Card>
        )
    }
}