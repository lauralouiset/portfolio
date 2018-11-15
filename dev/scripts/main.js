const functionality = {};

functionality.scrollSpy = () => {
	$(".header__menu").stickynav();
}

functionality.stickyNav = () => {
	$(window).scroll(function () {
		var sticky = $('.header__nav'),
			scroll = $(window).scrollTop();

		if (scroll >= 100) sticky.addClass('header__nav--bg');
		else sticky.removeClass('header__nav--bg');
	});
} 





$(document).ready(function() {
	functionality.stickyNav();
	functionality.scrollSpy();
});