let map;

DG.then(function () {
    map = DG.map('map', {
        center: [74.611991, 42.889162],
        zoom: 13
    });
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});