
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    // ハンバーガーメニュー //
    $(function () {
        $('.hamburger').on('click', function () {
            $(this).toggleClass('active');
            $('.header').toggleClass('active'); // header //
            $('.header__circle-bg').toggleClass('active');
            $('.sp-nav').toggleClass('active'); // ドロワーメニュー //
            $('body').toggleClass('no-scroll'); // ドロワーメニュー下の背景固定 //


            let img = $('.header__logo-color').children('img');
            let currentSrc = img.attr('src');
            let newSrc = '';

            if (currentSrc.includes('white')) {
                newSrc = currentSrc.replace('white', 'navy');
            } else {
                newSrc = currentSrc.replace('navy' , 'white');
            }

            img.attr('src', newSrc);
        });
    });



    // mainview スライダー（Swiper）//
    const mvSwiper = new Swiper(".mainview__Swiper", {
        loop: true,
        effect: 'slide',
        direction: 'vertical',
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        speed: 2000,
    });

});
