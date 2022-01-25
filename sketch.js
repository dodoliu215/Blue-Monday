let myCanvas2; //宣告畫布變數
let Width;
let radius;

let manHandR, manHandL, manHead, deco;
let manHR, manHL, manHD;

let startScene = true;
let chooseScene = false;
let introScene = false;
let introScene_2 = false;
let playScene = false;
let nameScene = false;
let endScene = false;

//nameScene
let px;

//font
let Mostwasted, aaa, MSTB, Noto_Bold;

//ready
let startCount = 0;
let letgoImg, letgoImg_hover;

//選的句字
let GS = 0;


//關卡場景
let level0, level0_1, level1, level2, level3, level4, level5, level6;
let levelNum;

//圖卡內容
let mission = []; //關卡部位內容存放處
let mission2 = []; //關卡部位內容存放處-->放第兩個ㄉ

let mission_max;
let missionX, missionY, mission2_X, mission2_Y; // 圖卡位置

//圖卡外觀
let spotDis = 30;
let iconSize;


//身體部位
let allPoint = ['右眼','左眼','鼻子','右耳','左耳','右手','左手'];
let facePoint = ['右眼','左眼','鼻子','右耳','左耳'];
let handPoint = ['右手','左手'];
let goL2 = false; 
let goL34 = false; 
let goL5 = false; 

let d, d2;
let distHand; //用來辨識雙手是否都在螢幕中
let bodyX, bodyY, body2_X, body2_Y;

//brushLayer;
let layer1 = false;
let layer2 = false;
let layer3 = false;
let layer4 = false;
let layer5 = false;

//record
let record2 = false;
let record3 = false;
let record4 = false;
let record5 = false;

let brushLayer, brushLayer2, brushLayer3, brushLayer4, brushLayer5;


//mission image
let leftHandImg,rightHandImg, noseImg, leftEyeImg, rightEyeImg, leftEarImg, rightEarImg;


function preload(){
  Mostwasted = loadFont('/font/Mostwasted.ttf');
  aaa = loadFont('/font/aaaiight-fat.ttf');
  MSTB = loadFont('/font/MSTIFFHEIHK-BOLD.OTF');
  Noto_Bold = loadFont('/font/NotoSansCJKtc-Bold.otf');
  Myriad = loadFont('/font/MyriadPro-SemiboldCond-12.otf');
  manHead = loadImage('image/smallHead.png');
  manHandL = loadImage('image/smallHand1.png');
  manHandR = loadImage('image/smallHand2.png');
  bigCursor = loadImage('image/bigCursor.png');
  noseImg = loadImage('image/nose.png');
  rightEyeImg = loadImage('image/rightEye.png');
  leftEyeImg = loadImage('image/leftEye.png');
  rightEarImg = loadImage('image/rightEar.png');
  leftEarImg = loadImage('image/leftEar.png');
  rightHandImg = loadImage('image/rightHand.png');
  leftHandImg = loadImage('image/leftHand.png');
  next = loadImage('image/right.png');
  back = loadImage('image/left.png');
  writeChoose = loadImage('image/write choose.png');
  gif1 = loadImage('gif/gif1.gif');
  gif2 = loadImage('gif/gif2.gif');
  rightHand_pre = loadImage('image/rightHand-pre.png');
  leftHand_pre = loadImage('image/leftHand-pre.png');
  rightHandCheck = loadImage('image/rightHandCheck.png');
  leftHandCheck = loadImage('image/leftHandCheck.png');
  face = loadImage('image/face.png');
  faceCheck = loadImage('image/faceCheck.png');
  p_eye = loadImage('image/P_Eye.png');
  p_rightEar = loadImage('image/P_rightEar.png');
  p_leftEar = loadImage('image/P_leftEar.png');
  radius = loadImage('image/radius.png');
  wall = loadImage('image/wall.png');
  logo = loadImage('image/logo.png');
  deco = loadImage('image/decorate.png');
}


function setup() {
  //device
  device = isInPhone();
  console.log(device);

  // if(device == false){
  //   //電腦
  // }else{
  //   //手機
  // }
  checkWidth();

  let canvasDiv = document.getElementById('myCanvas');
  Width = canvasDiv.offsetWidth;
  console.log(Width);
  
  let myCanvas2 = createCanvas(Width, Width);
  myCanvas2.parent("myCanvas");
  
  //-------- mainPage ------------------------
  manHandL.resize(152*0.4*picResize, 176*0.4*picResize);
  manHandR.resize(137*0.4*picResize,159*0.4*picResize);
  manHead.resize(457*0.4*picResize,315*0.4*picResize);
  bigCursor.resize(598*0.42*picResize, 408*0.42*picResize);
  deco.resize(1161*0.39*picResize, 211*0.39*picResize);
  manHR = createVector();
  manHL = createVector();
  manHD = createVector();

  //-------- 金句選擇part ------------------------
  writeChoose.resize(622*0.2*picResize,582*0.2*picResize);
  senNum = 0; //一開始金句是第一句

  //生成色票位置
  for(let i = 0; i < 10; i++){
    colorBall.push(new Vertex(random(-width/2+50, -width/2+50 + width-100), 130))
  }
  //-------- 金句選擇part ------------------------


  //-------- 說明part ------------------------
  gif1.resize(324*1.2*picResize, 356*1.2*picResize);
  gif2.resize(324*1.2*picResize, 356*1.2*picResize);
  //-------- 說明part ------------------------

  rightHand_pre.resize(592*0.2*picResize, 660*0.2*picResize);
  leftHand_pre.resize(592*0.2*picResize, 660*0.2*picResize);
  rightHandCheck.resize(592*0.2*picResize, 660*0.2*picResize);
  leftHandCheck.resize(592*0.2*picResize, 660*0.2*picResize);
  face.resize(997*0.2*picResize, 840*0.2*picResize);
  faceCheck.resize(997*0.2*picResize, 840*0.2*picResize);

  p_eye.resize(325*0.1*picResize, 401*0.1*picResize);
  p_leftEar.resize(226*0.1*picResize, 343*0.1*picResize);
  p_rightEar.resize(226*0.1*picResize, 343*0.1*picResize);

  radius.resize(Width, Width);
  wall.resize(Width, Width);
  logo.resize(235*0.35*picResize, 71*0.35*picResize);

  // print(windowWidth);
  // print(windowHeight);
  
  imageMode(CENTER);
  textAlign(CENTER,CENTER);
  
  nums.push(new Num(0, 0, noticeNum, 40));
  countLetter = document.getElementById("countNumber");
  countNum = document.getElementById("number");

  //身體點的位置
  leftHand = createVector(0,0);
  rightHand = createVector(0,0);
  nose = createVector(0,0);
  leftEye = createVector(0,0);
  rightEye = createVector(0,0);
  leftEar = createVector(0,0);
  rightEar = createVector(0,0);
  //翻轉矯正
  leftHand_F = createVector(0,0);
  rightHand_F = createVector(0,0);
  nose_F = createVector(0,0);
  leftEye_F = createVector(0,0);
  rightEye_F = createVector(0,0);
  leftEar_F = createVector(0,0);
  rightEar_F = createVector(0,0);
  
  iconSize = 50*picResize;
  
  //一開始的圖卡
  mission[0] = random(allPoint);//隨機部位
  //print(mission[0]);
  //左右手位置限制
  if(mission[0] == "右手"){
    missionX = random(width/2, width-iconSize);
    missionY = random(iconSize, height-iconSize);
    //print('right');
  }else if(mission[0] == "左手"){
    missionX = random(iconSize, width/2);
    missionY = random(iconSize, height-iconSize);
    //print('left');
  }else if(mission[0] != "左手" && mission[0] != "右手"){
    missionX = random(iconSize, width-iconSize);
    missionY = random(iconSize, height-iconSize); 
    //print('another');
  }
  
  mission_max = 1; //幾個部位
  //一開始的關卡
  level0 = true;
  levelNum = 0;
  
  
  brush_set(); //brush_1
  bigSpray_set(); //brush_2
  light_set(); //brush_4
  darkbrush_set(); //brush_5
  
  //layerGraphics
  brushLayer = createGraphics(width,height);
  brushLayer2 = createGraphics(width,height);
  brushLayer3 = createGraphics(width,height); 
  brushLayer4 = createGraphics(width,height); 
  brushLayer5 = createGraphics(width,height); 
  

  //-------- name ------------------------
  namePosition = createVector(random(width/2-80,width/2+80), random(height/2-80, height/2+80));
  // px = namePosition.x;

  //-------- name ------------------------

  
  //圖卡
  noseImg.resize(80*picResize, 80*picResize);
  rightEyeImg.resize(80*picResize, 80*picResize);
  leftEyeImg.resize(80*picResize, 80*picResize);
  rightEarImg.resize(80*picResize, 80*picResize);
  leftEarImg.resize(80*picResize, 80*picResize);
  rightHandImg.resize(80*picResize, 80*picResize);
  leftHandImg.resize(80*picResize, 80*picResize);

}

function draw() {
  htmlevent();

  if(startScene){
    background(0);
    push();
    translate(width/2, height/2);
    imageMode(CENTER);
    textAlign(CENTER,CENTER);
    textFont(Mostwasted);
    fill("#4a67f5");
    textSize(90*picResize);
    text('blue monday', 0, 0);

    manHR.y = map(mouseX, 0, width, -80, -120);
    manHL.y = map(mouseX, 0, width, -120, -80);


    image(manHandL, -130+mouseY*0.01, manHL.y);
    image(manHandR, 130-mouseY*0.02, manHR.y);
    image(manHead, 0, -110-mouseY*0.01+mouseX*0.01);
    image(bigCursor,30, 140*picResize);
    image(deco, 0+mouseX*0.001, 16+mouseY*0.001);
    
    pop();

  }else if(chooseScene){
    choose();

  }else if(introScene){
    intro();
  }else if(introScene_2){
    intro2();
  }else if(playScene){
    playGame();
    level();
    image(radius, width/2, height/2);
  }else if(nameScene){
    NameTheDraw();
  }

  if(showCredit){
    push();
    translate(width/2, height/2);
    rectMode(CENTER);
    noStroke();
    fill(0);
    rect(0, 0, width, height); //bg
    noStroke();
    fill("#c9dc57");
    rect(0, 0, 350*picResize, 350*picResize);

    textAlign(CENTER, CENTER);
    textFont(Myriad);
    noStroke();
    fill(0);
    textSize(26*picResize);
    text(CreditCard.title, 0,  -height/2 + 100*picResize);

    textAlign(LEFT, CENTER);
    textSize(21*picResize);
    let gap = 50*picResize;
    text(CreditCard.producer.title, -width/2 + 100*picResize, -height/2 + 180*picResize);
    text(CreditCard.kid.title, -width/2 + 100*picResize, -height/2 + 180*picResize + gap);
    text(CreditCard.dodo.title1, -width/2 + 100*picResize, -height/2 + 180*picResize + gap * 2);
    text(CreditCard.dodo.title2, -width/2 + 100*picResize, -height/2 + 180*picResize + gap * 3);

    text(CreditCard.producer.name, 35*picResize, -height/2 + 180*picResize);
    text(CreditCard.kid.name, 35*picResize, -height/2 + 180*picResize + gap);
    text(CreditCard.dodo.name, 35*picResize, -height/2 + 180*picResize + gap * 2);
    text(CreditCard.dodo.name, 35*picResize, -height/2 + 180*picResize + gap * 3);
    pop();
  }
  
  if(mission.length > mission_max){
    mission.splice(0,1);
  }
  if(mission2.length > mission_max){
    mission2.splice(0,1);
  }
}

function windowResized() {
  checkWidth();
}