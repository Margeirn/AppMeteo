import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment';

moment.locale('fr')

export default class Row extends React.Component {

    static propTypes = {
        day: PropTypes.object,
        rowId: PropTypes.number
    }

    day () {
        let day = moment(this.props.day.dt_txt).format('ddd')
        return (
            <Text>{ day.toUpperCase() }</Text>
        )
    }

    date () {
        let date = moment(this.props.day.dt_txt).format('DD/MM')
        return (
            <Text>{ date }</Text>
        )
    }

    heure () {
        let heure = moment(this.props.day.dt_txt).format('HH')
        return (
            <Text>{ heure }</Text>
        )
    }

    render () {
        return (
            <View>
                <Text>{this.day()} {this.date()} {this.heure()}H00</Text>
                <Text>{this.props.day.main.temp}°C</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    view: {
        backgroundColor: '#E82A37',
    }
})