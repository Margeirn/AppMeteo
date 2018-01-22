import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default class About extends React.Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image style={{width: 20, height: 20}} source={require('../img/user.png')}/>
        }
    }

    render () {
        return(
            <View style={style.view}>
                <Text style={style.title}>A propos de moi</Text>
                <Text>
                    Aliquip officia minim ipsum id ullamco aute eu minim. Cillum velit do enim incididunt sint cillum. Amet minim in commodo aliqua laboris. Sunt eu sunt nostrud proident culpa nostrud sit reprehenderit. Ex ad sit sit eiusmod dolor ex est laboris excepteur reprehenderit enim. Pariatur magna pariatur mollit occaecat mollit proident. Quis ad mollit incididunt consequat cillum dolor veniam duis eu qui fugiat fugiat amet qui.
                </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    view: {
        margin: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 22,
        marginBottom: 20
    }
})