'use strict'


let input = document.querySelector('input');

let btn = document.querySelector('button');

let asnwer = document.querySelector('.answer')

let note = document.querySelector('.notes')

let answerNumbersMin;

function promtValueMin(){
    answerNumbersMin = prompt('Введите начальное число ');
    if(isNaN(answerNumbersMin)){
        alert('Это не число. Попробуй снова')
        promtValueMin()
    }
}

let answerNumbersMax;

function promtValueMax(){
    answerNumbersMax = prompt('Введите конечное число ')
    if(isNaN(answerNumbersMax)){
        alert('Это не число. Попробуй снова')
        promtValueMax()
    }
}

promtValueMin();

promtValueMax();


function getRandom(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let random = getRandom(answerNumbersMin,answerNumbersMax);


function isValueInput(){
    if(isNaN(input.value)){
        alert('Введите число')
        input.value=''
        isValueInput()
    }
}

function isValueText(){
    if(isNaN(input.value)){
        note.textContent = 'Вы угадали'
    }
}

function checkValue(num){
    if(isNaN(num) ){
        alert('Ведите число')
        input.value='';
    }else{
        return input.value
    }
}



input.addEventListener('blur',function(ev){


    if(this.value == random){
        
        note.textContent = 'Вы угадали'
    }

    let num = checkValue(this.value);


    if(num > +random){
        
        note.textContent ='уменьшите число'
    }
    if(num < +random){
        
        note.textContent ='увеличте число'
    }

    
})



btn.addEventListener('click',function(ev){
    asnwer.textContent = random;
    
})