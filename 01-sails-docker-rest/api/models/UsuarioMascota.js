/**
 * UsuarioMascota.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

//DueñosDeMascotas
module.exports = {

  attributes: {
    idUsuario:{
      model:"Usuario"//Tabla Papá
    },
    idMascota:{
      model:"Mascota"//Tabla papá
    },
    fechaDeInicioAdopcion:{
      type:"date"
    },
    fechaFinalizacionAdopcion:{
      type:"date"
    }
  }
};

