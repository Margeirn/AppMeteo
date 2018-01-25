import React from 'react'
import { Text, ActivityIndicator, Image, ListView, View, StyleSheet } from 'react-native'
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
    }

    constructor (props) {
        super(props)
        this.state = {
            city: this.props.navigation.state.params.city, 
            report: null,
        }
    }

    fetchWeather () {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&mode=json&units=metric&appid=0af75db369f53b5a44d01578c9e9f337`)
        .then((reponse) => {
            this.setState({ report: reponse.data})
        })
    }
 
    render () {
        this.fetchWeather()
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 22,
        marginBottom: 20
    }
})