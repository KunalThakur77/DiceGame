var random=Math.random();
var random2=Math.random();
random=random*6+1;
random2=random2*6+1;
number=Math.floor(random);
number2=Math.floor(random2);
document.querySelector('.img1').setAttribute("src","dice"+number+".png");
document.querySelector('.img2').setAttribute("src","dice"+number2+".png");
if (number > number2) {
  document.querySelector('h1').innerHTML = "🚩Player1 is the Winner!";
}
else if (number==number2){
  document.querySelector('h1').innerHTML= "Draw!" ;
}
else {
  document.querySelector('h1').innerHTML= "Player2 is the Winner!🚩" ;
}
