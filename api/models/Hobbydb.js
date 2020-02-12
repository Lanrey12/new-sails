/**
 * Hobbydb.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    title:{
      type:'string'
    },
    firstname:{
      type:'string'
    },
    lastname:{
      type:'string'
    },
    sex:{
      type:'string'
    },
    age:{
      type:'string'
    },

  },
  connection: 'mongodb'
};

