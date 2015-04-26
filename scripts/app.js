'use strict';

var app = angular
	.module('TaskNinja', [
		'ngAnimate',
		'ngResource',
		'ngRoute',
		'firebase'
	])
	.constant('FURL', 'https://taskninja13.firebaseio.com/')
	.config( function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html'
			})
			.when('/post', {
				templateUrl: 'views/post.html'
			})
			.when('/edit', {
				templateUrl: 'views/edit.html'
			})
			.when('/browse', {
				templateUrl: 'views/browse.html'
			})
			.otherwise({
				redirectTo: '/'
		});
	});
		
