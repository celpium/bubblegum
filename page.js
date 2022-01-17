// var key_down_ctrl = 0;
// var key_down_shift = 0;
// document.onkeydown = keycheck;
// document.onkeyup = uncheckCtrlShift;
// function keycheck(){
//     switch(event.keyCode){
//         case 123: event.keyCode = '';
//         return false;
//         break;
//         case 17: event.keyCode = '';
//         key_down_ctrl = 1;
//         return false;
//         break;
//     }
//     if(key_down_ctrl){
//         return false;
//     }
// }
// function uncheckCtrlShift(){
//     if(event.keyCode == 17){
//         key_down_ctrl = 0;
//     }else if(event.keyCode == 16){
//         key_down_shift = 0;
//     }
// }
// function click(){
//     if((event.button == 2) || (event.button == 2)){
//         alert('저작권 보호를 위해 마우스 오른쪽 클릭, Ctrl 키, F12 키는 입력되지 않습니다.');
//     }
// }
// document.onmousedown = click;

$(document).ready(function(){
    var col_width = Math.ceil(window.innerWidth / 4);
    // var col_width = di('p').eq(1).style.width + 2;
    var col_height = window.innerHeight - 52;
    $('#col').css('height', col_height);
    $(window).resize(function(){
        var col_width = Math.ceil(window.innerWidth / 4);
        // var col_width = $('p').eq(1).style.width + 2;
        var col_height = window.innerHeight - 52;
        $('#col').css('height', col_height);
    });
    $('#col').on('mousewheel', function(x){
		var wheelDelta = x.originalEvent.wheelDelta;
		if(wheelDelta > 0){
			console.log("up");
			$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
		}else if(wheelDelta < 0){
		    console.log("down");
			$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
        }
	});
});


// $('#col').animate({
//     left: -array[$(this).index()+1]
// }, 500)};

// let array = [];
// for(let i=0; i<col_Width; i++) { 
//     array[i] = $('.box').eq(i).offset().left
//     }
//     let chk = true;
//     $('.box').on('mousewheel DOMMouseScroll', function(){ if(chk)
//         {
//             // 휠 일정시간동안 막기
//             chk = false; setTimeout(function(){ chk = true; }, 500)
//             // 휠 방향 감지(아래: -120, 위: 120)
//             let w_delta = Event.wheelDelta / 120;
//             // 휠 아래로
//             if(w_delta < 0 && $(this).next().length > 0) {
//                 $('#col').animate({ left: -array[$(this).index()+1] }, 500) }
//             // 휠 위로
//             else if(w_delta > 0 && $(this).prev().length > 0) {
//                 $('#col').animate({ left: -array[$(this).index()-1] }, 500) } } });
//             //브라우저를 resize했을시를 대비해 박스의 크기는 다시 구해준다.
//             $(window).resize(function(){ for(let i=0; i<$('.box').length; i++) { array[i] = $('.box').eq(i).offset().left }



// 가로값: innerWidth /4
// 세로값: innerHeight