import React from "react";

//Estamos importando e definido o componente de createAppContainer e de createStackNavigator
//import{createAppContainer, createStackNavigator} from "react-navigation";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Vai ser o logo no topo do app
import{Image} from "react-native";

//Aqui, estamos acessando o documento Feed, que vai estar dentro da pasta de pages. O mesmo sera feito para o New
import Feed from "./pages/Feed";
import New from "./pages/New";
//Aqui, estamos definindo o componente logo como uma imagem, que sera carregada na pasta assets, com o nome logo
import logo from "./assets/camera.png";

//Aqui, vamos definir o Feed e o New dentro do container de App e do navegador. O arquivo routes, afinal, eh exatamente pra isso: pra controlar a navegacao da aplicacao
export default createAppContainer(

    //StackNavigator eh nada mais que um tipo de navegacao em "stack", isto eh, empilhado. Isso vai nos dar um menu de botoes empilhados 
    createStackNavigator({
        Feed,
        New
    },
    {
        //Dentro das opcoes de navegacao padrao, vamos editar o header do aplicativo.      
        defaultNavigationOptions:{
            //A imagem "logo" sera o header, e a margin 20 serve pro logo nao ficar colado
            headerTitle:<Image style={{marginHorizontal:20}}source={logo}/>,
            //tint color faz os botoes ficarem pretos 
            headerTintColor: "#000",
            //Remove o texto "back" quando estiver em outra tela 
            headerBackTitle:null
        },
        //Quando a tela for aberta, ela sera aberta de baixo pra cima 
        mode:"modal"
    })
);