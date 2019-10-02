import React, { Component } from 'react'
import { SafeAreaView, FlatList, View, Text, Image, StyleSheet, Button, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements'
import ShortPost from './ShortPostComponent'
import Comment from './CommentComponent'

export default class Commentscreen extends React.Component {
    //navigateTo = () => {
    //    const { navigate } = this.props.navigation;
    //    navigate('Home', { name: 'Jane' })
    //}

    render() {
        const { navigation } = this.props;
        const post = navigation.getParam('postProps')

        console.log(post)
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Schmreddit', style: { color: '#fff', fontSize: 21 } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <ScrollView>
                    <ShortPost
                        title={post.title}
                        username={post.username}
                        date={post.date}
                        profilePic={post.profilePic}
                        photo={post.photo}
                        content={post.content}
                    />
                    <FlatList
                        data={post.comments}
                        renderItem={({ item, index }) =>
                            <Comment
                                id={index}
                                username={item.username}
                                content={item.content}
                                date={item.date}
                            />}
                    />
                </ScrollView>
            </SafeAreaView>
        )
    }
}