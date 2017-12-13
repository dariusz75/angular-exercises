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
If tere are no dependencies the array stays empty.



######## AngularJS CONTROLLER ############

The Angular controller is a JavaScript function.
The task of the controller is to build a model for the view to display.


*** How to create a controller
Firstly we need to create constructor function so we are creating 
an anonymous function assigned to a variable.

Next we are passing ($scope) parameter. 
The scope is the binding part between the HTML (view) and the JavaScript (controller). 
The scope is an object with the available properties and methods. 
The scope is available for both the view and the controller.
*/



var myController = function ($scope) {

	$scope.firstMessage = 'Angular Tutorial - first message';
	$scope.secondMessage = 'Some text - second message';
	$scope.thirdMessage = 'End of Angular Tutorial - third message'

}


/*
*** Now we need to register controller to module.

To register controller with module we need to use controller() function on our module,
which takes two parameters. 
The 1st parameter is the name of our registered controller - any name we want (as long as it hasn't been used yet).
The 2nd parameter is the name of the controller we created earlier which is myController variable.
*/

myApp.controller('myRegisteredController', myController);


/*
Now we need to assiociate our module and our controller with our html document.

So in html tag we need to add the name of our module to ng-app directive in html tag.

So for that we need to add in html tag the name of our module like 

<html ng-app="myModule">.


And to display message stored in our controller object we need to add the name 
of our registered controller to the section we want to be linked with our controller.
In this case is the body tag. 

<body ng-controller="myRegisteredController">.


And in the div body we need to reference to the object property which is storing the 
information we want display.
In our case:

<div>
	{{ message }}
</div>

*/
