let missionDist;
let mx, my, mx2, my2;
let rightDist = false;


function changeL2(){
  mission[0] = random(allPoint);//隨機部位
  
  if(mission[0] == "右手"){
    missionX = random(width/2, width-50);
    missionY = random(50, height-50);
    //print('right');
  }else if(mission[0] == "左手"){
    missionX = random(50, width/2);
    missionY = random(50, height-50);
    //print('left');
  }else if(mission[0] != "左手" && mission[0] != "右手"){
    missionX = random(50, width-50);
    missionY = random(50, height-50); 
  }
  levelNum++; //增加關卡
  goL2 = false;//關掉隨機位置
}



function changeL34(){
  if(rightDist == false){
    mission[0] = random(facePoint);//隨機部位
    mission2[0] = random(handPoint);
    
    missionX = random(50, width-50);
    missionY = random(50, height-50); 
    // print(mission.length);
    // print(mission2[0]);
    if(mission2[0] == "右手"){
      mission2_X = random(width/2, width-50);
      mission2_Y = random(50, height-50);
      //print('right');
    }else if(mission2[0] == "左手"){
      mission2_X = random(50, width/2);
      mission2_Y = random(50, height-50);
      //print('left');
    }

    mx = missionX;
    my = missionY;
    mx2 = mission2_X;
    my2 = mission2_Y;

    missionDist = dist(mx, my, mx2, my2);

    if( missionDist > 50 ){
      rightDist = true;
      levelNum++; //增加關卡
      goL34 = false;//關掉隨機位置
      
    }else{
      rightDist = false;
      goL34 = true;
    }

  }

}


function changeL5(){
  mission[0] = random(facePoint);//隨機部位
  mission2[0] = random(handPoint);
  
  missionX = random(50, width-50);
  missionY = random(50, height-50); 
  
  levelNum++; //增加關卡
  goL5 = false;//關掉隨機位置
}
