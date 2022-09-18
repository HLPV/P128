song=""

rightwirstx=0
rightwirsty=0

leftwirst=0
leftwirst=0

function preload(){
    song=loadSound("Migrane.mp3")
}


function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

}

function modelLoaded(){
    console.log("Modelo cargado")
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        rightwirstx=results[0].pose.rightWirstX.x;
        rightwirsty=results[0].pose.rightWirstY.y;

        console.log("DER X"+rightwirstx+"DER Y"+rightwirsty)

        leftwirstx=results[0].pose.leftWirstX.x;
        leftwirsty=results[0].pose.leftWirstY.y;

        console.log("IZQ X"+leftwirstx+"IZQ Y"+leftirsty)
    }}

function draw(){
    image(video ,0,0,600,500)
}


