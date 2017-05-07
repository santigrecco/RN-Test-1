
import autobind from 'autobind-decorator'
import React, { Component } from 'react'
import { Home, NewPoint, Login } from './src/components'
import colors from './styles/colors'
import EStyleSheet from 'react-native-extended-stylesheet'
import firebase from 'firebase'
import { Provider } from 'react-redux'
import Store from './src/store/store'
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// const config = {
//   apiKey: "AIzaSyBoD25eE-DMPfVAbFckgBrz13Wz9sg5PZA",
//   authDomain: "point-eeb1a.firebaseapp.com",
//   databaseURL: "https://point-eeb1a.firebaseio.com",
//   storageBucket: "point-eeb1a.appspot.com",
//   messagingSenderId: "579622151976"
// };
// firebase.initializeApp(config);

export default class point extends Component {
   render() {
       return (
         <Provider store={Store}>
           <Navigator
             style={{ flex:1}}
             initialRoute={{ name: 'Login', id:0 }}
             renderScene={ this.renderScene }
             />
         </Provider>
       );
   }

   renderScene(route, navigator) {
    switch (route.name) {
      case 'Login':{
        return <Login navigator={navigator}  />
        break;
      }
      case 'Home':{
        return <Home navigator={navigator} />
        break;
      }
      case 'NewPoint': {
        return <NewPoint navigator={navigator} />
        break;
      }
      default:

      }

    }
}



EStyleSheet.build({
  principal: '#e74c3c',
  secondary: '#9A2519',
  tertiary: '#3CE78B',
  opposite: '#099A4D',
  oppositeSecondary: '#3CE78B',
  blue: '#20579A',
  asphalt: '#34495e',
  silver: '#bdc3c7'
});

AppRegistry.registerComponent('point', () => point);
