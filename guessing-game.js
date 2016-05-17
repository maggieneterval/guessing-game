$(document).ready(function(){

	var generateWinningNumber = function(){
		var num = Math.floor(Math.random()*100) + 1;
		return num;
	}

	var submissionFunction = function(){
		var guessArr = [];
		var playersGuessSubmission = function(){
			var playersGuess = +$('#userInput').val();
			$('#userInput').val('');
			checkGuess(playersGuess, winningNumber, guessArr);
			guessArr.push(playersGuess);
			var guessList = guessArr.join(", ");
			$('#prevGuesses').text(" " + guessList);
		}
		return playersGuessSubmission;
	}

	var checkGuess = function(playersGuess, winningNumber, guessArr){
		var message = $('#message');
		var guessesLeft = +$('#numGuesses').text();
		var string = guessMessage(playersGuess, winningNumber);
		if (playersGuess === winningNumber){
			message.text("CONGRATULATIONS, YOU WIN!");
			$('body').addClass("winner");
		} else {
			if ($.inArray(playersGuess, guessArr) === -1){
				if (guessesLeft === 1){
					message.text("SORRY, YOU LOSE. WINNING NUMBER: " + winningNumber);
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

	var lowerOrHigher = function(playersGuess, winningNumber){
		var diff = playersGuess - winningNumber;
		if (diff > 0){
			return "higher";
		} else {
			return "lower";
		}
	}

	var guessMessage = function(playersGuess, winningNumber){
		var highLow = lowerOrHigher(playersGuess, winningNumber);
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

	var provideHint = function(winningNumber){
		return function(){
			console.log(winningNumber);
			var arr = winningNumber.toString().split("");
			console.log(arr);
			var index = Math.floor(Math.random() * 2);
			if (arr.length ===1){
				var digit = arr[0];
			} else {
				var digit = arr[index];
			}
			console.log(digit);
			$('#hintText').text("Hint: " + digit + " is one of the digits of the winning number!");
		}
	}

	var newGame = function(){
		setClicks(submissionFunction())
		winningNumber = generateWinningNumber();
		console.log(winningNumber);
		guessArr = [];
		$('#hintText').text("Hint:");
		$('#message').text("Good luck!");
		$('#userInput').focus();
		+$('#numGuesses').text(5);
		$('body').removeClass("winner");
		$('body').removeClass("fire");
		$('#prevGuesses').text("");
		$('#hintButton').off('click');
		$('#hintButton').on('click', provideHint(winningNumber));
	}

	var setClicks = function(func){
		$('#submitButton').off('click');
		$('#userInput').off('keypress');
		$('#submitButton').on('click', func)
		$('#userInput').keypress(function(e){
			var key = e.which;
			if (key === 13){
				func();
			}
		})
	}

	$('#refreshButton').on('click', newGame);

	newGame();

	$('.style2').hover(function(){
		$(this).removeClass('style2');
		$(this).addClass('style3');
	}, function(){
		$(this).removeClass('style3');
		$(this).addClass('style2');
	})
})


