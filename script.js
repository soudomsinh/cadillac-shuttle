

// change color when scrolling

$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $nav.find('.nav-link').toggleClass('text-white', $(this).scrollTop() > $nav.height());
    });
});
