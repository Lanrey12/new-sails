/**
 * HobbydbController
 *
 * @description :: Server-side logic for managing hobbydbs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var nodemailer = require('nodemailer');
module.exports = {
       // to view student record
  records:function(req, res){
    Hobbydb.find({}).exec((err, hobbydb) => {
      if(err) {
        res.send(500,{error:'Database error'});


      }
      return res.view('records', {hobbydb:hobbydb});
    });
  },
  search:function(req, res){

    return res.view('search');

  },

  add:function(req, res){
    return res.view('add');
  },
  create:function(req, res){
    var title = req.body.title;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var age = req.body.age;
    

    Hobbydb.create({title:title, firstname:firstname, lastname:lastname,
      age:age}).exec((err) => {
      if(err) {
        res.send(500,{error:'Database error'});
      }
      EmailService.sendEmail(title);
      res.redirect('/hobbydb/records');
    });
  },

  delete:function(req, res){

    Hobbydb.destroy({id:req.params.id}).exec((err) => {
      if(err) {
        res.send(500,{error:'Database error'});
      }
      res.redirect('/hobbbydb/records');
    });
    return false;
  },

  edit:function(req, res){

    Hobbydb.findOne({id:req.params.id}).exec((err, hobbydb) => {
      if(err) {
        res.send(500,{error:'Database error'});
      }
      return res.view('edit' , {hobbydb:hobbydb});
    });
  },
  update:function(req, res){

    var title = req.body.title;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var age = req.body.age;

    Hobbydb.update({id: req.params.id},{title:title, firstname:firstname, lastname:lastname,
      age:age,}).exec((err) => {
      if(err) {
        res.send(500,{error:'Database error'});
      }
      res.redirect('/hobbydb/records');
    });
    return false;
  }
};

