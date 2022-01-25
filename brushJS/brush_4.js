let spray_4XY;
let drip4 = [];

function light_set() {
  distance4 = 1;
  spring4 = 0.2;
  friction4 = 0.8;
  size4 = 10;
  diff4 = size4/20;

  spray_4XY = createVector();
}

function brush_light() {
  let R;
  let G;
  let B;

  R = GSentence[GS].color[col[4]].r;
  G = GSentence[GS].color[col[4]].g;
  B = GSentence[GS].color[col[4]].b;
  
  oldR = r;
  if(record4 == true) {
    mX = bodyX;
    mY = bodyY;
    if(!f) {
      f = 1;
      x = mX;
      y = mY;
    }
    ax += ( mX - x ) * spring4;
    ay += ( mY - y ) * spring4;
    ax *= friction4;
    ay *= friction4;
    a += sqrt( ax*ax + ay*ay ) - a;
    a *= 0.6;
    r = size4 - a;
    

    
    for( i = 0; i < distance4; ++i ) {
      oldX = x;
      oldY = y;
      x += ax / distance4;
      y += ay / distance4;
      oldR += ( r - oldR ) / distance4;
      if(oldR < 1) oldR = 1;
      brushLayer4.strokeWeight( oldR+diff4 );
      brushLayer4.stroke(R,G,B);
      brushLayer4.line( x, y, oldX, oldY );
      brushLayer4.strokeWeight( oldR );
      brushLayer4.line( x+diff4*2, y+diff4*2, oldX+diff4*2, oldY+diff4*2 );
      brushLayer4.line( x-diff4, y-diff4, oldX-diff4, oldY-diff4 );
      
      for(let i = 0; i < 1; i++){
         // let pos = p5.Vector.random2D();
         // let rad = 1 + random(3 ,10);
         // pos.mult(rad);

         spray_4XY.x = random(-40, 40);
         spray_4XY.y = random(-40, 40);
         sprayS = random(10, 20);
         brushLayer4.noStroke();
        
//          if(oldR>7){
//           fill(153, 94, 229, 90);
//           ellipse(x+spray_4XY.x, y+spray_4XY.y, sprayS*oldR/100, sprayS*oldR/100);
//          }else{
//           fill(153, 94, 229, 180);
//           ellipse(x+spray_4XY.x, y+spray_4XY.y, sprayS*oldR/7, sprayS*oldR/7);
//          }
         
      }
    }

    
  } else if(f) {
    ax = ay = f = 0;
  }
  
  //DRIP show
  if (frameCount % 50 == 0) {
    drip4.push(new Drip_4(x, y, random(5), color(R,G,B)));
  }
  for (let i = 0; i < drip4.length; i++) {
  drip4[i].move();
  drip4[i].show();
    if (drip4[i].y > height) {
    drip4.splice(i, 1);
    }
  }
}