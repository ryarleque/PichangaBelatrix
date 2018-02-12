import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native'
import { Button, Icon } from 'native-base'

var backgroundImage = require('../../assets/Images/background.jpeg');

export class Home extends Component {

  static navigationOptions = {
      title: "Pichanga Belatrix"
  }
    
  render() {
    return (
      <View style={ styles.homeView }>

           <View style= { styles.contentImage }>
               <Image source={ backgroundImage } style={ styles.image }></Image>
            </View>

            <Button
                block={true}
                danger
                style={ styles.margingButton }
                onPress={ () => this.props.navigation.navigate('TabNavigation')}>
                <Text style={ styles.buttonText }> Login with Gmail </Text>
            </Button>

            <Button
                block={true}
                primary
                style={ styles.margingButton }
                onPress={ () => this.props.navigation.navigate('TabNavigation')}>
                <Text style={ styles.buttonText }> Login with Facebook </Text>   
            </Button>   
                          
      </View>
    )
  }
}

const styles = StyleSheet.create({

    homeView: {
        flex:1,
        justifyContent: 'flex-end'
    },

    contentImage: {
        position: 'absolute', 
        top:0,
        left:0,
        height: '100%',
         width: '100%'
    },

    image: {
        flex:1, 
        height: null, 
        width: null
    },

    buttonText: {
        color: 'white'
    },

    margingButton: {
        marginBottom: 10
    }
})

export default Home;