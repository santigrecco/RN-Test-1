import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput
} from 'react-native'
import NavBar from './NavBar/NavBar'
import EStyleSheet from 'react-native-extended-stylesheet'


export default class newPoint extends Component {
  render() {
    return(
      <View style ={styles.container}>
        <NavBar title="New Point" navigator={this.props.navigator} style={styles.navbar}/>
        <View style={styles.content}>
          <Text>Add a Point</Text>
          <TextInput  style={styles.input} multiline = {true} editable = {true} maxLength = {40} underlineColorAndroid={'transparent'} onFocus={()=>null}/>
        </View>
      </View>
    )
  }

}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    justifyContent: 'center',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderBottomColor: '$principal'
  },
  content: {
    flex: 1,
    padding: 20,
  },
  input: {

  }
})
