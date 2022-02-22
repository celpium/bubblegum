if(window.innerWidth > window.innerHeight){
    var obejeMinSize = window.innerWidth * 6 / 10;
}else if(window.innerWidth < window.innerHeight){
    var obejeMinSize = window.innerHeight * 6 / 10;
}
function pop(){
    $('div.wrap, div.credits').show();
    $('body').css('background-color', '#FFC4CD');
    $('nav').css('position', 'static');
    $('nav').css('background-color', 'transparent');
    $('nav').css('border-bottom', '0.1rem solid transparent');
    var popUrl = './image/pop.png';
    $('input.mainButton').css('background-image', 'url(' + popUrl + ')');
    $('input.mainButton').css('background-size', '1.6rem');
    $('input.mainButton').css('filter', 'none');
}
function RPConverter(remUnit){
    return remUnit * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
$(document).ready(function(){
    $('div.wrap, div.credits').hide();
    $('img.bubble').mouseover(function(){
        $(this).css('filter', 'none');
    });
    $('img.bubble').mouseout(function(){
        $(this).css('filter', 'grayscale(100%)');
    });
    $('img.bubble').on('touchstart', function(){
        $(this).css('filter', 'none');
    });
    $('img.bubble').on('touchend', function(){
        $(this).css('filter', 'grayscale(100%)');
    });
    $('img.bubble').mousedown(function(){
        $(this).animate({width: RPConverter(24), height: RPConverter(24)}, 800, 'linear');
    });
    $('img.bubble').on('touchstart', function(){
        $(this).animate({width: RPConverter(24), height: RPConverter(24)}, 800, 'linear');
    });
    $("img.bubble").mouseup(function(){
        $(this).stop();
        if($(this).width() >= RPConverter(20)){
            $(this).hide();
            $(this).siblings('img.pop').show();
            setTimeout(function(){
                $('img.pop').hide();
            }, 800);
            pop();
        };
    });
    $("img.bubble").on('touchend', function(){
        $(this).stop();
        if($(this).width() >= RPConverter(20)){
            $(this).hide();
            $(this).siblings('img.pop').show();
            setTimeout(function(){
                $('img.pop').hide();
            }, 800);
            pop();
        };
    });
});
function mainButton(self){
    if(self.value === 'bubble'){
        self.value = 'pop';
        $('img.bubble').hide();
        pop();
    }
}