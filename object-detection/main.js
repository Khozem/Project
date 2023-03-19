var img="";
var status1="";
object=[];
function preload()
{
    img=loadImage("dog_cat.jpg");
}

function setup()
{
     canvas=createCanvas(640,400);
     canvas.center();
     video=createCapture(VIDEO);
     video.hide();
objectdetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status : Detecting Objects"
}

function modelLoaded()
{
    console.log("Model Is Loaded");
    status1=true;

}

function gotresult(error,results)
{
    if(error)
    {
        console.error(error);
        
    }
   
        console.log(results);
        object=results;
}
function draw()
{
    image(video,0,0,640,400);
    if(status1!="")
    {
        objectdetector.detect(video,gotresult);
       for(i=0;i<object.length;i++)
       {
        document.getElementById("status").innerHTML="Status: Object Detected";

        fill("#34b1eb") ;
        precent=floor(object[i].confidence * 100);
        text(object[i].label+" "+ precent+"%",object[i].x,object[i].y);
        noFill();
        stroke("#34b1eb");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
             }
    }

}


