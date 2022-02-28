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
});
function PRConverter(pixelUnit){
    return pixelUnit / parseFloat(getComputedStyle(document.documentElement).fontSize);
}
function indexScroll(){
    if(PRConverter(window.innerHeight) <= 41.3 && $('input.indexToggle').val() === 'pop'){
        $('nav').css('position', 'static');
        $('div.content').css('position', 'fixed');
    }else if(PRConverter(window.innerHeight) > 41.3 && $('input.indexToggle').val() === 'pop'){
        $('nav').css('position', 'fixed');
        $('div.content').css('position', 'static');
    }
}
window.addEventListener('resize', function(){
    indexScroll();
});
window.addEventListener('orientationchange', function(){
    indexScroll();
});
function indexToggle(self){
    if(self.value === 'bubble'){
        self.value = 'pop';
        indexScroll();
        $('ul').css('display', 'block');
        $('ul.author, ul.next-prev').css('display', 'flex');
        $('li').css('display', 'list-item');
        $('ul.author.this').css('border-top', '0.1rem solid black');
        $('ul.author.this:nth-child(1)').css('border-top', 'none');
        $('nav').css('height', 'auto');
        $('nav').css('background-color', '#FFD7DD');
        var popUrl = '../img/pop.png';
        $('input.indexToggle').css('background-image', 'url(' + popUrl + ')');
        $('input.indexToggle').css('background-size', '1.6rem');
        $('input.indexToggle').hover(function(){
            $('input.indexToggle').css('filter', 'none');
        }, function(){
            $('input.indexToggle').css('filter', 'none');
        });
    }else if(self.value === 'pop'){
        self.value = 'bubble';
        $('ul:not(.this), li:not(.this)').css('display', 'none');
        $('ul.author.this').css('border-top', 'none');
        $('nav').css('height', '2.2rem');
        $('nav').css('background-color', 'white');
        var bubbleUrl = '../img/bubble.png';
        $('input.indexToggle').css('background-image', 'url(' + bubbleUrl + ')');
        $('input.indexToggle').css('background-size', '1.6rem');
        if(window.innerWidth > 1200){
            $('input.indexToggle').hover(function(){
                $('input.indexToggle').css('filter', 'none');
            }, function(){
                $('input.indexToggle').css('filter', 'grayscale(100%)');
            });
        }
        $('nav').css('position', 'fixed');
        $('div.content').css('position', 'static');
    }
}
