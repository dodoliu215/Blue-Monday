let gif1;
let gif2;

let introText1 = "將對應的身體部位移動至圖卡上";
let introText2 = "出現兩個圖卡時\n兩個部位都要對到喔！";


function intro(){
    push();
    noStroke();
    fill("#f4f3f2");
    rect(0, 0, Width, Width, 20);
    pop();

    
    push();
    translate(width/2, height/2+80*picResize);
    imageMode(CENTER);
    //gif
    image(gif1, 0, 0);

    //綠底
    fill("#c9dc57");
    noStroke();
    quad(-width/2+45*picResize, -175*picResize, width/2-20*picResize, -168*picResize, width/2-20*picResize, -260*picResize, -width/2+45*picResize, -245*picResize);

    //互動說明 tag
    fill(0);
    noStroke();
    quad(-width/2+26*picResize, -235*picResize, -width/2+115*picResize, -235*picResize, -width/2+115*picResize, -267*picResize, -width/2+26*picResize, -275*picResize);
    fill(255);
    textAlign(LEFT,CENTER);
    textSize(14*picResize);
    textFont(Noto_Bold);
    text('互動說明', -width/2+45*picResize, -height/2-30*picResize);

    //step1 text
    fill(0);
    textAlign(CENTER,CENTER);
    textSize(20*picResize);
    textFont(aaa);
    text('step*'+' '+'1', -118*picResize, -212*picResize);
    //intro text
    textAlign(LEFT,CENTER);
    textSize(17*picResize);
    textFont(Noto_Bold);
    text(introText1, -60*picResize, -212*picResize);
    pop();
  }

  function intro2(){
    push();
    noStroke();
    fill("#f4f3f2");
    rect(0, 0, Width, Width, 20);
    pop();

    
    push();
    translate(width/2, height/2+80*picResize);
    imageMode(CENTER);
    //gif
    image(gif2, 0, 0);

    //綠底
    fill("#c9dc57");
    noStroke();
    quad(-width/2+45*picResize, -175*picResize, width/2-20*picResize, -168*picResize, width/2-20*picResize, -260*picResize, -width/2+45*picResize, -245*picResize);

    //互動說明 tag
    fill(0);
    noStroke(0);
    quad(-width/2+26*picResize, -235*picResize, -width/2+115*picResize, -235*picResize, -width/2+115*picResize, -267*picResize, -width/2+26*picResize, -275*picResize);
    fill(255);
    textAlign(LEFT,CENTER);
    textSize(14*picResize);
    textFont(Noto_Bold);
    text('互動說明', -width/2+45*picResize, -height/2-30*picResize);

    //step2 text
    fill(0);
    textAlign(CENTER,CENTER);
    textSize(20*picResize);
    textFont(aaa);
    text('step*'+' '+'2', -113*picResize, -212*picResize);
    
    //intro text
    textAlign(LEFT,CENTER);
    textSize(17*picResize);
    textFont(Noto_Bold);
    text(introText2, -45*picResize, -212*picResize);
    pop();
  }