$(document).ready(function(){
    // var windowSquare = window.outerWidth * window.outerHeight;
    // var bubblePopNumber = parseInt(windowSquare / 30000);
    // for (var i = 0; i < bubblePopNumber; i++){
    //     $('<div class = "bubble_pop"><img class = "bubble" src = "bubble.png"><img class = "pop" src = "pop.png"></div>').appendTo('div.bubble_gum');
    // }
    // $(".bubble_pop").each(function(){
    //     $(this).css({"left": Math.random() * window.outerWidth, "top": Math.random() * window.outerHeight});
    // });
    $('.pop').hide();
    $('.bubble').hover(function(){
        $(this).css('filter', 'none');
    }, function(){
        $(this).css('filter', 'grayscale(100%)');
    });
    $('.bubble').mousedown(function(){
        $(this).animate({width: '600px', height: '600px'}, 800, 'linear');
    });
    $(".bubble").mouseup(function(){
        $(this).stop();
        if($('.bubble').css('width') == '600px'){
            $(this).hide();
            $(this).animate({width: '1px', height: '1px'}, 800, 'linear');
            $(this).siblings('.pop').show();
            setTimeout(function(){
                $('.pop').hide();
            }, 800);
            setTimeout(function(){
                $('.bubble').show();
                $('.bubble').animate({width: '60px', height: '60px'}, 100);
            }, 1600);
        };
    });
});