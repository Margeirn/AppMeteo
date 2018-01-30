import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/fr'

export default class Row extends React.Component {

    static propTypes = {
        day: PropTypes.object,
        rowId: PropTypes.number
    };

    day () {
        let day = moment(this.props.day.dt * 1000).locale('fr').format('ddd');
        return (
            <Text style={style.bold} >{ day.toUpperCase() }</Text>
        )
    }

    date () {
        let date = moment(this.props.day.dt * 1000).format('DD/MM');
        return (
        <Text style={{ fontSize: 16 }} >{this.day()}{ date }</Text>
        )
    }

    
    icon (size) {
        const type = this.props.day.weather[0].main.toLowerCase();
        let image;
        switch (type) {
            case 'clouds':
                image = require('./icons/clouds.png');
                break;
            case 'rain':
                image = require('./icons/rain.png');
                break;
            case 'clear':
                image = require('./icons/clear.png');
                break;
            default: 
                image = require('./icons/sun.png');
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
                    <View style={{flex: 1.5, flexDirection: 'row', marginLeft: 20}} >
                        <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
                            <Text style={style.bold} >{moment(this.props.day.dt * 1000).locale('fr').format('ddd').toUpperCase()}</Text> 
                            <Text style={style.white} >{moment(this.props.day.dt * 1000).format('DD/MM')}</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} >
                            {this.icon(100)}
                        </View>
                    </View>
                    <View  style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 10}}>
                        <Text style={style.firstTemp} >{Math.round(this.props.day.temp.day)}°C  </Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={style.view} >
                    <View style={{flex: 1, flexDirection: 'row' , marginLeft: 20, alignItems: 'center', justifyContent: 'center'}} >
                        <Text style={style.bold} >{moment(this.props.day.dt * 1000).locale('fr').format('ddd').toUpperCase()}</Text> 
                        <Text style={style.white} >{moment(this.props.day.dt * 1000).format('DD/MM')}</Text>
                    </View>
                    {this.icon(50)}
                    <View  style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 10}}>
                        <Text style={style.temp} >{Math.round(this.props.day.temp.day)}°C  </Text>
                    </View>
                </View>
            )
        } 
    }
}

const style = StyleSheet.create({
    white: {
        color: '#fff',
        fontSize: 18
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#fff'
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
        justifyContent: 'center',
        alignItems: 'center'
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
});