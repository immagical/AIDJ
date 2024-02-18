song1 = " "; 

function preload() {
    song1 = loadSound("music.mp3"); 
}
function setup() {
    video = createCapture(VIDEO); 
    video.size(400, 400); 
    video.hide(); 
    canvas = createCanvas(400,400); 
    canvas.center(); 
}
function draw() {
    image(video, 0, 0, 400, 400); 
    
}
function startSong() {
    song1.play(); 
}