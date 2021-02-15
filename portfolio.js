// JavaScript source code
$(function () {
    $('header a').click(function () {
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html,body').animate({
            'scrollTop': position
        }, { 'slow': 500 });
    })

    $('#smelling-show').hover(
        function () {
            $('#smelling-tools').fadeIn();
            $('.smelling-tool-text').slideDown();
        },
        function () {
            $('#smelling-tools').fadeOut();
            $('.smelling-tool-text').slideUp();
        }
    )

    $('#becaptured-show').hover(
        function () {
            $('#becaptured-tools').fadeIn();
            $('.becaptured-tool-text').slideDown();
        },
        function () {
            $('#becaptured-tools').fadeOut();
            $('.becaptured-tool-text').slideUp();
        }
    )

    $('#refusal-show').hover(
        function () {
            $('#refusal-tools').fadeIn();
            $('.refusal-tool-text').slideDown();
        },
        function () {
            $('#refusal-tools').fadeOut();
            $('.refusal-tool-text').slideUp();
        }
    )

    $('#sounddrawing-show').hover(
        function () {
            $('#sounddrawing-tools').fadeIn();
            $('.sounddrawing-tool-text').slideDown();
        },
        function () {
            $('#sounddrawing-tools').fadeOut();
            $('.sounddrawing-tool-text').slideUp();
        }
    )

    $('#amayadori-show').hover(
        function () {
            $('#amayadori-tools').fadeIn();
            $('.amayadori-tool-text').slideDown();
        },
        function () {
            $('#amayadori-tools').fadeOut();
            $('.amayadori-tool-text').slideUp();
        }
    )

    $('#smelling-show').click(function () {
        $('#smelling-modal').fadeIn();
    })
    $('#becaptured-show').click(function () {
        $('#becaptured-modal').fadeIn();
    })
    $('#refusal-show').click(function () {
        $('#refusal-modal').fadeIn();
    })
    $('#sounddrawing-show').click(function () {
        $('#sounddrawing-modal').fadeIn();
    })
    $('#amayadori-show').click(function () {
        $('#amayadori-modal').fadeIn();
    })

    $('.close-modal').click(function () {
        $('#smelling-modal').fadeOut();
        $('#becaptured-modal').fadeOut();
        $('#refusal-modal').fadeOut();
        $('#sounddrawing-modal').fadeOut();
        $('#amayadori-modal').fadeOut();
    })
});
