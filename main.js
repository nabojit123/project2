

function preload()
{
    
}

function setup()
{
    canvas = createCanvas(350, 350);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function modelLoaded()
{
    console.log("poseNet is initializing");
}

function gotposes(results)
{
    if(results.length > 0)
        {
            console.log(results);
             console. log(results[0].pose.nose.x);
            console. log(results[0].pose.nose.y);
        }
}

function draw()
{
    image(video, 0, 0, 350, 350);
}

function take_snapshot()
{
    save ('delete.png');
}