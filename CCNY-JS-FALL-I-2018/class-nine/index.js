
var array = ["I","the",  "the","cat"];

// if(array[2] === array[3]){
// 	print(array[2]);
// }

for (var i = 0; i<array.length;  i++){

	if (array[i] === array[i+1]){
		print(array[i])
	}
}


// finding duplicate string

// var array = ["I","am","the","cat","who","ate", "your", "fish", "fish"];

// for (var i = 0; i<array.length; i++){
// 	if (array[i] === array[i+1]){
// 		print(array[i]);
// 	}
// }


// scope


var x;

function myFunction(y){
	
	return x*y;
}

myFunction();






