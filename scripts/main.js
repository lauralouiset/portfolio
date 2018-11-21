const functionality = {};

functionality.scrollSpy = () => {
	$(".header__menu").stickynav();
}

functionality.scrollReveal = () => {
	const sr = ScrollReveal({ reset: true });
	sr.reveal('.featured__project', { scale: 0.80, duration: 1000 });

	sr.reveal('.laptop', { duration: 1000, distance: '200px', origin: 'right'});
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
	$('.portfolio__item').on('click', function () {
		const id = $(this).attr('id');
		$(`.modal__${id}`).addClass('modalOpen');
		$('.filter').removeClass('hidden');
	});
}

functionality.closeModal = () => {

	$('.modal__closeButton').on('click', function (e) {
		e.stopPropagation();
		$('.portfolio__modal').removeClass("modalOpen");
		$(".filter").addClass("hidden");
	});
}

// closes modals on background click
$(document).click(function (e) {
	if (!$(e.target).closest(".portfolio__modal,.portfolio__item").length) {
		$("body").find(".portfolio__modal").removeClass("modalOpen");
		$(".filter").addClass("hidden");
	}
});

$(document).ready(function () {
	functionality.stickyNav();
	functionality.scrollSpy();
	functionality.scrollReveal();
	functionality.hamburger();
	functionality.openModal();
	functionality.closeModal();
});