import React from 'react'

const Comentario = (props) => {
    return (
    <div class="border rounded p-3">
        <header class="mb-2">
            <img alt="" class="usuario-card rounded-circle border border-success"/>
            <p class="fecha"></p>
        </header>
    <div class="row">
        <div class="col">
            <div v-if="edit">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Editar..." aria-label="Editar..." aria-describedby="button-addon2"/>
                    <div class="input-group-append">
                        <button class="btn btn-outline boton btn-principal" type="button" id="button-addon2"><i class="fas fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
            <div class="" v-else>
                <p class="texto"></p>
            </div>
            <div class="d-flex flex-row-reverse bd-highlight">
                <button  class="btn btn-outline boton btn-action rounded-circle bd-highlight ml-2" type="button"><i class="fas fa-pencil-alt fa-sm"></i></button>
                <button  class="btn btn-outline boton btn-action rounded-circle bd-highlight ml-2" type="button"><i class="fas fa-trash-alt fa-sm"></i></button>
            </div>
        </div>
    </div>
</div>)
}

export default Comentario;