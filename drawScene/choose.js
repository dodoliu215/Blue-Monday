let sentence = [
    "可惡啊...星期一又來了。",
    "我不是在工作，我只是在賺錢。",
    "禮拜一，火氣比較大拉。",
    "這個時間，不是應該躺在床上嗎？",
    "阿姨我不想努力了。",
    "再ㄍㄧㄥ一下！領完年終再走。",
    "讓你疲憊的不是工作，而是工作中遇到的人。",
    "最大的不足，就是存款的餘額不足。"
  ]
  
  let next, back, writeChoose, arrowhead;
  let senNum;

  //色票呈現球
  let colorBall = [];

  function choose(){
    // writeChoose.style("width", "200px");
    // writeChoose.position(0,30);
    next.resize(13, 20);
    back.resize(13, 20);

    background(0);
    push();
    imageMode(CENTER);
    translate(width/2, height/2);
    textAlign(CENTER, CENTER);
    
    image(writeChoose, -20, -40*picResize);
    image(next, width/2-30, 90);
    image(back, -width/2+30, 90);

    //金句字
    fill("#eee8e5");
    textFont(Noto_Bold);
    textSize(16*picResize);
    text(sentence[senNum], 5,85);
    
    //白匡
    noFill();
    stroke("#eee8e5");
    strokeWeight(2);
    quad(-width/2+5, 50, width/2-5, 30, width/2-5, 140, -width/2+5, 130);

    //色票隨機的範圍
    // rect(-width/2+50, 120, width-100, 50);

    //色票
    for(let i = 0; i < GSentence[senNum].color.length; i++){
      // stroke("#eee8e5");
      // strokeWeight(2);
      noStroke();
      fill(GSentence[senNum].color[i].r, GSentence[senNum].color[i].g, GSentence[senNum].color[i].b);
      circle(colorBall[i].x, colorBall[i].y, 25);
    }

    //綠底
    fill("#c9dc57");
    noStroke();
    quad(-width/2+24*picResize, -117*picResize, -width/2+25*picResize, -180*picResize, -width/2+228*picResize, -190*picResize, -width/2+228*picResize, -120*picResize);
    //選擇一個
    textAlign(LEFT, CENTER);
    fill(0);
    textFont(Noto_Bold);
    textSize(17*picResize);
    text('選擇一個', -width/2+61*picResize, -153*picResize);
    //金句
    textSize(20*picResize);
    stroke(0);
    strokeWeight(0.5);
    text('金句。', -width/2+144*picResize, -156*picResize);
    pop();

    // if(device) fill(255);
    // rect(0, height/2+60, 55, 60);
    // rect(width-55, height/2+60, 55, 60);
  }

  function touchStarted(){
    if(device){
      for (let i = 0; i < touches.length; i++) {
        if(touches[i].x > 0   &&   touches[i].x < 60 * picResize   &&   touches[i].y > height/2 + 40 * picResize   &&   touches[i].y < height/2 + 150 * picResize){
          left();
        }else if(touches[i].x > width - 60 * picResize   &&   touches[i].x < width   &&   touches[i].y > height/2 + 40 * picResize   &&   touches[i].y < height/2 + 150 * picResize){
          right();
        }
      }
    }else if(device == false){
      if(mouseX>5*picResize && mouseX<50*picResize && mouseY>260*picResize && mouseY<350*picResize){
          left();
      }else if(mouseX>400*picResize && mouseX<450*picResize && mouseY>260*picResize && mouseY<350*picResize){
          right();
      }
    }
  }


  function right(){
    // console.log('right');
    if(senNum == 7){
      senNum = 0;
    }else{
      senNum ++;
    }

    //重洗位置
    for(let i = 0; i < 10; i++){
      colorBall[i].x = random(-width/2+50, -width/2+50 + width-100);
      colorBall[i].y = 130;
    }
    // print(senNum,sentence[senNum]);
  }
  

  function left(){
    // console.log('left');
    if(senNum == 0){
      senNum = 7;
    }else{
      senNum --;
    }

    //重洗位置
    for(let i = 0; i < 10; i++){
      colorBall[i].x = random(-width/2+50, -width/2+50 + width-100);
      colorBall[i].y = 130;
    }
    // print(senNum,sentence[senNum]);
  }