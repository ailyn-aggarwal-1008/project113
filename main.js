function preload(){


}

function setup(){

    canvas=createCanvas(640,540);
    canvas.position(100,250);
    video=createCapture(VIDEO);
    video.hide();

}


function draw(){
    image(video,0,0,640,540);
    fill("red");
    stroke("black");
    rect(25,50,600,20);
    rect(25,500,600,20);
    rect(600,50,20,450);
    rect(25,50,20,450)
}

function take_snapshot(){

    save("img.png");
}