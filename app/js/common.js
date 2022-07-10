$(function() {


	// header menu styles start

	$(".burger-btn").click(function(e){
		e.preventDefault();
		$(".mobile__menu").toggleClass("active");
		$("html").toggleClass("fixed");
	});

	$(".close-burger").click(function(e){
		e.preventDefault();
		$(".mobile__menu").removeClass("active");
		$("html").removeClass("fixed");
	});

	// header menu styles end

	// header search start

	$(".open-search").click(function(e){
		e.preventDefault();
		$(".header__search-line").toggleClass("active");
	})

	$(".cancel-search").click(function(e){
		e.preventDefault();
		$(".header__search-line").removeClass("active");
	})
	// header search end

});
