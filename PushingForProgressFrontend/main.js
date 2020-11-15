// Scrolling behaviour: bg-light, navbar-light
var landingPage = document.getElementById("landing-page");
new simpleParallax(landingPage);
var callAction = document.getElementById("water");
new simpleParallax(callAction, {
	scale: 1.5
});

$(function () {
    $(document).scroll(function () {
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var tags = $(".sectionS");
        console.log(pageTop);
        console.log(pageBottom);
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            if ($(tag).position().top < pageBottom) {
                console.log("visible!"); 
                $(tag).addClass("visible");
            } else {
                $(tag).removeClass("visible");
            } }
        var $nav = $(".navbar");
        var $text = $(".nav-link");
        var $brand = $('.navbar-brand');
        var $hovr = $('.hvr-underline-from-left');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $text.toggleClass('scrolledLink', $(this).scrollTop() > $nav.height());
        $brand.toggleClass('scrolledBrand', $(this).scrollTop() > $nav.height());
        $hovr.toggleClass('scrolledhovr', $(this).scrollTop() > $nav.height());
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});