let baseUrlPictures = " https://oscaraccorsi.github.io/hartung/";
let baseURLImage = "https://oscaraccorsi.github.io/pictures/";
let logo;

let img;
let palette = [];
let pictureList = [
  "hartung01.jpg","hartung03.jpg","hartung04.jpeg","hartung05.jpeg",
  "hartung06.jpg","hartung07.jpg","hartung08.jpeg","hartung09.jpg",
  "hartung10.jpg","hartung11.jpg","hartung12.jpg","hartung13.jpg",
  "hartung14.jpg","hartung15.jpg","hartung16.jpg","hartung17.jpg",
  "hartung18.jpg","hartung19.jpeg","hartung20.jpeg","hartung21.jpeg",
  "hartung22.jpeg","hartung23.jpg","hartung24.jpg","hartung26.jpg"];

let xLimit, yLimit;
let yMomLimit;
let x;
let a;
let aArray = [0.5, 1, 2, 3];
let aInc;

let alphaArray = [25, 50, 75];
let alpha;

//---------------------------------------------------------preload
function preload() {
  h = round(random(0, 24));
  img = loadImage(baseUrlPictures + pictureList[h]);
  logo = loadImage(baseURLImage + "good one white.png");
  
}

//-----------------------------------------------------------SETUP
function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);

//------------------------------------------------palette
  img.resize(100, 0);
  img.loadPixels();
  
  console.log(pictureList[h],  width, height);
 
  for (let i = 0; i < img.pixels.length; i += 4) {
    let r = img.pixels[i];
    let g = img.pixels[i + 1];
    let b = img.pixels[i + 2];
    alpha = random(alphaArray);
    let c = color(r, g, b, alpha);
    palette.push(c);
  }
  
  yLimit = round(random(0, height/2.5));
  xLimit = round(random(0, width/2.5));
  
  stroke(random(palette));
  a = round(random(yLimit, height-yLimit));
  aInc = random(aArray);
  yMomLimit = round(random(a, yLimit));
  x = xLimit;
}

//--------------------------------------------------windowResized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//---------------------------------------------------------DRAW 
function draw() {
  //background(51, 2);
  
  line(x, a, width-x, a);
  a -= aInc;
  
  if (a < yMomLimit) {
    a = random(yLimit, height-yLimit);
    x = round(random(xLimit, width-xLimit));
    yMomLimit = round(random(a, yLimit));
    aInc = random(aArray);
    stroke(random(palette));
  }
  // if (a == height-yLimit) {
  //   a -= aInc;
  //   stroke(random(palette));
  //   }
  if (a >= (height-yLimit)-10) {
    reloadPage();
  }
}

//----------------------------------reLoad
function reloadPage() {
  window.location.reload();
}
  
function mousePressed() {
  imageMode(CENTER);
  let xLogo = windowWidth - 40;
  logo.resize(40, 0);
  image(logo, xLogo, windowHeight - 25);
  tint(200);
  imageMode(CORNER);
  save();
  clear();
  
}
