import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/fr'

export default class Row extends React.Component {

    static propTypes = {
        day: PropTypes.object,
        rowId: PropTypes.number
    }

    day () {
        let day = moment(this.props.day.dt_txt).locale('fr').format('ddd')
        return (
            <Text style={style.bold} >{ day.toUpperCase() }</Text>
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
    
    icon (size = 50) {
        const type = this.props.day.weather[0].main.toLowerCase()
        let image
        switch (type) {
            case 'clouds':
                image = require('./icons/clouds.png')
                break;
            case 'rain':
                image = require('./icons/rain.png')
                break;
            case 'clear':
                image = require('./icons/clear.png')
                break;
            default: 
                break;
                image = require('./icons/sun.png')
        }
        return (
            <Image source={image} style={{width: size, height: size}} />
        )
    }

    render () {
        return (
            <View style={style.view} >
                <Text style={style.white} >{this.day()} {this.date()} {this.heure()}H</Text>
                { this.icon()}
                <Text style={style.temp} >{this.props.day.main.temp}°C</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    white: {
        color: '#fff'
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    view: {
        backgroundColor: '#E82A37',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#1647e9',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    temp: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 22,
    }
})