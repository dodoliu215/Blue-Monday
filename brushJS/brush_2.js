//brush_2
let drips_2 = [];
let spray_2XY;

function bigSpray_set(){
  //brush_2
  distance2 = 5;
  spring2 = 0.5;
  friction2 = 0.7;
  size2 = 40;
  diff2 = size2/10;
  
  spray_2XY = createVector();
}


function bigSpray(){
  let R;
  let G;
  let B;

  R = GSentence[GS].color[col[1]].r;
  G = GSentence[GS].color[col[1]].g;
  B = GSentence[GS].color[col[1]].b;

  let R2;
  let G2;
  let B2;

  R2 = GSentence[GS].color[col[2]].r;
  G2 = GSentence[GS].color[col[2]].g;
  B2 = GSentence[GS].color[col[2]].b;

  push();
  
  oldR = r;
  if(record2 == true) {
    mX = bodyX;
    mY = bodyY;
    if(!f) {
      f = 1;
      x = mX;
      y = mY;
    }
    ax += ( mX - x ) * spring2;
    ay += ( mY - y ) * spring2;
    ax *= friction2;
    ay *= friction2;
    a += sqrt( ax*ax + ay*ay ) - a;
    a *= 0.6;
    r = size2 - a;
    

    
    for( i = 0; i < distance2; ++i ) {
      oldX = x;
      oldY = y;
      x += ax / distance2;
      y += ay / distance2;
      oldR += ( r - oldR ) / distance2;
      if(oldR < 1) oldR = 1;
      brushLayer2.strokeWeight( oldR+diff2 );
      brushLayer2.stroke(R,G,B);
      brushLayer2.line( x, y, oldX, oldY );
      brushLayer2.strokeWeight( oldR );
      brushLayer2.line( x+diff2*2, y+diff2*2, oldX+diff2*2, oldY+diff2*2 );
      brushLayer2.line( x-diff2, y-diff2, oldX-diff2, oldY-diff2 );
      
      for(let i = 0; i < 1; i++){
         // let pos = p5.Vector.random2D();
         // let rad = 1 + random(3 ,10);
         // pos.mult(rad);

         spray_2XY.x = random(-40, 40);
         spray_2XY.y = random(-40, 40);
         sprayS = random(10, 20);
         brushLayer2.noStroke();
        
         if(oldR>7){
          brushLayer2.fill(R2, G2, B2, 90);
          brushLayer2.ellipse(x+spray_2XY.x, y+spray_2XY.y, sprayS*oldR/100, sprayS*oldR/100);
         }else{
          brushLayer2.fill(R2, G2, B2, 180);
          brushLayer2.ellipse(x+spray_2XY.x, y+spray_2XY.y, sprayS*oldR/7, sprayS*oldR/7);
         }
         
      }
    }

    
  } else if(f) {
    ax = ay = f = 0;
  }
  
  //DRIP show
  if (frameCount % 50 == 0) {
    drips_2.push(new Drip_2(x, y, random(5, 10), color(R,G,B)));
  }
  for (let i = 0; i < drips_2.length; i++) {
  drips_2[i].move();
  drips_2[i].show();
    if (drips_2[i].y > height) {
    drips_2.splice(i, 1);
    }
  }

  pop();
}