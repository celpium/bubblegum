// document.onkeydown = keyCheckOn;
// document.onkeyup = keyCheckOff;
// document.onmousedown = click;
// var keyDownCtrl = 0;
// var keyDownShift = 0;
// function keyCheckOn(){
//     switch(event.keyCode){
//         case 123: event.keyCode = '';
//         return false;
//         break;
//         case 17: event.keyCode = '';
//         keyDownCtrl = 1;
//         return false;
//         break;
//     }
//     if(keyDownCtrl){
//         return false;
//     }
// }
// function keyCheckOff(){
//     if(event.keyCode == 17){
//         keyDownCtrl = 0;
//     }else if(event.keyCode == 16){
//         keyDownShift = 0;
//     }
// }
// function click(){
//     if((event.button == 2) || (event.button == 2)){
//         alert('마우스 오른쪽 클릭, Ctrl 키, Shift 키, F12 키는 작동하지 않습니다.');
//     }
// }

$(document).ready(function(){
    $('div.content').on('mousewheel', function(self){
		var wheelDelta = self.originalEvent.wheelDelta;
		if(wheelDelta > 0){
			console.log('up');
			$('div.content').scrollLeft(-wheelDelta + $('div.content').scrollLeft());
		}else if(wheelDelta < 0){
		    console.log('down');
			$('div.content').scrollLeft(-wheelDelta + $('div.content').scrollLeft());
        }
	});
    $('div.content').scroll(function(){
        $('div.marginPC').scrollTop($('div.content').scrollTop());
        $('div.marginPC').scrollLeft($('div.content').scrollLeft());
    });
    $('div.marginPC').scroll(function(){
        $('div.content').scrollTop($('div.marginPC').scrollTop());
        $('div.content').scrollLeft($('div.marginPC').scrollLeft());
    });
});
function indexToggle(self){
    if(self.value === 'bubble'){
        if((window.orientation == -90 || window.orientation == 90) && window.innerWidth <= 980){
            $('nav').css('over-flow', 'scroll');
            $('nav').css('position', 'static');
            $('div.content').css('position', 'fixed');
            // $('html, h1, p, li').css('font', '500 12px "Noto Sans KR", sans-serif;');
        }
        $('ul').css('display', 'block');
        $('ul.author, ul.next-prev').css('display', 'flex');
        $('li').css('display', 'list-item');
        $('ul.author.this').css('border-top', '0.1rem solid black');
        $('nav').css('height', 'auto');
        $('nav').css('background-color', 'lightpink');
        var popUrl = './image/pop.png';
        $('input.indexToggle').css('background-image', 'url(' + popUrl + ')');
        $('input.indexToggle').css('background-size', '1.6rem');
        $('input.indexToggle').hover(function(){
            $('input.indexToggle').css('filter', 'none');
        }, function(){
            $('input.indexToggle').css('filter', 'none');
        });
        self.value = 'pop';
    }else if(self.value === 'pop'){
        $('ul:not(.this), li:not(.this)').css('display', 'none');
        $('ul.author.this').css('border-top', 'none');
        $('nav').css('height', '2.2rem');
        $('nav').css('background-color', 'white');
        var bubbleUrl = './image/bubble.png';
        $('input.indexToggle').css('background-image', 'url(' + bubbleUrl + ')');
        $('input.indexToggle').css('background-size', '1.2rem');
        if(window.innerWidth > 980){
            $('input.indexToggle').hover(function(){
                $('input.indexToggle').css('filter', 'none');
            }, function(){
                $('input.indexToggle').css('filter', 'grayscale(100%)');
            });
        }
        $('nav').css('position', 'fixed');
        $('div.content').css('position', 'static');
        self.value = 'bubble';
    }
}
window.addEventListener('orientationchange', function(){
    if((window.orientation == -90 || window.orientation == 90) && $('input.indexToggle').val() === 'pop'){
        $('nav').css('over-flow', 'scroll');
        $('nav').css('position', 'static');
        $('div.content').css('position', 'fixed');
        // $('html, h1, p, li').css('font', '500 12px "Noto Sans KR", sans-serif;');
    }else if((window.orientation == 0 || window.orientation == 180 || window.orientation == -180) && $('input.indexToggle').val() === 'pop'){
        $('nav').css('position', 'fixed');
        $('div.content').css('position', 'static');
        // $('html, h1, p, li').css('font', '500 12px "Noto Sans KR", sans-serif;');
    }
});
