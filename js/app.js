$(document).ready(function() {

	'use strict'

	var input = prompt('Please enter a number');

	if ( input%1 != 0 ) {
		if (isNaN(input)) {
			alert( input +" is not a number!!");	
		} else {
			alert(input + " is a decimal!!");
		}
	}
	else {
		function fizzbuzz(x) {
			for( var i = 1; i <= x; i++) {
				if( i%3 == 0 ) {
					if (i%5 == 0) {
						$('body').append("fizz buzz<br>");
					}
					else {
						$('body').append("fizz<br>");
					}
				}
				else if (i%5 == 0) {
					$('body').append("buzz<br>");
					}
				else {
					$('body').append(i + "<br>");
				}
			}
		}
		fizzbuzz(input);
	}
});