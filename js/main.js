$(function() {

    $(document).foundation();

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
                // console.log(lastScrollTop);
                // var prop = 'translateY(' + -lastScrollTop + ')';
                // $c1.css({
                //     '-webkit-transform': prop,
                //     '-moz-transform': prop,
                //     '-ms-transform': prop,
                //     '-o-transform': prop,
                //     'transform': prop

                // });

            } else {
                // ACTION ON
                // SCROLLING UP 
                // console.log('up');
            }
            lastScrollTop = nowScrollTop;
        }
    });

    var textarea = document.querySelector('textarea');
    textarea.addEventListener('keydown', autosize);

    function autosize() {
        var el = this;
        setTimeout(function() {
            el.style.cssText = 'height:auto; padding:0';
            el.style.cssText = '-moz-box-sizing:content-box';
            el.style.cssText = 'height:' + (el.scrollHeight + 3) + 'px';
        }, 0);
    }
    var submitted = false;
    $('form').one('submit', function() {
        var submitted = true;
        $('.submit-btn').prop('disabled', true);
    });

    $('#hidden_iframe').one('load', function(event) {
        $('.submit-btn').hide('fast');
        $('.submitted-successfully').show('fast');
        $("input").prop('disabled', true);
        $("textarea").prop('disabled', true);
        $("select").prop('disabled', true);
    });
});
