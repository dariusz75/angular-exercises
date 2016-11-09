/// <reference path="angular.min.js" />

/*
What is module in AngularJS
A Module is a container for different parts of the application i.e controllers, services, directives, etc.

How to create a module
To create Angular module we need to use module() method.
*/


var myApp = angular.module('myModule', []);
/*
The angular object cames from the documentation.
The first parameter in module() specifies the name for the module we are creating.
The second parameter is an array with all dependencies our module requires.
*/


/*
What is a controller in Angular
In Angular a controller is a JavaScript function.
The task of the controller is to build a model for the view to display.

How to create a controller
Firstly we need to create constructor function so we are creating 
a anonymous function and assigning to a variable.
Next we are passing ($scope) parameter. 
$scope is an Angular object coming from the framework and which will be 
available in the view (in our html file).
In this example we are adding property "message" with value 'Angular Tutorial' 
to the $scope object.
*/
var myController = function ($scope) {
	$scope.firstMessage = 'Angular Tutorial - first message';
	$scope.secondMessage = 'Some text - second message';
	$scope.thirdMessage = 'End of Angular Tutorial - third message'
}

/*
How to register controller with module
To register controller with module we need to use controller() function on our module.
We passing 2 parameters. 
The 1st parameter is the name of our registered controller.
The 2nd parameter is the controller we created earlier which is myController variable.
*/

myApp.controller('myRegisteredController', myController);


/*
Now we need to assiociate our module and our controller with our html document.
So in html tag we need to add the name of our module to ng-app directive in html tag <html ng-app="myModule">.
And to display message stored in our controller object we need to add the name 
of our registered controller to the body tag <body ng-controller="registeredController">.
And in the div body we need to reference to the object property which is storing the 
information we wont to be displayed.
In our case:
<div>
	{{ message }}
</div>

*/
