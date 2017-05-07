import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Image
} from 'react-native'
import NavBar from './NavBar/NavBar'
import EStyleSheet from 'react-native-extended-stylesheet'
import { connect } from 'react-redux'
import { fetchPoints } from '../actions/points'
import Point from './point'
import axios from 'axios'


@connect(store => {
  return {
    points: store.points
  }
})
export default class Home extends Component {
  constructor(){
    super()
  }
  componentWillMount(){
      this.props.dispatch(fetchPoints())
  }
  renderPoint(point){
    const { title, content, id } = point
    return (
        <View key={id}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.content}>
            {content}
          </Text>
        </View>
    )
  }

  render(){
    const { points } = this.props
    let count= 0
    return (
      <View style={styles.home}>
        <NavBar title="Point" navigator={this.props.navigator} style={styles.navbar}/>
        <ScrollView>
          {points.map(el => <Point key={count++}  title={el.title}/>)}
        </ScrollView>
        <TouchableHighlight style={styles.newPoint} onPress={this.goToNewPoint.bind(this)}>
            <Image
              style={styles.image}
              source={require('../images/plus.png')}
              />
        </TouchableHighlight>
      </View>
    )
  }
  goToNewPoint(){
    const { navigator } = this.props
    navigator.push({name: 'NewPoint', id:2})
  }
  getLocation(){
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        console.log(position);
      },
      (error)=>{
        alert(error)
      }
    )
  }

}

const styles = EStyleSheet.create({
  home:{
    flexDirection: 'column',
    backgroundColor: 'whitesmoke',
    flex: 1,
    // position: 'relative'
  },
  navbar: {
    justifyContent: 'center',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderBottomColor: '$principal'
  },
  button: {
    backgroundColor: '#20579A',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  title: {
    fontSize: 20,
  },
  content: {
    fontSize: 15,
  },
  image: {
    width: 45,
    height: 45
  },
  newPoint: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
    right: 10,
    height: 60
  }
})
