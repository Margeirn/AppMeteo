import React from 'react'
import { Text, ActivityIndicator } from 'react-native'

export default class List extends React.Component {
    
    static navigationOptions = ({navigation}) => {
        return {
            title: `Météo / ${navigation.state.params.city}`
        }
    }

    constructor (props) {
        super(props)
        this.state = {
            city: this.props.navigation.state.city, 
            report: null
        }
    }

    render () {
        if (this.state.report === null){
            return (
                <ActivityIndicator size="large"/>
            )
        } else {
            return (
                <Text>Salut les gens</Text>
            )
        }
    }
}