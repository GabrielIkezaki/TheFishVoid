//O que estamos fazendo eh: criar um objeto API, que herda de axios e botando a BASE do backend da aplicacao, feito em Strapi, que esta no endereco localhost:1337

import axios from "axios";



const api = axios.create({
<<<<<<< HEAD
    baseURL: "http://192.168.0.17:1337"
=======
    baseURL: "http://192.168.0.19:1337"
>>>>>>> 5da7154b26f6fa371d7e9617da376727bd3798bf
});

export default api;
