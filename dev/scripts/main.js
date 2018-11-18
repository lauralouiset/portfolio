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

functionality.hamburger = () => {
	$('.menu__burger').on('click', () => {
		$('.header__nav').toggleClass('nav__mobile');
	});
}

functionality.openModal = () => {
	$('.portfolio__item').on('click', function(){
		$(this).children('.portfolio__modal').addClass("modalOpen");
	});
}

functionality.closeModal = () => {
	$('.modal__closeButton').on('click', function(e){
		e.stopPropagation();
		$('.portfolio__modal').removeClass("modalOpen");
	});
}

$(document).ready(function() {
	functionality.stickyNav();
	functionality.scrollSpy();
	functionality.hamburger();
	functionality.openModal();
	functionality.closeModal();
});