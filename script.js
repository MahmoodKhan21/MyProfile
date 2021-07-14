//random number generation from 1 to 6.
const fR1= Math.floor(Math.random()*6)+1;

const firstDiceImage= 'dice' +fR1+'.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

const sR2= Math.floor(Math.random()*6)+1;
const secondDiceImage= 'dice' +sR2+'.png';
document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

if(fR1>sR2){
  document.querySelector('h1').innerHTML='The winner is Player 1';
}
else if(fR1<sR2){
  document.querySelector('h1').innerHTML='The winner is Player 2';
}
else{
  document.querySelector('h1').innerHTML='Sorry it is Draw.';
}