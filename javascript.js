/*

Hello world

*/


/*******************************************************************/
/*************************                **************************/
/*                          start game                             */
/*************************                **************************/
/*******************************************************************/
var window1 = document.getElementById('window1');
var scene1 = document.getElementById('scene1');
var settings = document.getElementById('settings');

function startGame() {

    window1.style.display = 'none' ;
    scene1.style.display = 'block' ;

    const img2_come = setTimeout(s1img2, 1000);
    const img3_come = setTimeout(s1img3, 2000);
    const fish_come = setTimeout(s1img4, 3000);
}

function openSettings() {
    
    window1.style.display = 'none' ;
    settings.style.display = 'block';
    
}

/**************************text animation*******************************8*/

var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



/*******************************************************************/
/*************************                **************************/
/*                          scene #ONE                             */
/*************************                **************************/
/*******************************************************************/

var scene1_img1 = document.getElementById('scene1-img1');
var scene1_img2 = document.getElementById('scene1-img2');
var scene1_img3 = document.getElementById('scene1-img3');
var scene1_fish = document.getElementById('pngfish');
var scene2 = document.getElementById('scene2');


scene1_fish.style.display = 'block';

function s1img2() {
  scene1_img2.style.display = 'block';
  scene1_img1.style.display = 'none';
  scene1_fish.style.display = 'none';

}



function s1img3() {
  scene1_img3.style.display = 'block';
  scene1_img2.style.display = 'none';
  scene1_fish.style.display = 'none';
  const s1_end = setTimeout(s1End, 3000);

}

function s1End(){

  scene1.style.display = 'none' ;
  s2_start();
}

/*******************************************************************/
/*************************                **************************/
/*                          scene #TWO                             */
/*************************                **************************/
/*******************************************************************/



function s2_start(){
  scene2.style.display = 'block';

  function createBubble(){

    const section = document.querySelector('section');
    const createElement =document.createElement('span');
    var size = Math.random()*60;

    createElement.style.width = 20 + size + 'px';
    createElement.style.height = 20 + size + 'px';
    createElement.style.left = Math.random() * innerWidth  + "px";
    section.appendChild(createElement);
    setTimeout(() => {
        createElement.remove ()
    }, 4000)
  
    }
    
    setInterval(createBubble,50);



  }

   
   
    
    function eat(){
      var heart = document.getElementById('heart');
      this.heart.style.display = 'none';
      incrementClick();

    }
    function eat2(){
      var heart2 = document.getElementById('heart2');
      this.heart2.style.display = 'none';
      incrementClick();
    }
    function eat3(){
      var heart3 = document.getElementById('heart3');
      this.heart3.style.display = 'none';
      incrementClick();    
    }

    function eat4(){
      var heart4 = document.getElementById('heart4');
      this.heart4.style.display = 'none';
      incrementClick();
        } 
    
    function eat5(){
      var heart5 = document.getElementById('heart5');
      this.heart5.style.display = 'none';
      x++;
      incrementClick();
    }
    
    function eat6(){
      var heart6 = document.getElementById('heart6');
      this.heart6.style.display = 'none';
      incrementClick();
    }

    var counterVal = 0;

    function incrementClick() {
        updateDisplay(++counterVal);
    }
    
    function resetCounter() {
        counterVal = 0;
        updateDisplay(counterVal);
    }
    
    function updateDisplay(val) {
        document.getElementById("score").innerHTML = val;
    }