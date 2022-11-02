import axios from 'axios'
export default class  UsuarioService {

    logar(email,senha){
        return axios
        .post('http://localhost:3000/api/v1/logar')
        .then(response => (console.log(response)))
    }

    criar(usuario){
        return axios
        .post('http://localhost:3000/criar',usuario)
        .then(response => (console.log(response)))
    }

}
