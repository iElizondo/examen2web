import React, { Component } from 'react';

class Registro extends Component {

    render() {
        return ( 
        <div id = "app" >
            <section id = "register" class = "mb-5 mt-5" >
                <div class = "container">
                    <div class = "row" >
                        <div class = "col-xs-12 col-sm-8 col-md-6 mx-auto" >
                            <div class = "card_register" >
                                <div class = "card" >
                                    <div class = "card-body text-center" >
                                        <h1 class = " h3 mb-3 font-weight-normal "> Registro </h1> 
                                            <form method = "post" enctype = "multipart/form-data" accept-charset = "utf-8" >
                                                <div class = "card card-body text-center" >
                                                <img alt = "Imagen de Usuario"
                                                class = "imagen"/>
                                                    <div class = "input-group my-3 pr-1" >
                                                        <div class = "custom-file" >
                                                        <input ref = "file"type = "file" class = "custom-file-input" id = "imagen" name = "imagen" />
                                                        <label class = "custom-file-label" for = "imagen" > </label> 
                                                        </div > 
                                                    </div> 
                                                </div > 
                                            </form> 
                                            <form>
                                                <div class = "form-group ">
                                                    <input type = "text" name = "nombre" class = "form-control " placeholder = "Nombre" required />
                                                </div> 
                                                <div class = "form-group ">
                                                    <input type = "email" name = "correo" class = "form-control " placeholder = "Correo" required minlength = "8 " />
                                                </div> 
                                                <div class = "form-group ">
                                                    <input type = "password" name = "contrasena" class = "form-control " placeholder = "Contraseña" required minlength = "5" maxlength = "10 " />
                                                </div>
                                                <br/>
                                                <button type = "button" class = "btn btn-lg boton btn-principal btn-block "> Registrarse </button> 
                                            </form> 
                                        </div> 
                                    </div > 
                                </div> 
                            </div> 
                        </div> 
                    </div>
                </section> 
            </div> 
        );
    }
}

export default Registro;