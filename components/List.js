import React from 'react'
import { ActivityIndicator, Image, ListView, View, StyleSheet } from 'react-native'
import axios from 'axios'
import WeatherRow from './weather/Row'

export default class List extends React.Component {
    
    static navigationOptions = ({navigation}) => {
        return {
            title: `Météo / ${navigation.state.params.city}                `,
            tabBarIcon: () => {
                return <Image style={{width: 20, height: 20}} source={require('../img/search.png')}/>
            }
        }
    };

    constructor (props) {
        super(props);
        this.state = {
            city: this.props.navigation.state.params.city, 
            report: null,
        }
    }

    //http://api.openweathermap.org/data/2.5/weather?lat=50.345912&lon=3.097388&appid=936b1aed9a541e3446cafb8be2c70e62

    fetchWeather () {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&units=metric&cnt=16&appid=936b1aed9a541e3446cafb8be2c70e62`)
        .then((reponse) => {
            this.setState({ report: reponse.data})
        })
    }
 
    render () {
        this.fetchWeather();
        if (this.state.report === null){
            return (
                <View style={style.view} >
                    <ActivityIndicator size="large"/>
                </View>
            )
        } else {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            let dss = ds.cloneWithRows(this.state.report.list);
            
            return (
                <View>
                    <ListView
                        dataSource={dss}
                        renderRow={(row, j, k) => <WeatherRow day={row} index={parseInt(k, 10)}/>}
                    />
                </View>
            )
        }
    }
}

const style = StyleSheet.create({
    view: {
        margin: 30,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 22,
        marginBottom: 20
    }
});