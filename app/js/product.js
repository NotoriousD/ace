var glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    gap: 0,
    breakpoints: {
        889: {
            perView: 3
        },
        480: {
            perView: 1
        }
    }
});
glide.mount();

$(".pa-value:not(.pa-value-not-stock),.pr-value").on("click", function(){
   $(this).addClass("active").siblings().removeClass("active");
});