import React, {Component} from 'react'
import {
       TouchableHighlight,
       Text
} from 'react-native'

export default routeMapper = {
         LeftButton: (route, navigator, index, navState) => {
                if(route.id === 0){
                       return null
                }
                return (
                       <TouchableHighlight onPress={() => navigator.pop()}
                            style={{marginLeft:7}}>
                            <Text style={{ color:'white'}}> Back </Text>
                       </TouchableHighlight>
                );
         },
         RightButton: (route, navigator, index, navState) => {
                return null
         },
         Title: (route, navigator, index, navState) =>{
                return (<Text style={{color:'white', fontWeight:'bold'}}>{route.name}</Text>);
         },
       }
