//O que estamos fazendo eh: criar um objeto API, que herda de axios e botando a BASE do backend da aplicacao, feito em Strapi, que esta no endereco localhost:1337

import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.0.17:19000"
});

export default api;
