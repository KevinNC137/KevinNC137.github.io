$(document).on('scroll', onScroll);

function onScroll(event){
    var scrollPos = $(document).scrollTop();

    if (scrollPos > 280) {
        $('.nav').removeClass('unfixed');
        $('.nav').addClass('fixed');
    } else {
        $('.nav').removeClass('fixed');
        $('.nav').addClass('unfixed');
    }

    $('.nav li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        
        if (refElement.position().top <= scrollPos + 400 && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav li').removeClass("active");
            currLink.parent().addClass('active');
        }
        else {
            currLink.removeClass("active");
        }
    });
}