//brush
let sprayXY, sprayS;
let drips = [];
let x, y;

function brush_set(){
  //brush_1
  distance = 10;
  spring = 0.5;
  friction = 0.5;
  size = 10;
  diff = size/2;
  ax = ay = a = r = f = 0;

  sprayXY = createVector();
}


function brush_1(){
  let R;
  let G;
  let B;

  R = GSentence[GS].color[col[3]].r;
  G = GSentence[GS].color[col[3]].g;
  B = GSentence[GS].color[col[3]].b;

  push();
  oldR = r;
  if(record3 == true) {
    mX = bodyX;
    mY = bodyY;
    if(!f) {
      f = 1;
      x = mX;
      y = mY;
    }
    ax += ( mX - x ) * spring;
    ay += ( mY - y ) * spring;
    ax *= friction;
    ay *= friction;
    a += sqrt( ax*ax + ay*ay ) - a;
    a *= 0.6;
    r = size - a;
    

    
    for( i = 0; i < distance; ++i ) {
      oldX = x;
      oldY = y;
      x += ax / distance;
      y += ay / distance;
      oldR += ( r - oldR ) / distance;
      if(oldR < 1) oldR = 1;
      brushLayer3.strokeWeight( oldR+diff );
      brushLayer3.stroke(R, G, B);
      brushLayer3.line( x, y, oldX, oldY );
      brushLayer3.strokeWeight( oldR );
      brushLayer3.line( x+diff*2, y+diff*2, oldX+diff*2, oldY+diff*2 );
      brushLayer3.line( x-diff, y-diff, oldX-diff, oldY-diff );
      
      for(let i = 0; i < 10; i++){
         // let pos = p5.Vector.random2D();
         // let rad = 1 + random(3 ,10);
         // pos.mult(rad);

         sprayXY.x = random(-5, 5);
         sprayXY.y = random(-5, 5);
         sprayS = random(10, 20);
         brushLayer3.noStroke();
         brushLayer3.fill(R, G, B, 70);
         if(oldR>7){
          brushLayer3.ellipse(x+sprayXY.x, y+sprayXY.y, 12, 12);
         }else{
          brushLayer3.ellipse(x+sprayXY.x, y+sprayXY.y, sprayS*oldR/7, sprayS*oldR/7);
         }
         
      }
    }

    
  } else if(f) {
    ax = ay = f = 0;
  }
  
  //DRIP show
  if (frameCount % 50 == 0) {
    drips.push(new Drip(x, y, random(5, 10), color(R, G, B)));
  }
  for (let i = 0; i < drips.length; i++) {
  drips[i].move();
  drips[i].show();
    if (drips[i].y > height) {
    drips.splice(i, 1);
    }
  }
  pop();
}