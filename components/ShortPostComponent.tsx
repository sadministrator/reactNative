import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Card, Button } from 'react-native-elements'

interface Props{ navigation: any, profilePic: String, photo: String, content: String }

export default class ShortPost extends Component<Props> {
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
        let postProps = this.props

        const header = <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ marginLeft: 10, color: '#616161', fontSize: 13 }}>u/{this.props.username}</Text>
                <Text style={{ marginRight: 10, color: '#616161', fontSize: 12 }}>{this.props.date}</Text>
            </View>
            <Image source={{ uri: this.props.profilePic }} style={{ marginLeft: 12, marginTop: 5, width: 55, height: 55 }} />
            <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20 }}>{this.props.title}</Text>
        </>
        return (
            <Card
                title={header}
                image={{ uri: this.props.photo }}>
                <Text style={{ alignSelf: 'center', marginBottom: 10 }}>
                    {this.props.content}
                </Text>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
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