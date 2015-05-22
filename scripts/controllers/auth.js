'use strict';

app.controller('AuthController', function($scope, $location, Auth) {
	
	$scope.register = function(user) {
		//Auth.register() is an asynchronous fn and it would return
		//a  promise -> use .then function 
		Auth.register(user).then(function() {
			console.log("Registered successfully!");
			$location.path('/');
		}, function(err) {
			console.log("Error...");
		});
	};

	$scope.login = function(user) {
		Auth.login(user).then(function() {
			console.log("Logged in successfully!");
			$location.path('/');
		}, function(err) {
			console.log("Error...");
		});
	};

	$scope.changePassword = function(user) {
		
		Auth.changePassword(user)
			.then(function() {
				
				//Reset form since it is a modal
				$scope.user.email = '';
				$scope.user.oldPass = '';
				$scope.user.newPass = '';

				console.log("Password changed successfully!");
			}, function(err) {
				console.log("Error...");
			});
	};
});