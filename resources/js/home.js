// document.addEventListener( 'DOMContentLoaded', function() {
//     var splide = new Splide( '.splide' );
//     splide.mount();
// } );

document.addEventListener('DOMContentLoaded', function () {
    new Splide( '#clients-slider', {
        type: "loop",
        perPage: 4,
        autoHeight: true,
        pagination: false,
        arrows: true,
        perMove: 1,
    } ).mount();
})

