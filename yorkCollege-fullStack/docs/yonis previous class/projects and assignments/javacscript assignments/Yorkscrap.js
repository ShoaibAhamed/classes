// These exercises are based on the variables exercises, so you may start from those (your solutions or ours) or start from scratch.
// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
//Question 1:
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
function tellfortune(NumberChildren, PartnerName, GeoLocation, JobTItle){

alert("You WIll be a " + JobTItle + " in " + GeoLocation + ", and married to " + PartnerName + " with " + NumberChildren + " kids.");

}
// Call that function 3 times with 3 different values for the arguments.
tellfortune(4, "cindy", "newyork", "Developer");
tellfortune(1, "saraH", "TEXAS", "cook");
tellfortune(3, "kelly", "chicago", "artist");

//------------------------------------------------------------------------------------------------------------------
//Question 2:
// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
function calculateDogAge(PuppyAge, HumanAge){

var PuppyYears = PuppyAge * 7;
var PuppyHuman = HumanAge / 7;

alert("Your doggie is " + PuppyYears + " years old in dog years! (converted from Human years to dog years)");

// Bonus: Add an additional argument to the function that takes the conversion rate of Dog years to Human years.
alert("Your doggie is " + PuppyHuman + " years old in Human years! (converted from dog years to Human)");
}
// Call the function three times with different sets of values.
calculateDogAge(3, 21);
calculateDogAge(2, 57);
calculateDogAge(8, 100);

//--------------------------------------------------------------------------------------
//Question 3: 
// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
function calculateSupply(Age, AmountPerDay){

var MaxAge = 50;
var TotalYears = MaxAge - Age
var AmountOneYear = Math.round(AmountPerDay) * 365
var AmountForLife = AmountOneYear * TotalYears
alert("You will need " + AmountForLife + " snacks to last you until the ripe old age of " + MaxAge)
}
// Call that function three times, passing in different values each time.
calculateSupply(49, 2);
calculateSupply(45, 2);
calculateSupply(30, 2);
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
//I just used the Math.Round() function to round decimals to  the nearest whole number
calculateSupply(49, 2.8)

//----------------------------------------------------------------------------------------
//Question 4:
// The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumfrence:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
function calcCircumfrence(CircleRadius){

	
	var CircleCircum = 2 * CircleRadius * Math.PI;
	alert("The circumference is " + CircleCircum);
	

}
calcCircumfrence(7)

// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".
function calcArea(CircleRadius){


	var CircArea =  Math.PI * CircleRadius * CircleRadius;
	alert("The area is " + CircArea);

}
calcArea(7)

//----------------------------------------------------------------------------------------
//Question 5:
// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
function celsiusToFahrenheit(TheCelsius){

	var CelsiusData = TheCelsius;
	var CelsiusToFah = CelsiusData * 1.8 + 32;

	alert(CelsiusData + "°C is " + CelsiusToFah + "°F");

}
celsiusToFahrenheit(5)

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function fahrenheitToCelsius(TheFahren){

	var FahrenData = TheFahren;
	var FahToCelsius = (FahrenData - 32) / 1.8;
	
	alert(FahrenData + "°F is " + FahToCelsius + "°C");

}
fahrenheitToCelsius(55)

//----------------------------------------------------------------------------------------------------
// The Lifetime Supply Calculator - Modified version
// take 3 arguments: age, amount per day, Current year.
// calculates the amount consumed for rest of the life (based on a constant max age).
// Please take into consideration leap years
// Also the program should be able to handle negative numbers

//This function validates the  input - Check if their is any negative numbers and 0 -- Please call this function in the console 1st
function NoBs(Born, SnacksaDay, PositiveYear){
	
	var TheErrors = {PosAge : "Age cant be 0 and cant be negative...Your not even Born yet!", PosSnacks : "Snacks cant be a negative number!", PosYear : "Current year cant be a negative year!"};

		if(Math.sign(Born) !== 1){
			//Age cant be 0 and cant be negative
			 return TheErrors.PosAge;
		}
		if(Math.sign(SnacksaDay) === -1){
			//snacks cant be negative
			return TheErrors.PosSnacks;
		}
		if(Math.sign(PositiveYear) === -1){
			// current year cant be a negative year
			return TheErrors.PosYear;
		}
			
		YourAge = Born;
		AmountPerDay = SnacksaDay;
		YourYear = PositiveYear;			
		return MainInfo(YourAge, AmountPerDay, YourYear);
		
}

//THis function will perform the calculations based on input and display to screen
function MainInfo(YourAge, AmountPerDay, YourYear){

var MaxAge = 50;
var LifeSpan = MaxAge - YourAge;
var JudgementDay = YourYear + LifeSpan;
var CurrentYear = YourYear;

//calling my datakeeper function
var tracked = DataKeeper(CurrentYear, JudgementDay);


var SnackLeapsInDays = tracked.Leaps * 366;
var TotalSnacksInLeap = AmountPerDay * SnackLeapsInDays;

var SnackNonLeapsInDays = tracked.Nonleap * 365;
var TotalSnacksInNonLeaps = AmountPerDay * SnackNonLeapsInDays;

var EatEverything = TotalSnacksInNonLeaps + TotalSnacksInLeap;

alert("You are " + YourAge + " and will be taking " + AmountPerDay + " Snack's per day as of " + YourYear +
	   ". Assuming you will live to " + MaxAge + " you will need a total of " + EatEverything + " Snacks.");
console.log(tracked);
console.log(EatEverything);

}

//This function is used to decipher between leap years and non leap years based on current year and end year 
function DataKeeper(CurrentYear, JudgementDay){

	var Allleaps = 0;
	var AllNonLeaps = -1; // intitatilized to - 1 to compensate for the extra year in Non leap years
	var TrackYears = {Leaps : Allleaps, Nonleap : AllNonLeaps};

	for(var i = CurrentYear; i <= JudgementDay; i++){

		if (i%4 === 0){
		
			Allleaps = Allleaps + 1;
			TrackYears.Leaps = Allleaps
		}
		else{

			AllNonLeaps = AllNonLeaps + 1;
			TrackYears.Nonleap = AllNonLeaps;

		}
		
	}
			return TrackYears;
}

NoBs(26, 2, 2018)

//-------------------------------------------------------------------------------------------------------------------------------
//Please create a simple bank account. It should have three functions. Withdraw, add, and balance.  
//Please optimize for different currencies and incorrect input. 
//Such as if someone wants to deposit ten euros it should convert it to US dollars and return balance.  
//You can look up current conversation rates online. (edited)
//You can get input from a user from prompt()
function Withdraw(){

	var Amount = prompt("Please enter an Amount to Withdraw:");


}

function Add(){


	var Amount1 = prompt("Please enter an Amount to Deposit:");
	alert("You added " + Amount1 + " and your balance is: " + Balance(Amount1));



}

function Balance(Moneys){

	var AllMoney = Moneys;
	var lastTransaction;

	if(typeof(lastTransaction) === "undefined"){

		return AllMoney;


	}
	else{

		lastTransaction = Moneys;
		AllMoney = lastTransaction + Moneys;
		return AllMoney;


	}


}
















//-----------------------------------------------------------------------------------------------------------------
// NOTE: Make sure to use the `var` keyword for ALL variable declarations.
// #1: Create an array of strings called `foods` that contains three foods.
// Type your solution immediately below this line:
var foods = ["apple", "grape", "melon"];

// #2: Access the last item in the array and assign to a variable called `last`.
// Type your solution immediately below this line:
 var last = foods[2];

// #3: Create an empty array called `favoriteFoods`.
// Type your solution immediately below this line:
var favoriteFoods = [];

// #4: Create a `for` loop that adds each string in `foods` to `favoriteFoods`.
// Type your solution immediately below this line:

for(var i = 0; i < foods.length; i++){

	favoriteFoods[i] = foods[i];
	console.log(favoriteFoods[i]);


}

// #5: Create an object literal called `instructor` that contains three key-value pairs.
// Type your solution immediately below this line:

var instructor = {

	name: "khem",
	age: 50,
	SkillLevel: "proffessional"


}
instructor.name


/*-----------------------------------------------------------------------------------------------------------------------------------------------------
You'll create a simple word guessing game where the user gets infinite tries to guess the word 
(like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters 
(e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__')
and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed,
and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
Bonus: Make it more like Wheel of Fortune:
Start with a reward amount of $0
Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), 
otherwise subtract from their reward.
When they guess the word, log their final reward amount.
Bonus: Make it like Hangman:
Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
*/
//------------------------------------------------------------------------------

var secretWord = ['f','o','x'];
var currentGuessedLetters = [];

function guessLetter(){

	var theGuessedLetter = prompt("Please enter a letter");
	currentGuessedLetters.push(theGuessedLetter);

	var AlreadyGuessed = []

	for(var i = 0; i < currentGuessedLetters.length; i++){

	if(secretWord.includes(currentGuessedLetters[i]) == true && AlreadyGuessed.includes(currentGuessedLetters[i]) == false && AlreadyGuessed.length === secretWord.length - 1){

		alert("Congrats you guessed all the letters and won the game!!");
		break;

	}
	else if(AlreadyGuessed.includes(currentGuessedLetters[i]) == true && secretWord.includes(currentGuessedLetters[i]) == true){

		alert("You already guessed that one theirs more keep going!");
		theGuessedLetter = prompt("Please enter a different letter");
		currentGuessedLetters.push(theGuessedLetter);
		
	}	
	else if(secretWord.includes(currentGuessedLetters[i]) == true && AlreadyGuessed.includes(currentGuessedLetters[i]) == false){     

		alert("You guessed correctly!");	
		AlreadyGuessed.push(theGuessedLetter);			
		theGuessedLetter = prompt("Their are still letters remaining! Please enter a another letter");
		currentGuessedLetters.push(theGuessedLetter);
		
	}	
	else if(secretWord.includes(currentGuessedLetters[i]) == false && AlreadyGuessed.includes(currentGuessedLetters[i]) == false){    
	
		theGuessedLetter = prompt("No luck! Please enter a another letter");
		currentGuessedLetters.push(theGuessedLetter);

	  }

   }	

}
guessLetter()

