song = "";
function preload() {
    song = loadSound('AmongUs.mp3.mp3', 'Enemy.mp3.mp3');
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

}
function draw() {
    image(video, 0, 0, 300, 300);
}
function start() {
    song.play();
}