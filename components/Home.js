import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Container, Text, Header, Left, Right, Body } from 'native-base'
import Search from "./Search";
import List from "./List";
import { StackNavigator, TabNavigator } from "react-navigation";

class Home extends React.Component {

    static navigationOptions = {
        title: 'Home',
        tabBarIcon: () => {
            return <Image style={{width: 20, height: 20}} source={require('../img/search.png')}/>
        }
    };

    render() {
        return (
            <Container style={{ backgroundColor: '#d6dee1' }} >
                <Header style={{ backgroundColor: '#0A48A5'}}>
                    <Left style={{ flex: 1}}/>
                    <Body style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{ color: 'white'}}>Home</Text>
                    </Body>
                    <Right style={{ flex: 1}}/>
                </Header>


                <View style={style.view}>
                    <Text>Hello world</Text>
                </View>
            </Container>
        )
    }
}

const style = StyleSheet.create({
    view: {
        margin: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        marginBottom: 20
    },
    header: {
        backgroundColor: '#90A4AE',
    },
    headerTitle: {
        color: '#FFF',
    }
});

export default TabNavigator({
    Home: {
        screen: Home,
    },
    StackNav: {
        screen: StackNavigator({
            Search: {
                screen: Search,
            },
            Result: {
                screen: List,
            },
        }, {
            headerMode: 'none',
        }),
    },
}, {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            style: {
                backgroundColor: '#0A48A5'
            },
    },
});