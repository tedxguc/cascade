$(function() {
    var lastScrollTop = 0,
        delta = 5;

    var $c0 = $('.c0');
    var $c1 = $('.c1');
    var $c2 = $('.c2');

    $(window).scroll(function() {
        var nowScrollTop = $(this).scrollTop();
        if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
            if (nowScrollTop > lastScrollTop) {
                // ACTION ON
                // SCROLLING DOWN 
                console.log(lastScrollTop);
                var prop = 'translateY(' + -lastScrollTop + ')';
                $c1.css({
                    '-webkit-transform': prop,
                    '-moz-transform': prop,
                    '-ms-transform': prop,
                    '-o-transform': prop,
                    'transform': prop

                });

            } else {
                // ACTION ON
                // SCROLLING UP 
                console.log('up');
            }
            lastScrollTop = nowScrollTop;
        }
    });
});
