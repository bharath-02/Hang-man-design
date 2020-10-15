// Categories
var programLang=['Javascript','Typescript','Python','scala','Ruby'];
var frameworks=['React','Bootstrap','Angular','Bulma','Tensorflow','Django','Meteor','Foundation','Materialize'];
var movienames=['Endgame','FantasticFour','JusticeLeague','TheDarkKnights','SuicideSquad','IronMan','TheCivilWar'];
var countrynames=['Australia','NewZealand','Afganistan','Zimbabwe','Portugal','Barcelona','Germany','Netherlands'];
var random=0;
var word='';
var numberOfCharacters=0;
var numberOfRight=0;
var numberOfWrong=0;
var wordLength=0;
// Start function
function start() {
    document.getElementById('firstPage').style.display='none';
    document.getElementById('secondPage').style.display='block';
}

function programmingLanguages() {
    random=Math.floor(Math.random()*programLang.length);
    word=programLang[random];
    document.getElementById('secondPage').style.display='none';
    document.getElementById('categoryName').innerHTML='Programming Languages';
    hangman();
}

function frameWorks() {
    random=Math.floor(Math.random()*frameworks.length);
    word=frameworks[random];
    document.getElementById('secondPage').style.display='none';
    document.getElementById('categoryName').innerHTML='Frameworks';
    hangman();
}

function movieNames() {
    random=Math.floor(Math.random()*movienames.length);
    word=movienames[random];
    document.getElementById('secondPage').style.display='none';
    document.getElementById('categoryName').innerHTML='Movie Names';
    hangman();
}

function countryNames() {
    random=Math.floor(Math.random()*countrynames.length);
    word=countrynames[random];
    document.getElementById('secondPage').style.display='none';
    document.getElementById('categoryName').innerHTML='Country Names';
    hangman();
}

// Hangman functions
function hangman() {
    var validCharacters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var x=word.length;
    var y=x-1;
    while(x>0) {
        numberOfCharacters++;
        var letter=word.substring(y,x);
        if((validCharacters.indexOf(letter))>(-1)) {
            document.getElementById('letter'+x).innerHTML=letter;
            document.getElementById('letter'+x).style.visibility="hidden";
            document.getElementById('underline'+x).style.display='block';
            document.getElementById('underline'+x).style.borderBottom='3px solid black';
        }
        x--;
        y--;
    }
    wordLength=word.length;
    document.getElementById('thirdPage').style.display='block';
    draw();
}

// Drawing the images
function draw(){
    var gameImage = document.getElementById("hangMan").getContext('2d');
        gameImage.fillStyle = "white";
        gameImage.lineWidth=3;
        gameImage.fillRect(0, 0, 300, 300);
        gameImage.beginPath(); //vertical bar
            gameImage.moveTo(50,270);
            gameImage.lineTo(50,25);
            gameImage.stroke();
        gameImage.beginPath(); //vertical bar long piece
            gameImage.moveTo(65,270);
            gameImage.lineTo(65,85);
            gameImage.stroke();
        gameImage.beginPath(); //vertical bar short piece
            gameImage.moveTo(65,64);
            gameImage.lineTo(65,40);
            gameImage.stroke();
        gameImage.beginPath(); //horizontal bar
            gameImage.moveTo(49,25);
            gameImage.lineTo(175,25);
            gameImage.stroke();
        gameImage.beginPath(); //horizontal bar short piece
            gameImage.moveTo(49,40);
            gameImage.lineTo(86,40);
            gameImage.stroke();
        gameImage.beginPath(); //horizontal bar long piece
            gameImage.moveTo(106,40);
            gameImage.lineTo(175,40);
            gameImage.stroke();
        gameImage.beginPath(); //small vertical bar
            gameImage.moveTo(173,25);
            gameImage.lineTo(173,40);
            gameImage.stroke();
        gameImage.beginPath(); //cross bar
            gameImage.moveTo(50,80);
            gameImage.lineTo(100,25);
            gameImage.stroke();
        gameImage.beginPath(); //cross bar
            gameImage.moveTo(60,90);
            gameImage.lineTo(111,35);
            gameImage.stroke();
        gameImage.beginPath(); //cross bar
            gameImage.moveTo(50,80);
            gameImage.lineTo(60,90);
            gameImage.stroke();
        gameImage.beginPath(); //cross bar
            gameImage.moveTo(100,25);
            gameImage.lineTo(111,35);
            gameImage.stroke();
        gameImage.beginPath(); //ground
            gameImage.moveTo(35,270);
            gameImage.lineTo(265,270);
            gameImage.stroke();
        gameImage.beginPath(); //noose
            gameImage.moveTo(150,40);
            gameImage.lineTo(150,80);
            gameImage.stroke();
}

// Playing the game
function guessLetter() {
    var correct=0;
    var target=event.target || event.srcElement;
    target.style.visibility='hidden';
    var lower=target.id;
    var upper=document.getElementById(lower).getAttribute('value');
    var results=document.getElementById('results');
    var ul1=document.getElementById('underline1').offsetWidth;
    for(var i=1;i<=15;i++) {
        if(document.getElementById('letter'+i).innerHTML===upper || document.getElementById('letter'+i).innerHTML===lower) {
            document.getElementById('letter'+i).style.visibility='visible';
            correct++;
            numberOfRight++;
        }
    }
    if(correct==0) {
        numberOfWrong++;
        penalty();
    }
    if(numberOfWrong==6) {
        results.style.visibility='visible';
        results.style.color='black';
        results.innerHTML="!!!!you can't miss another letter!!!!";
        if(ul1==50) {
            results.style.lineHeight='70px';
            results.style.fontSize='30px';
        }
        if(ul1==30) {
            results.style.lineHeight='50px';
            results.style.fontSize='25px';
        }
        if(ul1==20) {
            results.style.lineHeight='40px';
            results.style.fontSize='20px';
        }
    }
    if(numberOfWrong==7) {
        results.style.visibility='visible';
        results.style.color='black';
        results.innerHTML='You lose!!!';
        document.getElementById('characters').style.display='none';
        document.getElementById('reset').style.display='block';
        document.getElementById('home').style.display='block';
        if(ul1 == 50){
            results.style.lineHeight = "40px";
            results.style.fontSize='80px';
        }
        if(ul1 == 30){
            results.style.lineHeight = "25px";
            results.style.fontSize='15px';
        }
        if(ul1 == 20){
            results.style.lineHeight = "20px";
            results.style.fontSize='10px';
        }
    }
    if(numberOfRight==wordLength) {
        win();
    }
}

// If win
function win() {
    var ul1=document.getElementById('underline1').offsetWidth;
    var reset=document.getElementById('reset');
    var results=document.getElementById('results');
    results.style.visibility='visible';
    results.style.color='red';
    results.innerHTML='You win!!!!';
    document.getElementById('characters').style.display='none';
    reset.style.display='block';
    document.getElementById('home').style.display='block';
    if(ul1==50) {
        reset.style.marginTop='75px';
        results.style.marginTop='75px';
        results.style.fontSize='150px';
    }
    if(ul1==30) {
        reset.style.marginTop='50px';
        results.style.marginTop='40px';
        results.style.fontSize='100px';
    }
    if(ul1==18) {
        reset.style.marginTop='40px';
        results.style.marginTop='15px';
        results.style.fontSize='75px';
    }
}
// If make any wrong
function penalty() {
    var choiceWrong=document.getElementById('hangMan').getContext('2d');
    if(numberOfWrong==1) {
        choiceWrong.beginPath(); //head
        choiceWrong.arc(150, 100, 20, 0, 2*Math.PI);
        choiceWrong.stroke();
        choiceWrong.beginPath(); //left eye
        choiceWrong.arc(143, 95, 3.5, 0, 2*Math.PI);
        choiceWrong.stroke();
        choiceWrong.beginPath(); //right eye
        choiceWrong.arc(157, 95, 3.5, 0, 2*Math.PI);
        choiceWrong.stroke();
        choiceWrong.beginPath(); //mouth
        choiceWrong.arc(150, 103, 9, 0, Math.PI);
        choiceWrong.stroke();
    }
    if(numberOfWrong==2) {
        choiceWrong.beginPath();
        choiceWrong.moveTo(150,120);
        choiceWrong.lineTo(150,190);
        choiceWrong.stroke();
    }
    if(numberOfWrong==3){
        choiceWrong.fillStyle = "white";
        choiceWrong.fillRect(138, 102, 24, 12); //cover mouth
        choiceWrong.beginPath(); //straight mouth
        choiceWrong.moveTo(140,108);
        choiceWrong.lineTo(160,108);
        choiceWrong.stroke();
        choiceWrong.beginPath(); //right arm
        choiceWrong.moveTo(150,135);
        choiceWrong.lineTo(180,160);
        choiceWrong.stroke();
    }
    if(numberOfWrong==4){
        choiceWrong.beginPath(); //left arm
        choiceWrong.moveTo(150,135);
        choiceWrong.lineTo(120,160);
        choiceWrong.stroke();
    }
    if(numberOfWrong==5){
        choiceWrong.fillRect(138, 102, 24, 12); //cover mouth
        choiceWrong.beginPath(); //sad mouth
        choiceWrong.arc(150, 112, 9, 0, Math.PI, true);
        choiceWrong.stroke();
        choiceWrong.beginPath(); //right leg
        choiceWrong.moveTo(149,188);
        choiceWrong.lineTo(180,230);
        choiceWrong.stroke();
    }
    if(numberOfWrong==6){
        choiceWrong.beginPath(); //left leg
        choiceWrong.moveTo(151,188);
        choiceWrong.lineTo(120,230);
        choiceWrong.stroke();
    }
    if(numberOfWrong==7){
        choiceWrong.fillRect(138, 90, 24, 24); //cover face
        choiceWrong.fillRect(118, 121.2, 70, 120); //cover body
        choiceWrong.beginPath(); //straight mouth
        choiceWrong.moveTo(140,108);
        choiceWrong.lineTo(160,108);
        choiceWrong.stroke();
        choiceWrong.beginPath(); //body
        choiceWrong.moveTo(150,135);
        choiceWrong.lineTo(150,205);
        choiceWrong.stroke();
        choiceWrong.beginPath(); //right arm
        choiceWrong.moveTo(150,150);
        choiceWrong.lineTo(180,175);
        choiceWrong.stroke();
        choiceWrong.beginPath(); //left arm
        choiceWrong.moveTo(150,150);
        choiceWrong.lineTo(120,175);
        choiceWrong.stroke();
        choiceWrong.beginPath(); //right leg
        choiceWrong.moveTo(149,203);
        choiceWrong.lineTo(180,245);
        choiceWrong.stroke();
        choiceWrong.beginPath(); //left leg
        choiceWrong.moveTo(151,203);
        choiceWrong.lineTo(120,245);
        choiceWrong.stroke();
        choiceWrong.lineWidth=2;
        choiceWrong.beginPath(); //left eye
        choiceWrong.moveTo(140,93);
        choiceWrong.lineTo(146,98);
        choiceWrong.stroke();
        choiceWrong.moveTo(140,98);
        choiceWrong.lineTo(146,93);
        choiceWrong.stroke();
        choiceWrong.beginPath(); //right eye
        choiceWrong.moveTo(154,98);
        choiceWrong.lineTo(160,93);
        choiceWrong.stroke(); 
        choiceWrong.moveTo(154,93);
        choiceWrong.lineTo(160,98);
        choiceWrong.stroke();
    }
}

// Play again
function reset() {
    var ul1=document.getElementById('underline1').offsetWidth;
    var results=document.getElementById('results');
    var reset=document.getElementById('reset');
    for(var i=1;i<=15;i++) {
        document.getElementById('letter'+i).innerHTML='&nbsp;';
        document.getElementById('underline'+i).style.width = ul1 + "px";
        if(ul1 == 50){
            document.getElementById('underline'+i).style.marginRight = "5px";
            results.style.height = "70px";
        }
        else if(ul1 == 30){
            document.getElementById('underline'+i).style.marginRight = "3px";
            results.style.height = "50px";
        }
        else{
            document.getElementById('underline'+i).style.marginRight = "3px";
            results.style.height = "40px";
        }
        document.getElementById('underline'+i).style.display='none';
        document.getElementById('underline'+i).style.borderBottom='0px';
    }
    var char=document.getElementById('characters').querySelectorAll('div');
    for(var j=0;j<26;j++) {
        char[j].style.visibility='visible';
    }
    numberOfWrong=0;
    numberOfRight=0;
    wordLength=0;
    numberOfCharacters=0;
    results.style.marginTop='5px';
    results.style.lineHeight='40px';
    results.innerHTML=' '; 
    document.getElementById('thirdPage').style.display='block';
    document.getElementById('characters').style.display='block';
    reset.style.marginTop='0px';
    reset.style.display='none';
    document.getElementById('home').style.display='none';
    draw();
    if(programLang.indexOf(word) > -1){
        programLang.splice(random,1);
        programmingLanguages();
    }
    else if(frameworks.indexOf(word) > -1){
        frameworks.splice(random,1);
        frameWorks();
    }
    else if(movienames.indexOf(word) > -1){
        movienames.splice(random,1);
        movieNames();
    }
    else if(countrynames.indexOf(word) > -1){
        countrynames.splice(random,1);
        countryNames();
    }
}