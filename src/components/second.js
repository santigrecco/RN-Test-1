import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'


export default class Second extends Component {
  render(){
    return (
      <View style={{backgroundColor:'black', flex:1}}>
        <Text style={{color: 'blue'}}>
          Hiiiaaaaa this is second component
        </Text>
        <TouchableOpacity>
          <Text style={{color: 'firebrick', width:100, height:200}} onPress={this.goBack.bind(this)}>
            Hello World,lkjlks!!!!
          </Text>
        </TouchableOpacity>
      </View>

    )
  }
  goBack(){
    this.props.navigator.pop();
  }
}
