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
}
