import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import Witter from './Witter';

class Inicio extends Component {

    render() {
        return ( 
            <div id = "app" >
                <header class = "sitio-header fixed-top">
                    <nav class = "navbar" >
                    <a class = "navbar-brand text-light h2" href = "/" > Witter </a> 
                        <div class = "input-group col-8 my-2">
                        <input type = "text" class = "form-control" placeholder = "Buscar..." />
                            <div class = "input-group-append" >
                                <button class = "btn btn-outline boton btn-segundo" type = "button" > < FontAwesomeIcon icon = { faSearch }/></button >
                            </div> 
                        </div > 
                    <div class = "encabezado justify-content-end mr-4" >
                        <p class = "nombre m-2" > </p> <img src = "" alt = "" class = "usuario rounded-circle" / >
                        <a href = "#" class = "icono m-2" > < FontAwesomeIcon icon = { faSignOutAlt }/> </a >
                    </div> 
                    </nav> 
                </header> 
                <section class = "container cuerpo mt-5 pt-4">
                    <div class = "row">
                        <div class = "col mx-auto my-3">
                            <div class = "witts" >
                            <Witter > </Witter> 
                            </div > 
                        </div> 
                    </div > 
                </section> 
                <footer class = "wittear fixed-bottom p-3 bg-dark">
                    <div class = "input-group mb-3" >
                    <input type = "text" class = "form-control" placeholder = "¿Qué estas pensando?"/>
                        <div class = "input-group-append" >
                            <button class = "btn btn-outline boton btn-principal" type = "button" > < FontAwesomeIcon icon = { faPaperPlane }/> </button > 
                        </div> 
                    </div > 
                </footer> 
            </div >
        );
    }
}

export default Inicio;