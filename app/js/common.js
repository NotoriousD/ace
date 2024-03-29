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
			$(".header__chengable-menu").addClass("chengable-active");
			$(this).parent().addClass("current-mobile-menu-item").siblings().removeClass("current-mobile-menu-item");
			$(".mobile__menu-default").addClass("hidden");
			$(".mobile__menu-secondary").addClass("active");
			$(`[data-copy-item="${$(this).parent().index()}"]`).addClass("active").siblings().removeClass("active");
	});

	$(".rall-back").click(function(e){
		e.preventDefault();
		$(".header__chengable-menu").removeClass("chengable-active");
		$(".current-mobile-menu-item").removeClass("current-mobile-menu-item");
		$(".mobile__menu-default").removeClass("hidden");
		$(".mobile__menu-secondary").removeClass("active");
		$(".mobile__menu-copy-container ul").removeClass("active");
	});

	// custom lang switcher

	let currentLang = document.querySelector(".wpml-ls-current-language a");
  !!currentLang ? $(".header__lang-current").html(currentLang.cloneNode(true)) : '';

  if(!!$((".wpml-ls-item:not(.wpml-ls-current-language)"))){
    document.querySelectorAll(".wpml-ls-item:not(.wpml-ls-current-language)").forEach(item => {
      $(".header__lang-list").append(item.cloneNode(true));
    })
  }


	let productSlide = document.querySelector(".product__slider");

	const swiperproduct = new Swiper(productSlide, {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		zoom: {
			maxRatio: 5,
		},
		navigation: {
			nextEl: '.product-next-arrow',
			prevEl: '.product-prev-arrow',
		},
		pagination: {
			el: '.swiper-product-pagination',
			clickable: true,
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
				spaceBetween: 2,
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 3,
				spaceBetween: 2,
			},
			880: {
				slidesPerView: 1,
			}
		}
	})

	// $('.btn-test-hook').click( function(e) { 
		
	// });


	$(".description-link").click(function(e){
		e.preventDefault();
		$(this).addClass("active").siblings().removeClass("active");
		$(".description-item").eq($(this).index()).addClass("active").siblings().removeClass("active");
	})



	document.addEventListener("click", (e) => {
    e.stopPropagation();
    if(document.querySelector(".overflow") == e.target){
        document.querySelector(".modal").classList.remove('active');
    }
});
	
const closeModal = document.querySelectorAll(".close-modal-btn");

if(document.querySelectorAll(".close-modal-btn").length > 0){
	closeModal.forEach(closeBtn => {
			closeBtn.addEventListener("click", (e) =>{
					e.preventDefault();
					closeBtn.parentNode.parentNode.classList.remove("active");
			})
	})
} 


});
