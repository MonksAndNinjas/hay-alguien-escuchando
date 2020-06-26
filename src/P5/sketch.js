export default function sketch(p) {
  let canvas;

  p.setup = () => {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
  };

  p.draw = () => {
    p.background("black");
    p.fill("white");
    p.ellipse(
      p.windowWidth / 2,
      p.windowHeight / 2,
      p.windowWidth / 4,
      p.windowHeight / 4
    );
  };

  p.myCustomRedrawAccordingToNewPropsHandler = newProps => {
    if (canvas)
      //Make sure the canvas has been created
      p.fill(0);
  };
}

/*
////star shape/////

// window length / 2
var l = 100;
var j = -1;

function setup() {
  createCanvas(400, 400)//l * 2, l * 2);
}

function draw() {
  background("black");
  
  strokeWeight(1);
  
  // Center shape
  translate (200-l,200-l)
  
  // Create star shape
  for(var x=0; x<=l; x++) {
    stroke(225, 225-x, 225)
    line(x, l, l, l-x);          //Q1
    line((l * 2)-x, l, l, l-x);  //Q2
    line(x, l, l, l+x);          //Q3
    line((l * 2)-x, l, l, l+x);   //Q4
  }
  
  // Twinkle animation
  if (j==-1) {
    if(l>100) {
      l=l-2
    } else if (l==100) {
      j = j * (-1)
    }
  } else if (j==1) {
    if (l<200) {
      l=l+2                
    } else if (l==200) {
      j = j * (-1)
    }
  }
*/
