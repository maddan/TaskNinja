'use strict';

app.controller('TaskController', function($scope, FURL, $firebase, $location, $routeParams) {
	
	// Initialize connection to the firebase
	var ref = new Firebase(FURL);
	// Create a node named tasks in Firebase and return as fbTasks
	var fbTasks = $firebase(ref.child('tasks')).$asArray();
	// using $routeParams to retrieve the query param  id
	var taskId = $routeParams.taskId;
	
	if(taskId){
		$scope.selectedTask = getTask(taskId);
	}

	function getTask(taskId) {
		// we are getting the private function so no $scope used here	
		return $firebase(ref.child('tasks').child(taskId)).$asObject();
	}
	
	$scope.updateTask = function(task) {
		$scope.selectedTask.$save(task);
		$location.path('/browse');
	}

	//Display the tasks in browse view creating new scope array
	$scope.tasks = fbTasks;

	$scope.postTask = function(task) {
		fbTasks.$add(task);
		$location.path('/browse');
	}
});







//Use $save function to save tasks in the firebase