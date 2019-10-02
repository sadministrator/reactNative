import React, { Component } from 'react'
import { SafeAreaView, FlatList, View, Text, Image, StyleSheet, Button, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements'
import Post from './PostComponent'

export default class Homescreen extends React.Component {
    state = {
        Posts: [
            {
                username: 'j1mj4m',
                profilePic: 'https://i.ytimg.com/vi/NRFE3kDbX9w/maxresdefault.jpg',
                title: 'BananaTown',
                photo: 'https://assets.roar.media/Life/2016/07/bananas.jpg',
                caption: 'Check these mf\'ing bananas out!',
                date: '10/2/19'
            },
            {
                username: 'chimp0',
                profilePic: 'http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg',
                title: 'Greetings from Greece',
                photo: 'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2014/01/santorini-main.jpg',
                caption: 'Life is sweet!',
                date: '9/29/19'
            },
            {
                username: 'LeroyJenkins',
                profilePic: 'https://pbs.twimg.com/media/BshPIGZIUAAw2uQ.jpg',
                title: 'Super Smash Bros: Ultimate vs Project M',
                photo: 'https://icdn2.digitaltrends.com/image/digitaltrends/super-smash-bros-ultimate-e3-2018-9-2-1200x630-c-ar1.91.jpg',
                caption: 'Which one has better style gameplay?? Inb4 flamewar',
                date: '10/3/19'
            },
            {
                username: '77g0d',
                profilePic: 'https://image.shutterstock.com/image-photo/shocked-face-asian-man-white-260nw-751318600.jpg',
                title: 'Am I a hypebeast?',
                photo: 'https://qph.fs.quoracdn.net/main-qimg-70dc67eeb1ec844fb78a490d1ca72744',
                caption: 'My friends called me out. Am I a hypebeast or are they mad I\'m dripping?',
                date: '10/1/19'
            }
        ]
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Schmreddit', style: { color: '#fff', fontSize: 21 } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <FlatList
                    data={this.state.Posts}
                    renderItem={({ item }) => <Post
                        username={item.username}
                        profilePic={item.profilePic}
                        title={item.title}
                        photo={item.photo}
                        caption={item.caption}
                        date={item.date}
                    />}
                />
            </SafeAreaView>
        )
    }
}