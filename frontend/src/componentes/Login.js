import React, { Component } from 'react';

class Login extends Component {
    state = {
        registro: false
    }

    render() {
        return ( < div id = "app" >
            <
            section id = "login"
            class = "mb-5 mt-5" >
            <
            div class = "container" >
            <
            div class = "row" >
            <
            div class = "col-xs-12 col-sm-6 col-md-4 mx-auto" >
            <
            div class = "card_login" >
            <
            div class = "card" >
            <
            div class = "card-body text-center" >
            <
            form >
            <
            h1 class = "h3 mb-3 font-weight-normal" > Login < /h1> <
            div class = "form-group" >
            <
            input type = "email"
            id = "correo"
            name = "correo"
            class = "form-control"
            placeholder = "Correo"
            required / >
            <
            /div> <
            div class = "form-group" >
            <
            input type = "password"
            id = "contrasena"
            name = "contrasena"
            class = "form-control"
            placeholder = "Contraseña"
            required / >
            <
            /div> <
            button type = "button"
            class = "btn btn-lg boton btn-principal btn-block" > Login < /button> <
            button type = "button"
            class = "btn btn-lg boton btn-segundo btn-block" > Registrarse < /button> < /
            form > <
            /div> < /
            div > <
            /div> < /
            div > <
            /div> < /
            div > <
            /section> < /
            div >
        );
    }
}

export default Login;