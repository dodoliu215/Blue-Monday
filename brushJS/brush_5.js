//brush
let spray_5XY;
let drips_5 = [];


function darkbrush_set(){
  spray_5XY = createVector();
}


function darkbrush(){
  let R;
  let G;
  let B;

  R = GSentence[GS].color[col[5]].r;
  G = GSentence[GS].color[col[5]].g;
  B = GSentence[GS].color[col[5]].b;

  push();
  oldR = r;
  if(record5 == true) {
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
      brushLayer5.strokeWeight( oldR+diff );
      brushLayer5.stroke(R, G, B);
      brushLayer5.line( x, y, oldX, oldY );
      brushLayer5.strokeWeight( oldR );
      brushLayer5.line( x+diff*2, y+diff*2, oldX+diff*2, oldY+diff*2 );
      brushLayer5.line( x-diff, y-diff, oldX-diff, oldY-diff );
      
      for(let i = 0; i < 10; i++){
         // let pos = p5.Vector.random2D();
         // let rad = 1 + random(3 ,10);
         // pos.mult(rad);

         spray_5XY.x = random(-5, 5);
         spray_5XY.y = random(-5, 5);
         sprayS = random(10, 20);
         brushLayer5.noStroke();
         brushLayer5.fill(R, G, B, 70);
         if(oldR>7){
          brushLayer5.ellipse(x+spray_5XY.x, y+spray_5XY.y, 12, 12);
         }else{
          brushLayer5.ellipse(x+spray_5XY.x, y+spray_5XY.y, sprayS*oldR/7, sprayS*oldR/7);
         }
         
      }
    }

    
  } else if(f) {
    ax = ay = f = 0;
  }
  
  //DRIP show
  if (frameCount % 50 == 0) {
    drips_5.push(new Drip_5(x, y, random(5, 10), color(R, G, B)));
  }
  for (let i = 0; i < drips_5.length; i++) {
  drips_5[i].move();
  drips_5[i].show();
    if (drips_5[i].y > height) {
    drips_5.splice(i, 1);
    }
  }
  pop();
}