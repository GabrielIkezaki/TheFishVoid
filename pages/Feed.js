import React, { Component } from 'react';
import api from "../api";

//Touchbale Opacity cria uma opacidade quando um botao eh clicado. Flatlist sera uma lista de componentes que vamos buscar no nosso backend do strapi
import {Text, View, Image, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

// import { Container } from './styles';

import camera from "../assets/camera.png";
import more from "../assets/more.png";
import like from "../assets/like.png";
import comment from "../assets/send.png";


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

  state = {
    feed:[]
  };

  //Sera executado assim que o componente for montado
  async componentDidMount(){
    const response = await get("posts?_sort=id:DESC");
    //Estamos botando dados dentro do feed
    this.setState({feed:response.data});
  }
  
  //Renderiza certos componentes 
  render() {
    return(
      //Serve como uma DIV
      <View style = {styles.container}>
        <FlatList
        //feed esta vidno da API
        data={this.state.feed}
        //Precisamos do keyExtractor pq cada item renderizado na tela precisa de uma KEY unica
        keyExtractor={post=>post.id.toString()}
        //Renderizando o item
        renderItem = {({item})=>(
          <View style = {style.feedItem}>
            <View style = {style.feedItemHeader}>
              <View style = {style.userInfo}>
                  <Text style = {style.name}></Text>
                  <Text style={style.place}></Text>
                </View>

                  <Image source={more}/>
                
              </View>
              //Este sera o endereco absoluto de toda imagem que estiver no nosso sistema
              <Image style = {style.feedImage} source = {{uri: `http://192.168.0.17:19000/${item.image.url}`}} />
              //No footer da imagem, teremos os botoes de dar like, curtir, e comentar
              <View style = {styles.feedItemFooter}>
                <View style = {styles.actions}>
                    <TouchableOpacity onPress = {()=> {}}>
                      <Image source = {like}/>
                      </TouchableOpacity>

                      <TouchableOpacity onPress = {()=> {}}>
                      <Image source = {comment}/>
                      </TouchableOpacity>

                      <TouchableOpacity onPress = {()=> {}}>
                      <Image source = {send}/>
                      </TouchableOpacity>
                  </View>
                  <Text style = {style.likes}>{item.likes}FishLike</Text>
                  <Text style = {style.desctription}>{item.desctription}</Text>
                  <Text style = {style.hashtags}>{item.hashtags}</Text>
                </View>
                  
          </View>
        )}
        />
        </View>
    );
  }

  
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },

  feedItem:{
    marginTop: 20
  },

  feedItemHeader:{
    paddingHorizontal: 15,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },

  name:{
    fontSize:14,
    color:"#000"
  },

  place:{
    fontSize:12,
    color:"#666",
    marginTop:2
  },

  feedImage:{
    width:"100%",
    height: 400,
    marginVertical: 15
  },

  feedItemFooter:{
    paddingHorizontal:15
  },

  actions:{
    flexDirection:"row"
  },

  action:{
    marginRight:8
  },

  likes:{
    marginTop:15,
    fontWeight:"bold",
    color:"#000"
  },

  desctription:{
    lineHeight:18,
    color:"#000"
  },

  hashtags:{
    color:"red"
  }

});