var navButton = $('.hamburgerButton > button');

navButton.click(function(){
	$('nav > ul > li').toggleClass('toggleNav');
	$('nav > ul > li:first-child').toggleClass('li-hide');
})