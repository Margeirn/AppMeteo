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
            <Text style={{ fontSize: 16 }} >{ date }</Text>
        )
    }

    heure () {
        let heure = moment(this.props.day.dt_txt).format('HH')
        return (
            <Text>{ heure }</Text>
        )
    }
    
    icon (size) {
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
                image = require('./icons/sun.png')
                break;
        }
        return (
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >  
                <Image source={image} style={{ width: size, height: size}} />
            </View>
        )
    }

    render () {
        
        if (this.props.index === 0 ) {
            return (
                <View style={style.firstView} >
                    <View style={{flex: 1, marginLeft: 20}} >
                        <Text style={style.white} >{this.day()} {this.date()}</Text>
                        <Text style={[style.white, {marginLeft: 10}]} >{this.heure()}H</Text>
                        <View style={{ marginLeft: 100, marginBottom: 10 }} >
                            {this.icon(100)}
                        </View>
                    </View>
                    <View  style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 10}}>
                        <Text style={style.firstTemp} >{Math.round(this.props.day.main.temp)}°C  </Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={style.view} >
                    <View style={{flex: 1, marginLeft: 20}} >
                        <Text style={style.white} >{this.day()} {this.date()}</Text>
                        <Text style={[style.white, {marginLeft: 10}]} >{this.heure()}H</Text>
                    </View>
                    {this.icon(50)}
                    <View  style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 10}}>
                        <Text style={style.temp} >{Math.round(this.props.day.main.temp)}°C  </Text>
                    </View>
                </View>
            )
        } 
    }
}

const style = StyleSheet.create({
    white: {
        color: '#fff'
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    view: {
        backgroundColor: '#455A64',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#cfd8dc',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    firstView: {
        backgroundColor: '#78909C',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#cfd8dc',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    firstTemp: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 40,
    },
    temp: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 25,
    }
})