song = "";
statsong = "";
scoreLW = 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload() {
    song = loadSound('AmongUs.mp3.mp3', 'Enemy.mp3.mp3');
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("Model has been loaded");
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        scoreLW = results[0].pose.keypoints[9].score;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX + "leftWristY =" + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}
function draw() {
    image(video, 0, 0, 300, 300);

    statsong = song_variable.isPlaying(AmongUs.mp3.mp3);
    
    fill ("red");
    stroke("black");
    if(scoreLW > 0.2) {
    circle(leftWristX, leftWristY, 20);
    song_variable.stop(Enemy.mp3.mp3);
}
    if(AmongUs.mp3.mp3 = false) {
        song.play(AmongUs.mp3.mp3);
        song = console.log("Among Us theme song is playing");
    } 
    statsong = song_variable.isPlaying(Enemy.mp3.mp3);
    
    fill ("red");
    stroke("black");
    if(scoreLW > 0.2) {
    circle(rightWristX, rightWristY, 20);
    song_variable.stop(AmongUs.mp3.mp3);
}
    if(Enemy.mp3.mp3 = false) {
        song.play(Enemy.mp3.mp3);
        song = console.log("Enemy theme song is playing");
    } 


    flw = Number(leftWristY);
    deci = floor(flw);
    divs = deci / 300;
    document.getElementById('Volume_Label').innerHTML = "Volume = " + divs; 

    song.setVolume(divs);

    }
   
function start() {
    song.play();
}