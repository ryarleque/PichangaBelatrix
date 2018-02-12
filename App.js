import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'

import Home from './Componentes/Home/Home'
import TabNavigation from './Componentes/TabNavigation'
// import ListadoPartidos from './Componentes/ListaPartidos/ListadoPartidos'

const App = StackNavigator({
  Home: { screen: Home },
  TabNavigation: { screen: TabNavigation },
  // ListadoPartidos: { screen : ListadoPartidos}
})

export default App;