/**
 * Celular.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'conexionMysqlDocker',//localDiskDb
  attributes: {

    nombre:{
      type:'string'
    },

    sistemaOperativo:{
      type:'string'
    },

    version:{
      type:'integer'
    }
  }

};

