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
                content: 'Check these mf\'ing bananas out!',
                date: '10/2/19',
                comments: [
                    {
                        date: '10/2/19',
                        username: 'chimp0',
                        content: 'WOW! Looks great! Two opposable thumbs up!'
                    },
                    {
                        date: '10/2/19',
                        username: 'Groucho',
                        content: 'Must be nice to have rich chimp parents, earn your own bananas, loser!!1!'
                    },
                    {
                        date: '10/3/19',
                        username: 'theKoogler',
                        content: 'Where\'s the party at man??'
                    },
                    {
                        date: '10/5/19',
                        username: 'teethsGuy',
                        content: 'I hope you brushed your teeth after.'
                    }
                ]
            },
            {
                username: 'chimp0',
                profilePic: 'http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg',
                title: 'Greetings from Greece',
                photo: 'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2014/01/santorini-main.jpg',
                content: 'Life is sweet!',
                date: '9/29/19',
                comments: [
                    {
                        date: '9/29/19',
                        username: 'g0d1n3z',
                        content: 'damn. def jealous.'
                    },
                    {
                        date: '9/30/19',
                        username: '1upYou',
                        content: 'That\'s cool I went there last year.'
                    },
                    {
                        date: '10/3/19',
                        username: 'dreams2travel',
                        content: 'What city is that in?'
                    }
                ]
            },
            {
                username: 'LeroyJenkins',
                profilePic: 'https://pbs.twimg.com/media/BshPIGZIUAAw2uQ.jpg',
                title: 'Super Smash Bros: Ultimate vs Project M',
                photo: 'https://icdn2.digitaltrends.com/image/digitaltrends/super-smash-bros-ultimate-e3-2018-9-2-1200x630-c-ar1.91.jpg',
                content: 'Which one has better style gameplay?? Inb4 flamewar',
                date: '10/3/19'
            },
            {
                username: '77g0d',
                profilePic: 'https://image.shutterstock.com/image-photo/shocked-face-asian-man-white-260nw-751318600.jpg',
                title: 'Am I a hypebeast?',
                photo: 'https://qph.fs.quoracdn.net/main-qimg-70dc67eeb1ec844fb78a490d1ca72744',
                content: 'My friends called me out. Am I a hypebeast or are they mad I\'m dripping?',
                date: '10/1/19',
                comments: [
                    {
                        date: '10/1/19',
                        username: 'skr1lla',
                        content: 'yea bro ur a hypebeast.. wearin too much gucci shits wack'
                    },
                    {
                        date: '10/2/19',
                        username: 'supremeHat',
                        content: 'nah dont let them get u down ur drippin on them'
                    },
                    {
                        date: '10/2/19',
                        username: 'azndanceguy',
                        content: 'what hat is that ?'
                    },
                    {
                        date: '10/5/19',
                        username: 'teethsGuy',
                        content: 'I hope you brushed your teeth after the photo.'
                    }
                ]
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
                    renderItem={({ item, index }) => <Post
                        id={index}
                        username={item.username}
                        profilePic={item.profilePic}
                        title={item.title}
                        photo={item.photo}
                        content={item.content}
                        date={item.date}
                        postProps = {item}
                        navigation={this.props.navigation}
                    />}
                />
            </SafeAreaView>
        )
    }
}