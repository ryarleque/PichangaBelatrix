import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'native-base'


export class HistoricoPartidosTab extends Component {

  static navigationOptions = {
    tabBarIcon : ({tintColor}) => (
    <Icon name="ios-home" sytle={{ color: tintColor}} /> )
  }

  render() {
    return (
      <View>
        <Text> HistoricoPartidosTab </Text>
      </View>
    )
  }
}

export default HistoricoPartidosTab