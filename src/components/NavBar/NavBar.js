import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

// navbar component may recive a title and two jsx components wich will be rendered
// if they exist, also may recive the react-native navigator for closing or opening new
// windows

export default class NavBar extends Component {
  render(){
    const { left, right, title, style, navigator } = this.props
    return (
      <View style={[style, styles.content]}>
        {left ? new left(navigator): null}
        <Text style={[styles.text, styles.title]}> {title} </Text>
        {right ? new right(navigator): null}
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  content:{
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  text: {
    color: '$principal',
    margin: 5
  },
  title: {
    fontWeight: 'bold',
    letterSpacing: 20
  }
})
