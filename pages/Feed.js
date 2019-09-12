import React, { Component } from 'react';

//Touchbale Opacity cria uma opacidade quando um botao eh clicado 
import {View, Image, TouchableOpacity} from 'react-native';

// import { Container } from './styles';

import camera from "../assets/camera.png";

export default class Feed extends Component {

  static navigationOptions = ({navigation}) => ({
    headerRight:(
      //OnPress vai navegar ateh a rota desejada, que no caso, eh a rota New 
      <TouchableOpacity 
        style = {{marginRight: 20}} 
        onPress = {() => navigation.navigate("New")}
      >
        
        <Image source = {camera}/>
        </TouchableOpacity>
    )
  });

  render() {
    return <View />;
  }
}
