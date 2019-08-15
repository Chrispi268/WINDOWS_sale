var slides = document.querySelectorAll('#slides .slide'); 
var currentSlide = 0; 
var shitshit1 = 0;
var shitshit2 =1;
var shitshit3 = 2;
function firstslide() {
    goToSlide(shitshit1);
}
function secondslide() {
	goToSlide(shitshit2);
}
function thirdslide() {
	goToSlide(shitshit3);
}
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
var aslider1 = document.getElementById('aslider1');
var aslider2 = document.getElementById('aslider2');
var aslider3 = document.getElementById('aslider3');
aslider1.onclick = function() {
    firstslide();
	document.querySelector('#aslider1').style.backgroundColor = '#9da3d7';
	document.querySelector('#aslider2').style.backgroundColor ='white';
	document.querySelector('#aslider3').style.backgroundColor ='white';
};
aslider2.onclick = function() {
	secondslide();
	document.querySelector('#aslider2').style.backgroundColor = '#9da3d7';
	document.querySelector('#aslider1').style.backgroundColor ='white';
	document.querySelector('#aslider3').style.backgroundColor ='white';
}
aslider3.onclick = function() {
	thirdslide();
	document.querySelector('#aslider3').style.backgroundColor = '#9da3d7';
	document.querySelector('#aslider1').style.backgroundColor ='white';
	document.querySelector('#aslider2').style.backgroundColor ='white';
}
let ringcall = document.getElementById('element1');
element1.onclick = function() {
	alert('Ваше сообщение отправлено!');
}


let odnostvorchatoe = document.getElementById('shit1');
let dvuhstvorchatoe = document.getElementById('shit2');
let trehstvorchatoe = document.getElementById('shit3');
let balcony = document.getElementById('shit4');
let winblacony = document.getElementById('shit5');

odnostvorchatoe.onclick = function(a){
	document.getElementById('yes1').src = 'images/win1.png';
	document.getElementById('changeme').innerHTML = 'Одностворчатое окно КВЕ';
	document.getElementById('shit1').style.color = 'blue';
	document.getElementById('shit1').style.textDecoration = 'Underline';
	document.getElementById('shit2').style.color = "black";
	document.getElementById('shit2').style.textDecoration = 'none';
	document.getElementById('shit3').style.color = 'black';
	document.getElementById('shit3').style.textDecoration = 'none';
	document.getElementById('shit4').style.color = 'black';
	document.getElementById('shit4').style.textDecoration = 'none';
	document.getElementById('shit5').style.color = 'black';
	document.getElementById('shit5').style.textDecoration = 'none';
}
dvuhstvorchatoe.onclick = function(b){
	document.getElementById('yes1').src = 'images/win2.png';
	document.getElementById('changeme').innerHTML = 'Двухстворчатое окно КВЕ';
	document.getElementById('shit2').style.color = 'blue';
	document.getElementById('shit2').style.textDecoration = 'Underline';
	document.getElementById('shit1').style.color = 'black';
	document.getElementById('shit1').style.textDecoration = 'none';
	document.getElementById('shit3').style.color = 'black';
	document.getElementById('shit3').style.textDecoration = 'none';
	document.getElementById('shit4').style.color = 'black';
	document.getElementById('shit4').style.textDecoration = 'none';
	document.getElementById('shit5').style.color = 'black';
	document.getElementById('shit5').style.textDecoration = 'none';
}
trehstvorchatoe.onclick = function(c){
	document.getElementById('yes1').src = 'images/win3.png';
	document.getElementById('changeme').innerHTML = 'Трехстворчатое окно КВЕ';
	document.getElementById('shit3').style.color = 'blue';
	document.getElementById('shit3').style.textDecoration = 'Underline';
	document.getElementById('shit2').style.color = "black";
	document.getElementById('shit2').style.textDecoration = 'none';
	document.getElementById('shit1').style.color = 'black';
	document.getElementById('shit1').style.textDecoration = 'none';
	document.getElementById('shit4').style.color = 'black';
	document.getElementById('shit4').style.textDecoration = 'none';
	document.getElementById('shit5').style.color = 'black';
	document.getElementById('shit5').style.textDecoration = 'none';
}
balcony.onclick = function(d){
	document.getElementById('yes1').src = 'images/win4.png';
	document.getElementById('changeme').innerHTML = 'Балконный блок';
	document.getElementById('shit4').style.color = 'blue';
	document.getElementById('shit4').style.textDecoration = 'Underline';
	document.getElementById('shit2').style.color = "black";
	document.getElementById('shit2').style.textDecoration = 'none';
	document.getElementById('shit1').style.color = 'black';
	document.getElementById('shit1').style.textDecoration = 'none';
	document.getElementById('shit3').style.color = 'black';
	document.getElementById('shit3').style.textDecoration = 'none';
	document.getElementById('shit5').style.color = 'black';
	document.getElementById('shit5').style.textDecoration = 'none';
}
winblacony.onclick = function(e){
	document.getElementById('yes1').src = 'images/win5.png';
	document.getElementById('changeme').innerHTML = 'Остекление балкона';
	document.getElementById('shit5').style.color = 'blue';
	document.getElementById('shit5').style.textDecoration = 'Underline';
	document.getElementById('shit2').style.color = "black";
	document.getElementById('shit2').style.textDecoration = 'none';
	document.getElementById('shit1').style.color = 'black';
	document.getElementById('shit1').style.textDecoration = 'none';
	document.getElementById('shit3').style.color = 'black';
	document.getElementById('shit3').style.textDecoration = 'none';
	document.getElementById('shit4').style.color = 'black';
	document.getElementById('shit4').style.textDecoration = 'none';
}

