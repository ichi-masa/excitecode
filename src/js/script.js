
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

        // ハンバーガーメニュー //
        $(function () {
            $('.hamburger').on('click', function () {
                $(this).toggleClass('active');
                $('.header').toggleClass('active');
                return false;
            });
        });

});
