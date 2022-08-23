$(function() {

    document.querySelectorAll(".catalog__mobile-item-slider").forEach(item => {
      const swiper = new Swiper(item, {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: item.parentNode.querySelector(".swiper-product-paggination"),
          clickable: true,
          dynamicMainBullets: 3,
        },
      })
    })

});