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

	$(document).ready(function(){
		document.querySelectorAll(".mobile__li-tracker .sub-menu").forEach(item =>{
			$(item).attr("data-copy-item",$(item).parent().index());
			$(".mobile__menu-secondary .mobile__menu-child").append(item);
		})
	});

	$(".mobile__li-tracker.menu-item-has-children > a").click(function(e){
			e.preventDefault();
			$(".mobile__menu-default").addClass("hidden");
			$(".mobile__menu-secondary").addClass("active");
			$(`[data-copy-item="${$(this).parent().index()}"]`).addClass("active").siblings().removeClass("active");
	});

	$(".rall-back").click(function(e){
		e.preventDefault();
		$(".mobile__menu-default").removeClass("hidden");
		$(".mobile__menu-secondary").removeClass("active");
		$(".mobile__menu-copy-container ul").removeClass("active");
	});


});
