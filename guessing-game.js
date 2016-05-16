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

var playersGuessSubmission = function(){
	playersGuess = +$('#userInput').val();
	$('#userInput').val('');
	$('#userInput').attr('placeholder', 'Thanks for your guess!');
}

$('#submitButton').on('click', playersGuessSubmission);



