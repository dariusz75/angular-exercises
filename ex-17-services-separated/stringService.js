myApp.factory('stringService', function(){
															return {
																processString: function (input) {
																								
																								if (!input) {
																									return input;
																								} 

																								var output = '';

																								for (var i = 0; i < input.length; i++) {
																									if (i > 0 && input[i] === input[i].toUpperCase() ) {
																										output = output + ' ';
																									} 
																										output = output + input[i];															
																								}

																								return output;
																							}
																			};
																		});




/*
To create the separate service we need to use the factory() method.
As the first parameter, we give any name we want for our service to be named.
The second parameter is a anonymous function. In our case:
factory('stringService, function(){})

The function in factory method returns an object.
We spacify the property name and assign the valu to it.
In our case it is the function we want to use as our service.

Now, to start usin the service globally we need to inject it into the controller. 

*/