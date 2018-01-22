import React from 'react'
import { View, TextInput, StyleSheet, Image} from 'react-native'

export default class About extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            city: 'Douai'
        }
    }

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('../img/search.png')}/>
        }
    }

    setCity(city) {
        this.setState({ city })
    }

    render() {
        return (
            <View style={style.view}>
                <TextInput
                    underlineColorAndroid='transparent'
                    style={{ width: 150, height: 40, borderColor: 'grey', borderWidth: 1 }}
                    value={this.state.city}
                    onChangeText={(text) => this.setCity(text)}
                />

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
    }
})