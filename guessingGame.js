$(document).ready(function(){

	var playersGuess;

	var winningNumber = generateWinningNumber();

	function generateWinningNumber(){
		var num = Math.floor(Math.random()*100) + 1;
		return num;
	}

	function playersGuessSubmission(){
		playersGuess = +$('#userInput').val();
		$('#userInput').val = "";
	}

	$('#submitButton').on('click', playersGuessSubmission);

})






// // Determine if the next guess should be a lower or higher number

// function lowerOrHigher(){
// 	// add code here
// }

// // Check if the Player's Guess is the winning number 

// function checkGuess(){
// 	// add code here
// }

// // Create a provide hint button that provides additional clues to the "Player"

// function provideHint(){
// 	// add code here
// }

// // Allow the "Player" to Play Again

// function playAgain(){
// 	// add code here
// }


// /* **** Event Listeners/Handlers ****  */

