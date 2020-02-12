/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const passport = require('passport');
const user = require('../models/User')
	module.exports = {
		//Login function
		login: function(req, res) {
			passport.authenticate('local', function(err, user, info){
				if((err) || (!user)) return res.send({ message: info.message, user: req.user});
				
				req.login(user, function(err) {
					if(err) res.send(err);
					return res.redirect('/');
				});
			})(req, res);
		},
		//Logout function
		logout: function(req, res) {
			req.logout();
			res.redirect('/');
		},
		//Register function
		register: function(req, res){
			//TODO: form validation here
			data = {
				
				email: req.body.email,
				password: req.body.password,
				
			}
			User.create(data).exec(function(err, user){
				if (err) return res.negotiate(err);

				//TODO: Maybe send confirmation email to the user before login
				req.login(user, function(err){
					if (err) return res.negotiate(err);
					sails.log('User '+ user.id +' has logged in.');
					return res.redirect('/');
				})
			})
		}
	};