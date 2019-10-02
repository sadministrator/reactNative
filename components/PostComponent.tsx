import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Card, Button } from 'react-native-elements'

export default class Post extends Component {
    state = {
        likes: 0
    }

    upvote = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    downvote = () => {
        this.setState({
            likes: this.state.likes - 1
        })
    }

    render() {
        const header = <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ marginLeft: 10, color: '#616161', fontSize: 13 }}>u/jimbob</Text>
                <Text style={{ marginRight: 10, color: '#616161', fontSize: 12 }}>10/2/19</Text>
            </View>
            <Image source={require('../images/bananas.jpg')} style={{ marginLeft: 12, marginTop: 5, width: 55, height: 55 }} />
            <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 18 }}>{'Check this out!'}</Text>
        </>
        return (
            <Card
                title={header}
                image={require('../images/bananas.jpg')}>
                <Text style={{ alignSelf: 'center', marginBottom: 10 }}>
                    Look at these mf'ing bananas.
                </Text>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                    <Button
                        buttonStyle={{ width: '95%', marginRight: 80 }}
                        title='Read more' />
                    <TouchableOpacity onPress={this.downvote} style={{ marginTop: 10, alignSelf: 'flex-start' }}>
                        <Icon style={{ alignSelf: 'flex-start', paddingTop: 4, paddingRight: 5 }} name={"arrow-long-down"} size={15} color="#616161" />
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, color: "#616161", alignSelf: 'flex-start', fontSize: 15, fontWeight: 'bold' }}>{this.state.likes}</Text>
                    <TouchableOpacity onPress={this.upvote} style={{ marginTop: 10, alignSelf: 'flex-start' }}>
                        <Icon style={{ alignSelf: 'flex-start', paddingTop: 2, paddingLeft: 5 }} name="arrow-long-up" size={15} color="#616161" />
                    </TouchableOpacity>
                </View>
            </Card>
        )
    }
}