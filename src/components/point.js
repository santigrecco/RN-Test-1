import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
export default class Point extends Component {

  render(){
    return(
      <View style={styles.container}>
        <Text>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
