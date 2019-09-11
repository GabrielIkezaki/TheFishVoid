import React from "react";

//Estamos importando e definido o componente de createAppContainer e de createStackNavigator
import{createAppContainer, createStackNavigator} from "react-navigation";

//Vai ser o logo no topo do app
import{Image} from "react-native";

//Aqui, estamos acessando o documento Feed, que vai estar dentro da pasta de pages. O mesmo sera feito para o New
import Feed from "./pages/Feed";
import New from "./pages/New";

//Aqui, vamos definir o Feed e o New dentro do container de App e do navegador. O arquivo routes, afinal, eh exatamente pra isso: pra controlar a navegacao da aplicacao
export default createAppContainer(

    //StackNavigator eh nada mais que um tipo de navegacao em "stack", isto eh, empilhado. Isso vai nos dar um menu de botoes empilhados 
    createStackNavigator({
        Feed,
        New
    })
);