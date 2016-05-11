$(document).ready(function(){
	$('.style2').hover(function(){
		$(this).removeClass('style2');
		$(this).addClass('style3');
	}, function(){
		$(this).removeClass('style3');
		$(this).addClass('style2');
	})
})