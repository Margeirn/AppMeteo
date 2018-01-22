import React from 'react'
import { View, TextInput, StyleSheet, Image, Button} from 'react-native'
import { StackNavigator } from 'react-navigation' 
import List from './List'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            city: 'Douai'
        }
    }

    static navigationOptions = {
        title: 'Rechercher une ville',
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
            <View style={style.view}>
                <TextInput
                    underlineColorAndroid='transparent'
                    style={{ width: 150, height: 40, borderColor: 'grey', paddingLeft: 20, borderWidth: 1, marginBottom: 30 }}
                    value={this.state.city}
                    onChangeText={(text) => this.setCity(text)}
                />
                <Button color={'#1647E9'} onPress={() => this.submit() } title="Rechercher" />
            </View>
        )
    }
}

const style = StyleSheet.create({
    view: {
        margin: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 22,
        marginBottom: 20
    },
    header: {
        backgroundColor: '#1647E9'
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
    Result: {
        screen: List,
        navigationOptions
    },
    Search: {
        screen: Search,
        navigationOptions
    },
    
})