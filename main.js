function preload(){
    classifier=ml5.imageClassifier("DoodleNet");

}

function setup()
{
    canvas=createCanvas(400,300);
    canvas.center();
    canvas.background("white")
    canvas.mouseReleased(classifyCanvas)
    synth=window.speechSynthesis;
    
}

function draw(){

}

function clear_canvas(){
    background("white");

}