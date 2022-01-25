function indexToggle(self){
    if(self.value === 'bubble'){
        var i = 0;
        var j = 0;
        while(i < document.querySelectorAll('li').length){
            document.querySelectorAll('li')[i].style.display = 'list-item';
            i = i + 1;
        }
        while(j < document.querySelectorAll('li.this').length){
            document.querySelectorAll('li.this')[j].style.borderTop = '2px solid black';
            j = j + 1;
        }
        self.value = 'pop';
    }else if(self.value === 'pop'){
        var i = 0;
        var j = 0;
        while(i < document.querySelectorAll('li:not(.this)').length){
            document.querySelectorAll('li:not(.this)')[i].style.display = 'none';
            i = i + 1;
        }
        while(j < document.querySelectorAll('li.this').length){
            document.querySelectorAll('li.this')[j].style.borderTop = 'none';
            j = j + 1;
        }
        self.value = 'bubble';
    }
}