/// <reference path="angular.min.js" />

/*

######## AngularJS MODULE ############

A Module is a container for different parts of the application i.e controllers, services, directives, etc.

*** How to create a module
To create Angular module we need to use module() method.
*/
var myApp = angular.module('myModule', []);
/*
The angular.module comes from the framework.
The first parameter in module() specifies the name for the module we are creating.
The second parameter is an array with all dependencies our module requires.
*/


/*
######## AngularJS CONTROLLER ############

An Angular controller is a JavaScript function.
The task of the controller is to build a model for the view to display.

*** How to create a controller
Firstly we need to create constructor function so for that we are creating a anonymous function and 
assigning to a variable.
Next we are passing ($scope) parameter. 
$scope is an Angular object coming from the framework and which will be available in the view (in our html file).
In this example we are adding property "message" with value 'Angular Tutorial' to the $scope object.
*/
var myController = function ($scope) {
	$scope.message = 'Angular Tutorial';
	$scope.endMessage = 'The End of Angular Tutorial';
}

/*
*** How to register controller with module
To register controller with module we need to use controller() function on our module.
We passing 2 parameters. 
The 1st parameter is the name of our registered controller.
The 2nd parameter is the controller we created earlier which is myController variable.
*/

myApp.controller('myRegisteredController', myController);


/*
Now we need to assiociate our module and our controller with our html document.
So for that we need to add in html tag the name of our module like <html ng-app="myModule">.
And to display message stored in our controller object we need to add the name 
of our registered controller to the body tag <body ng-controller="myRegisteredController">.
And in the div body we need to reference to the object property which is storing the 
information we wont to be displayed.
In our case:
<div>
	{{ message }}
</div>

*/
