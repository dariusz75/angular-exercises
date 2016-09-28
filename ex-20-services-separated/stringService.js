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
Do utworenia serwisu sluzy metoda factory().
Jako pierwszy parametr podajemy dowolna nazwe serwisu.
Drugi parametr to bezimienna funkcja.

factory('myService', function(){})

Funkcja ta ma za zadanie zwrocic nam obiekt javascript.

processString to w naszym przypadku dowolna nazwa key obiektu.

*/