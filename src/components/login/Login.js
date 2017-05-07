import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import NavBar from '../NavBar/NavBar'



export default class Login extends Component {
  constructor() {
    super()
  }

  render(){
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.button} onPress={this.login.bind(this)}>
            <Text style={styles.text} > Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  login(){
    this.props.navigator.replace({name:'Home', id:0})
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content:{
    flex:1,
  },
  button: {
    backgroundColor: '#20579A',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  text:{
    color: 'white'
  }

})
