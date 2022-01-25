let rightHand_pre, leftHand_pre, p_eye, p_leftEar, p_rightEar;
let wall;
let openCamToggle = false;

let checkHand_R = false;
let checkHand_L = false;
let checkHead = false;

let noticeNum = 3;
let nums = [];
let nums_max = 1;
let letsgoCount = 0;

let timer = 30;
let countDown = false;
let lose = false;

function playGame(){
  if(countDown){
    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer --;
    }
    if (timer == 0) {
      nameScene = true;
      playScene = false;
      lose = true; //未在時間內完成
    }
  }

  if(openCamToggle){
    openCamera();
  }

  push();
  scale(-1,1);
  image(video, -width/2, height/2, width+100, height);
  background(255, 130);
  pop();
  htmlevent(); //eventlistener

  //level text
  push();
  fill(0);
  textFont(aaa);
  textSize(26*picResize);
  if(level1 || level2 ||level3 || level4 || level5){
    text("Level"+" "+levelNum, width/2, 35*picResize);
  }
  pop();


  //開啟筆刷layer
  if(layer1){
  image(brushLayer, width/2, height/2);
  }
  if(layer2){
  image(brushLayer2, width/2, height/2);
  }
  if(layer3){
  image(brushLayer3, width/2, height/2);
  }
  if(layer4){
  image(brushLayer4, width/2, height/2);
  }
  if(layer5){
  image(brushLayer5, width/2, height/2);
  }

  push();
  drawKeypoints();//function 把部位放在筆刷上面
  pop();


  //圖卡隨機位置
  if(goL2){
  changeL2();
  }
  if(goL34){
  changeL34();
  }

  if(goL5){
  changeL5();
  }

  //----------------------------- 關卡內容 -----------------------------

  if(level0 == true){
    push();
    translate(width/2, height/2);
    rectMode(CENTER, CENTER);
    
    //對頭
    if(nose_F.x < width/2+50 && nose_F.x > width/2-50 && nose_F.y < height/2-15 && nose_F.y > height/2-140){
      image(faceCheck, 0, -70*picResize);
      checkHead = true;
    }else{
      image(face, 0, -70*picResize);
      checkHead = false;
    }
    //對左手
    if(leftHand_F.x > width/2-170 && leftHand_F.x < width/2-70 && leftHand_F.y < height/2+100 && leftHand_F.y > height/2-20){
      image(leftHandCheck, -120*picResize, 30*picResize);
      checkHand_L = true;
    }else{
      image(leftHand_pre, -120*picResize, 30*picResize);
      checkHand_L = false;
    }
    //對右手
    if(rightHand_F.x < width/2+170 && rightHand_F.x > width/2+70 && rightHand_F.y < height/2+100 && rightHand_F.y > height/2-20){
      image(rightHandCheck, 120*picResize, 30*picResize);
      checkHand_R = true;
    }else{
      image(rightHand_pre, 120*picResize, 30*picResize);
      checkHand_R = false;
    }

    pop();

    if(checkHead && checkHand_L && checkHand_R){
      startCount++;

      if(startCount > 100){
        level0_1 = true;
        level0 = false;
      }
    }else{
      startCount = 0;
    }

  }else if(level0_1 == true){
    takeface = true;
    levelNum = 0;
    letsgoCount ++ ;

    if(letsgoCount == 1){
      nums.push(new Num(0, 0, 3, 40));
    }else if(letsgoCount == 60){
      nums.push(new Num(0, 0, 2, 40));
    }else if(letsgoCount == 120){
      nums.push(new Num(0, 0, 1, 40));
    }else if(letsgoCount == 180){
      nums.push(new Num(0, 0, 0, 40));
    }

    for(let i = 0; i < nums.length; i++){
      nums[i].draw();
      nums[i].update();

      if(nums[i].s > 80){
        nums[i].s = 80;
      }
    }
  
    if(nums.length > nums_max) nums.splice(0,1);

    if(letsgoCount == 240){
      level1 = true;
      level0_1 = false;
      levelNum = 1;
    }

  }else if(level1 == true){

    countDown = true;

    push();
    missionImg();
    pop();
    
    checkSpot_1(); //看第二關身體部位是哪裡. bodyX bodyY

    //brushJS
    brush_big(); //brush_3
    
    if(d<spotDis){
      goL2 = true;
      layer1 = true; //顯示筆刷
    }
    
  }else if(level2 == true){
    record2 = true;
    
    push();
    missionImg();
    pop();
    
    checkSpot_1();//看關卡的身體部位是哪裡
    
    //brushJS
    bigSpray();

    if(d<spotDis){
      goL34 = true;
      record2 = false;//關掉紀錄筆刷
      layer2 = true; //顯示筆刷
    }
    
  }else if(level3 == true){
    record3 = true;
    rightDist = false; //關掉圖卡距離偵測 不然他會一直跑筆刷...
    
    push();
    missionImg();
    mission2Img();
    pop();
    
    checkSpot_2();
    
    //brushJS
    brush_1();
    
    if(d<spotDis && d2<spotDis){
      goL34 = true;
      record3 = false;//關掉紀錄筆刷
      layer3 = true; //顯示筆刷
    }
    
  }else if(level4 == true){
    record4 = true;
    rightDist = false; //關掉圖卡距離偵測 不然他會一直跑筆刷...
    
    push();
    missionImg();
    mission2Img();
    pop();
    
    checkSpot_2();
    
    //brushJS
    brush_light();
    
    if(d<spotDis && d2<spotDis){
      goL5 = true;
      record4 = false;//關掉紀錄筆刷
      layer4 = true; //顯示筆刷
    }
    
  }else if(level5 == true){
    record5 = true;

    push();
    missionImg();
    missio_mixImg();
    pop();
    
    checkSpot_2();//看關卡的身體部位是哪裡
    
    //brushJS
    darkbrush();

    spotDis = 50;

    if(d<spotDis && d2<spotDis){
      nameScene = true;
      playScene = false;

      level6 = true; //增加關卡
      level5 = false; //增加關卡

      record5 = false;//關掉紀錄筆刷
      layer5 = true; //顯示筆刷
    }
    
  }else if(level6 == true){

  }
}


let UserName;
let namePosition;
let logo;

let typeValue = false;
let moveName = true;
let noticeWord = false;
let namecount = 0;

function NameTheDraw(){
  push();
  translate(width/2, height/2);
  image(wall, 0, 0);

  if(lose == false){
    image(brushLayer, 0, 0);
    image(brushLayer2, 0, 0);
    image(brushLayer3, 0, 0);
    image(brushLayer4, 0, 0);
    image(brushLayer5, 0, 0);
  }else if(lose){
    if(levelNum == 1){
      image(wall, 0, 0);

    }else if(levelNum == 2){
      image(wall, 0, 0);
      image(brushLayer, 0, 0);

    }else if(levelNum == 3){
      image(wall, 0, 0);
      image(brushLayer, 0, 0);
      image(brushLayer2, 0, 0);

    }else if(levelNum == 4){
      image(wall, 0, 0);
      image(brushLayer, 0, 0);
      image(brushLayer2, 0, 0);
      image(brushLayer3, 0, 0);

    }else if(levelNum == 5){
      image(wall, 0, 0);
      image(brushLayer, 0, 0);
      image(brushLayer2, 0, 0);
      image(brushLayer3, 0, 0);
      image(brushLayer4, 0, 0);
    }
  }


  image(logo, 150 * picResize, -160 * picResize);
  image(radius, 0, 0);
  textAlign(LEFT, CENTER);
  fill(0, 150);
  textSize(25 * picResize);
  textFont(MSTB);
  text(GSentence[GS].word, -width/2 + 40 * picResize, 140 * picResize);
  pop();
  
  textAlign(CENTER, CENTER);

  UserName = document.getElementById("typeName").value;
  
  if(UserName != ""){
    typeValue = true;
    
  }

  if(keyIsPressed){
    // px = namePosition.x; //避免noticeWord一直是true
    namecount=0;
    noticeWord = true;
  }

  //name
  push();
  noStroke();
  fill(0, 180);
  textSize(65 * picResize);
  textFont(aaa);
  text(UserName, namePosition.x, namePosition.y);
  pop();


  if(moveName){
    //點擊拖移名字
    if(typeValue && mouseIsPressed && mouseY > 0 && mouseY < height && mouseX > 0 && mouseX < width){
      namePosition.x = mouseX;
      namePosition.y = mouseY;
    }
    // if(px != namePosition.x){
    //   noticeWord = false;
    //   namecount=0;
    // }
  }

  //------ count number -------
  // fill(0);
  // text(namecount, 20, 20);
  
  if(noticeWord && endScene == false){
    push();
    fill(0, 150);
    textSize(17);
    text('點擊 / 拖移 · 來調整文字位子', width/2, 45);
    pop();
    if (frameCount % 60 == 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      namecount ++;
    }
    if (namecount >= 3) {
      noticeWord = false;
    }
  }

}