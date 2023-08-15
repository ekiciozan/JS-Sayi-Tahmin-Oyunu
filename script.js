'use strict';/*Js de hata yaparsak uyarsın diye. */
 
let secretNumber = Math.trunc(Math.random()*20) +1; 
/* Integer'a çevirmek için trunc. */

let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click',function(){

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess)
    console.log(secretNumber, typeof secretNumber);

    if(!guess){
        displayMessage('Bir Sayı Giriniz!');
    }
    else if(guess === secretNumber){
        displayMessage('Doğru Tahmin Ettin!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess>secretNumber ?  'Çok Yüksek!' : 'Çok Düşük');
            document.querySelector('.score').textContent = score;
        }
        else
        {
            displayMessage('Oyunu kaybettin :( ');
            document.querySelector('.score').textContent = 0;
        }  
    }
});