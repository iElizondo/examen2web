import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import Comentario from './Comentario';

const Witter = (props) => {
    return (
        <div class="card p-4 mb-3">
            <header class="h-card mb-2">
                <img alt="" class="usuario-card rounded-circle border border-success"/>
                <p class="fecha"></p>
            </header>
            <div class="c-card">
                <div v-if="edit">
                    <div class="input-group mb-3">
                        <input v-model="txt_editar" type="text" class="form-control" placeholder="Editar..." aria-label="Editar..." aria-describedby="button-addon2"/>
                        <div class="input-group-append">
                            <button class="btn btn-outline boton btn-principal" type="button" id="button-addon2"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <p class="texto"></p>
                </div>
                <div class="input-group mb-3" v-if="!edit">
                    <input v-model="txt_editar_comentario" type="text" class="form-control" placeholder="Comentar..." aria-label="Comentar..." aria-describedby="button-addon2"/>
                    <div class="input-group-append">
                        <button class="btn btn-outline boton btn-principal" type="button" id="button-addon2"> < FontAwesomeIcon icon = { faPaperPlane }/></button>
                    </div>
                </div>    
            </div>
        <div class="l-card mb-2 d-flex flex-row-reverse bd-highlight">
            <button class="btn btn-outline boton btn-action rounded-circle bd-highlight ml-2" type="button">< FontAwesomeIcon icon = { faPencilAlt }/></button>
            <button class="btn btn-outline boton btn-action rounded-circle bd-highlight ml-2" type="button">< FontAwesomeIcon icon = { faTrashAlt }/></button>
        </div>
        <footer>
            <div class="accordion">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <i class="fas fa-eye"> Comentarios</i>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="'#comentarios'+witte.id">
                        <div class="card-body">
                            {/* <Comentario></Comentario> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    )
}

export default Witter;