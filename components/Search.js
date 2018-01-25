import React from 'react'
import { TextInput, StyleSheet, Image, Text } from 'react-native'
import { View, Button, Container, Item, Input } from 'native-base'
import { StackNavigator } from 'react-navigation' 
import List from './List'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            city: 'Douai',
        }
    }

    static navigationOptions = {
        title: 'Rechercher une ville           ',
        tabBarIcon: () => {
            return <Image style={{width: 20, height: 20}} source={require('../img/search.png')}/>
        }
    }

    setCity(city) {
        this.setState({ city })
    }

    submit () {
        this.props.navigation.navigate('Result', {city: this.state.city})
    }

    render() {
        return (
            <Container style={{ backgroundColor: '#78909C' }} >
                <View style={style.view}>
                <Item style={{borderBottomWidth: 0, marginBottom: 30 }} >
                    <Input noBorder style={{ backgroundColor: '#fff', borderRadius: 7}} placeholder='Entre une ville' 
                        value={this.state.city}
                        onChangeText={(text) => this.setCity(text)}
                    />
                </Item>
                <View>
                    <Button style={{ borderRadius: 7, height:50, backgroundColor: '#455A64' }} onPress={() => this.submit() }>
                        <Text style={{ margin: 30, color: 'white', fontSize: 25 }} >Rechercher</Text>
                    </Button>
                </View>
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
})

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle,
}

export default StackNavigator({
    Search: {
        screen: Search,
        navigationOptions
    },
    Result: {
        screen: List,
        navigationOptions
    },
})