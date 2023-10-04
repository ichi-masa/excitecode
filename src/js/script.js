
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
    const mvSwiper = new Swiper(".js-swiper", {
        loop: true,
        effect: 'slide',
        direction: 'vertical',
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        speed: 2000,
    });

    // スクロールして表示領域に入ったらクラス付与 //
    $(function () {
        // セクションタイトルのスライドイン //
        $(".js-left-slide").on("inview", function () {
            $(this).addClass("active");
        });

        $(".js-right-slide").on("inview", function () {
            $(this).addClass("active");
        });

        // 記事を上からふわっと表示 //
        $(".js-fadeDown").on("inview", function () {
            $(this).addClass("active");
        });
        
        // 記事を下からふわっと表示 //
        $(".js-fadeUp").on("inview", function () {
            $(this).addClass("active");
        });
    });

    $(function() {
        $(".news__menu").click(function() {
            $(this).toggleClass("active");
        });
    });

});
