'use strict';

app.factory('Auth', function(FURL, $firebaseAuth, $firebase) {

	var ref = new Firebase(FURL);
	var auth = $firebaseAuth(ref);

	var Auth = {

		user: {},

		login: function(user) {
			return auth.$authWithPassword({
				email: user.email, password: user.password
			});
		},
		//register
		register: function(user) {
			//Use a $createUser firbase function to create a user with email 
			//and password & return a promise function in Auth.login fn return
			return auth.$createUser({email: user.email, password: user.password
			})
			.then(function() {
				return Auth.login(user);
			})
			.then(function(data){
				// body...
				return Auth.createProfile(data.uid, user) {
			});			
		},
		//logout
		logout: function() {
			auth.$unauth();
		},
		//changePassword
		changePassword: function(user) {
			return auth.$changePassword({email: user.email, oldPassword: user.oldpass, newPassword: user.newpass});
		},

		//check to see if User is signedIn or not?
		signedIn: function() {
			return !!Auth.user.provider; //same as Auth.user && Auth.user.provider
		}
	};

	auth.$onAuth(function(authData) {
		if(authData) {
			//when user logins copy the data and pass it to the user
			angular.copy(authData, Auth.user);
		} else {
			//when the user logs out, relese the resource
			angular.copy({}, Auth.user);
		}
	});


	return Auth;
})