let spraySize;
let sprayAlpha;
let sprayRange;


function brush_big() {
  let r;
  let g;
  let b;

  r = GSentence[GS].color[col[0]].r;
  g = GSentence[GS].color[col[0]].g;
  b = GSentence[GS].color[col[0]].b;

  if(layer1 == false){
    for(let i = 0; i < 70; i++){
      spraySize = random(1,3);
      sprayAlpha = random(50, 70);
      sprayRange = random(50,100);
      sprayRange2 = random(50,100);

      push();
      brushLayer.noStroke();
      // brushLayer.fill(45, random(63,220), random(144,220), sprayAlpha);
      brushLayer.fill(r, random(g,220), random(b,220), sprayAlpha);
      brushLayer.ellipse(bodyX-random(-sprayRange, sprayRange2), bodyY-random(-sprayRange, sprayRange2), spraySize, spraySize);
      pop();
    }
  }
  
}