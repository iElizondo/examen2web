import React, { Component } from 'react';
import './App.css';

import Login from './componentes/Login';
import Inicio from './componentes/Inicio';
import Registro from './componentes/Registro';

class App extends Component {

    state = {
        logueado: true,
        registrar: false,
    }
    render() {
        //html
        var loginButton;
        if(this.state.registrar){
            loginButton = < Registro/> ;
        } else {
            if (this.state.logueado) {
                loginButton = < Inicio/> ;
            } else {
                loginButton = < Login/> ;
            }
        }
        return ( 
            <div className = "container" > { loginButton } </div >
        );
    }

}

export default App;