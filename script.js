var programLang=['Javascript','Typescript','Python','scala','Ruby'];
var frameworks=['React','Bootstrap','Angular','Bulma','Tensorflow','Django','Meteor','Foundation','Materialize'];
var movienames=['Endgame','FantasticFour','JusticeLeague','TheDarkKnights','SuicideSquad','IronMan','TheCivilWar'];
var countrynames=['Australia','NewZealand','Afganistan','Zimbabwe','Portugal','Barcelona','Germany','Netherlands'];
var random=0;
var word='';
var numberOfCharacters=0;
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
    hangman(word);
}

function frameWorks() {
    random=Math.floor(Math.random()*frameworks.length);
    word=frameworks[random];
    document.getElementById('secondPage').style.display='none';
    document.getElementById('categoryName').innerHTML='Frameworks';
    hangman(word);
}

function movieNames() {
    random=Math.floor(Math.random()*movienames.length);
    word=movienames[random];
    document.getElementById('secondPage').style.display='none';
    document.getElementById('categoryName').innerHTML='Movie Names';
    hangman(word);
}

function countryNames() {
    random=Math.floor(Math.random()*countrynames.length);
    word=countrynames[random];
    document.getElementById('secondPage').style.display='none';
    document.getElementById('categoryName').innerHTML='Country Names';
    hangman(word);
}

function hangman(word) {
    var validCharacters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var x=word.length;
    var y=x-1;
    while(x>0) {
        numberOfCharacters++;
        var letter=word.substring(y,x);
        if(validCharacters.indexOf(letter)>-1) {
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
