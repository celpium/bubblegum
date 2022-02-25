document.onkeydown = keyCheckOn;
document.onkeyup = keyCheckOff;
document.onmousedown = click;
var keyDownCtrl = 0;
var keyDownShift = 0;
function keyCheckOn(){
    switch(event.keyCode){
        case 123: event.keyCode = '';
        return false;
        break;
        case 17: event.keyCode = '';
        keyDownCtrl = 1;
        return false;
        break;
    }
    if(keyDownCtrl){
        return false;
    }
}
function keyCheckOff(){
    if(event.keyCode == 17){
        keyDownCtrl = 0;
    }else if(event.keyCode == 16){
        keyDownShift = 0;
    }
}
function click(){
    if((event.button == 2) || (event.button == 2)){
        alert('마우스 오른쪽 클릭, Ctrl 키, Shift 키, F12 키는 작동하지 않습니다.');
    }
}
var isTouchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
function RPConverter(remUnit){
    return remUnit * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
function pop(){
    $('html').css('border-bottom', '0.1rem solid black');
    $('div.wrap').css('display', 'block');
    $('body').css('background-color', '#FFD7DD');
    $('nav').css('position', 'static');
    $('nav').css('background-color', 'transparent');
    $('nav').css('border-bottom', 'none');
    var popUrl = './img/pop.png';
    $('input.mainButton').css('background-image', 'url(' + popUrl + ')');
    $('input.mainButton').css('background-size', '1.6rem');
    $('input.mainButton').css('filter', 'none');
}
$(document).ready(function(){
    document.addEventListener("contextmenu", e => {
        e.target.matches("img") && e.preventDefault()
    });
    var gif = './img/obje.gif';
    var obje = ['./img/kim1.png', './img/ha1.png', './img/ha2.png', './img/ha3.png',
    './img/ha4.png', './img/ha5.png', './img/lee1.png', './img/lee2.png', 
    './img/lee3.png', './img/lee4.png', './img/lee5.png', './img/lee6.png', 
    './img/lee7.png', './img/lee8.png', './img/lee9.png', './img/lee10.png', 
    './img/an1.png', './img/an2.png', './img/an3.png', './img/an4.png', 
    './img/an5.png', './img/an6.png', './img/an7.png', './img/an8.png'];
    $('li.kim1').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[0] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.kim1').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.ha1').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[1] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.ha1').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.ha2').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[2] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.ha2').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.ha3').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[3] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.ha3').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.ha4').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[4] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.ha4').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.ha5').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[5] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.ha5').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee1').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[6] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee1').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee2').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[7] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee2').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee3').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[8] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee3').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee4').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[9] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee4').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee5').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[10] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee5').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee6').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[11] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee6').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee7').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[12] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee7').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee8').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[13] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee8').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee9').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[14] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee9').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee10').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[15] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.lee10').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.an1').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[16] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.an1').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.an2').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[17] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.an2').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.an3').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[18] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.an3').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.an4').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[19] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.an4').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.an5').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[20] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.an5').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.an6').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[21] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.an6').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.an7').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[22] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.an7').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.an8').mouseover(function(){
        $('div.obje').css('background', 'url(' + obje[23] + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    $('li.an8').mouseout(function(){
        $('div.obje').css('background', 'url(' + gif + ') no-repeat center top');
        $('div.obje').css('background-size', 'contain');
    });
    if(isTouchDevice){
        $('img.bubble').on('touchstart', function(){
            $(this).css('filter', 'none');
        });
        $('img.bubble').on('touchend', function(){
            $(this).css('filter', 'grayscale(100%)');
        });
    }else{
        $('img.bubble').mouseover(function(){
            $(this).css('filter', 'none');
        });
        $('img.bubble').mouseout(function(){
            $(this).css('filter', 'grayscale(100%)');
        });
    }
    $('img.bubble').mousedown(function(){
        $(this).animate({width: RPConverter(24), height: RPConverter(24)}, 800, 'linear');
    });
    $('img.bubble').mouseup(function(){
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
    $('img.bubble').on('touchstart', function(){
        $(this).css('filter', 'none');
        $(this).animate({width: RPConverter(24), height: RPConverter(24)}, 800, 'linear');
        setTimeout(function(){
            $(this).hide();
            $(this).siblings('img.pop').show();
            setTimeout(function(){
                $('img.pop').hide();
            }, 800);
            pop();
        }, 800);
    });
});
function mainButton(self){
    if(self.value === 'bubble'){
        self.value = 'pop';
        $('img.bubble').hide();
        pop();
    }
}
