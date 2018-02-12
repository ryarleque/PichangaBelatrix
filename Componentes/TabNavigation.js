import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Container, Content, Icon, Buton } from 'native-base' 

import InscripcionPartidosTab from './TabOptions/InscripcionPartidosTab'
import ListadoPartidosTab from './TabOptions/ListadoPartidosTab'
import HistoricoPartidosTab from './TabOptions/HistoricoPartidosTab'


class TabNavigation extends Component {

  static navigationOptions = {
    headerLeft: null,
    title: "Pichanga Belatrix",
    headerRight: null,
  }

  render() {
    return (
        <AppTabNavigator/>
    )
  }
}

const AppTabNavigator = TabNavigator ({
    InscripcionPartidosTab: { screen: InscripcionPartidosTab },
    ListadoPartidosTab: { screen : ListadoPartidosTab},
    HistoricoPartidosTab: { screen : HistoricoPartidosTab}
},{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      ...Platform.select({
        android: {
          backgroundColor: 'white'
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false,
    showIcon: true,
  }

})

export default TabNavigation