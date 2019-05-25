var navButton = $('.hamburgerButton > button');

navButton.click(function(){
	$('nav > div > ul').toggleClass('toggleNav');
	$('nav > div > ul > li').toggleClass('toggleNav');
	$('.photo').toggleClass('.photo-positioning');
})