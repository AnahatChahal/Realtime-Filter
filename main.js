noseX=0;
noseY=0;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/BvGLptGb/580b57fbd9996e24bc43bed5.png')
}

function setup(){
    canvas=createCanvas(250, 250);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(250,250);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x -10;
        noseY=results[0].pose.nose.y -10;
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function draw(){
    image(video,0,0,250,250);
    image(clown_nose,noseX,noseY,30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}