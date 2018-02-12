import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'

import Home from './Componentes/Home/Home'
import InscripcionPartido from './Componentes/InscripcionPartido/InscripcionPartido'
import ListadoPartidos from './Componentes/ListaPartidos/ListadoPartidos'

const App = StackNavigator({
  Home: { screen: Home },
  InscripcionPartido: { screen: InscripcionPartido },
  ListadoPartidos: { screen : ListadoPartidos}
})

export default App;