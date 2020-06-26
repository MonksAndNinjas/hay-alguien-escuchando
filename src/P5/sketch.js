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
