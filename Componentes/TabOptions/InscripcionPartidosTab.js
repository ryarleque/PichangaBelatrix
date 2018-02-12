import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'native-base'


export class InscripcionPartidosTab extends Component {
  
  static navigationOptions = {
    tabBarIcon : ({tintColor}) => (
    <Icon name="ios-home" sytle={{ color: tintColor}} /> )
  }
  
  render() {
    return (
      <View>
        <Text> InscripcionPartidosTab </Text>
      </View>
    )
  }
}

export default InscripcionPartidosTab