$(document).ready(function(){
	$('.style2').hover(function(){
		$(this).removeClass('style2');
		$(this).addClass('style3');
	}, function(){
		$(this).removeClass('style3');
		$(this).addClass('style2');
	})
})

var playersGuess;

var generateWinningNumber = function(){
	var num = Math.floor(Math.random()*100) + 1;
	return num;
}

var winningNumber = generateWinningNumber();

var guessArr = [];

var playersGuessSubmission = function(){
	playersGuess = +$('#userInput').val();
	$('#userInput').val('');
	checkGuess();
	guessArr.push(playersGuess);
	var guessList = guessArr.join(", ");
	$('#prevGuesses').text(" " + guessList);
}

$('#submitButton').on('click', playersGuessSubmission);

var checkGuess = function(){
	var message = $('#message');
	var guessesLeft = +$('#numGuesses').text();
	var string = guessMessage();
	if (playersGuess === winningNumber){
		message.text("CONGRATULATIONS, YOU WIN!");
		$('body').addClass("winner");
	} else {
		if ($.inArray(playersGuess, guessArr) === -1){
			if (guessesLeft === 1){
				message.text("SORRY, YOU LOSE.")
				$('body').addClass("fire");
			} else {
				message.text(string);
				$('#numGuesses').text(guessesLeft -1);
			}
		} else {
			message.text("You already guessed that number. " + string + " Try again!");
		}
	}
}

function lowerOrHigher(){
	var diff = playersGuess - winningNumber;
	if (diff > 0){
		return "higher";
	} else {
		return "lower";
	}
}

function guessMessage(){
	var highLow = lowerOrHigher();
	var diff = Math.abs(playersGuess - winningNumber);
	var maxDist = null;
	if (diff <= 10){
		maxDist = 10;
	} else if (diff <= 25){
		maxDist = 25;
	} else if (diff <= 50){
		maxDist = 50;
	} else if (diff <= 75){
		maxDist = 75;
	} else if (diff <= 100){
		maxDist = 100;
	}
	str = "Your guess, " + playersGuess + ", is " + highLow + " than and within " + maxDist + " digits of the winning number.";
	return str;
}

function provideHint(){
	var arr = winningNumber.toString().split("");
	console.log(arr);
	var index = Math.floor(Math.random() * 2);
	var digit = arr[index];
	$('#hintText').text("Hint: " + digit + " is one of the digits of the winning number!");
}

$('#hintButton').on('click', provideHint);

function playAgain(){
	winningNumber = generateWinningNumber();
	guessArr = [];
	$('#hintText').text("Hint:");
	$('#message').text("Good luck!");
	$('#userInput').focus();
	+$('#numGuesses').text(5);
	$('body').removeClass("winner");
	$('body').removeClass("fire");
}

$('#refreshButton').on('click', playAgain);

$('#userInput').keypress(function(e){
	var key = e.which;
	if (key === 13){
		playersGuessSubmission();
	}
})
