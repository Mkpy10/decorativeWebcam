function preload(){

}

function setup(){
   canvas = createCanvas(500, 400);
   canvas.position(55, 60);
   Video = createCapture(VIDEO);
   Video.hide();
}

function draw(){
    image(Video, 50, 38, 400, 300);
    fill(255, 0, 0);
    circle(30, 30, 55);
    circle(30, 365, 55);
    circle(470, 30, 55);
    circle(470, 365, 55);
    fill(0, 255, 0);
    rect(10, 50, 35, 300);
    rect(45, 10, 400, 35);
    rect(45, 350, 400, 35);
    rect(455, 55, 40, 285);
    
}