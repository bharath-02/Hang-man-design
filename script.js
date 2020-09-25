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

function draw(){
    var homeImage = document.getElementById("hangingStand").getContext('2d');
        homeImage.fillStyle = "white";
        homeImage.lineWidth=3;
        homeImage.fillRect(0, 0, 300, 300);
        homeImage.beginPath(); //vertical bar
            homeImage.moveTo(50,270);
            homeImage.lineTo(50,25);
            homeImage.stroke();
        homeImage.beginPath(); //vertical bar long piece
            homeImage.moveTo(65,270);
            homeImage.lineTo(65,85);
            homeImage.stroke();
        homeImage.beginPath(); //vertical bar short piece
            homeImage.moveTo(65,64);
            homeImage.lineTo(65,40);
            homeImage.stroke();
        homeImage.beginPath(); //horizontal bar
            homeImage.moveTo(49,25);
            homeImage.lineTo(175,25);
            homeImage.stroke();
        homeImage.beginPath(); //horizontal bar short piece
            homeImage.moveTo(49,40);
            homeImage.lineTo(86,40);
            homeImage.stroke();
        homeImage.beginPath(); //horizontal bar long piece
            homeImage.moveTo(106,40);
            homeImage.lineTo(175,40);
            homeImage.stroke();
        homeImage.beginPath(); //small vertical bar
            homeImage.moveTo(173,25);
            homeImage.lineTo(173,40);
            homeImage.stroke();
        homeImage.beginPath(); //cross bar
            homeImage.moveTo(50,80);
            homeImage.lineTo(100,25);
            homeImage.stroke();
        homeImage.beginPath(); //cross bar
            homeImage.moveTo(60,90);
            homeImage.lineTo(111,35);
            homeImage.stroke();
        homeImage.beginPath(); //cross bar
            homeImage.moveTo(50,80);
            homeImage.lineTo(60,90);
            homeImage.stroke();
        homeImage.beginPath(); //cross bar
            homeImage.moveTo(100,25);
            homeImage.lineTo(111,35);
            homeImage.stroke();
        homeImage.beginPath(); //ground
            homeImage.moveTo(35,270);
            homeImage.lineTo(265,270);
            homeImage.stroke();
        homeImage.beginPath(); //noose
            homeImage.moveTo(150,40);
            homeImage.lineTo(150,80);
            homeImage.stroke();
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


function guessLetter() {
    var correct=0;
    var target=event.target || event.srcElement;
    target.style.visibility='hidden';
    var lower=target.id;
    var upper=document.getElementById(lower).getAttribute('value');
    var results=document.getElementById('results');
    var ul1=document.getElementById('underline1').offsetWidth;
    for(var i=1;i<=15;i++) {
        if(document.getElementById('letter'+i).innerHTML===upper || document.getElementById('letter'+a).innerHTML===lower) {
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
        results.style.color='red';
        results.innerHTML="you can't miss another letter!!!!";
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
        results.innerHTML='You lose!!!';
        document.getElementById('characters').style.display='none';
        document.getElementById('reset').style.display='block';
        document.getElementById('home').style.display='block';
        if(ul1 == 50){
            results.style.lineHeight = "40px";
        }
        if(ul1 == 30){
            results.style.lineHeight = "25px";
        }
        if(ul1 == 20){
            results.style.lineHeight = "20px";
        }
    }
    if(numberOfRight==wordLength) {
        win();
    }
}

function win() {
    var ul1=document.getElementById('underline1').offsetWidth;
    var reset=document.getElementById('reset');
    var results=document.getElementById('results');
    results.style.visibility='visible';
    results.style.color='green';
    results.innerHTML='You win!!!!';
    document.getElementById('characters').style.display='none';
    reset.style.display='block';
    document.getElementById('home').style.display='block';
    if(ul1==50) {
        reset.style.marginTop='75px';
        results.style.marginTop='75px';
        results.style.fontSize='200px';
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
    // if(numberOfWrong==2) {

    // }
}