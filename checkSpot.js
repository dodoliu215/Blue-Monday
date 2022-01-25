function checkSpot_1(){
  // print('1:'+mission[0]);
  
  if(mission[0] == '鼻子'){
    bodyX = nose_F.x;
    bodyY = nose_F.y;
  }else if(mission[0] == '右眼'){
    bodyX = rightEye_F.x;
    bodyY = rightEye_F.y;
  }else if(mission[0] == '左眼'){
    bodyX = leftEye_F.x;
    bodyY = leftEye_F.y;
  }else if(mission[0] == '右耳'){
    bodyX = rightEar_F.x;
    bodyY = rightEar_F.y;
  }else if(mission[0] == '左耳'){
    bodyX = leftEar_F.x;
    bodyY = leftEar_F.y;
  }else if(mission[0] == '右手'){
    bodyX = rightHand_F.x;
    bodyY = rightHand_F.y;
  }else if(mission[0] == '左手'){
    bodyX = leftHand_F.x;
    bodyY = leftHand_F.y;
  }
  
  d = dist(bodyX, bodyY, missionX, missionY);
  
}


function checkSpot_2(){
  if(mission[0] == '鼻子'){
    bodyX = nose_F.x;
    bodyY = nose_F.y;
  }else if(mission[0] == '右眼'){
    bodyX = rightEye_F.x;
    bodyY = rightEye_F.y;
  }else if(mission[0] == '左眼'){
    bodyX = leftEye_F.x;
    bodyY = leftEye_F.y;
  }else if(mission[0] == '右耳'){
    bodyX = rightEar_F.x;
    bodyY = rightEar_F.y;
  }else if(mission[0] == '左耳'){
    bodyX = leftEar_F.x;
    bodyY = leftEar_F.y;
  }
  
  if(mission2[0] == '右手'){
    body2_X = rightHand_F.x;
    body2_Y = rightHand_F.y;
  }else if(mission2[0] == '左手'){
    body2_X = leftHand_F.x;
    body2_Y = leftHand_F.y;
  }
  
  if(levelNum == 3 || levelNum == 4){
    d = dist(bodyX, bodyY, missionX, missionY); 
    d2 = dist(body2_X, body2_Y, mission2_X, mission2_Y); 
    
  }else if(levelNum == 5){
    //調成都是與同一個點的距離
    d = dist(bodyX, bodyY, missionX+25, missionY); 
    d2 = dist(body2_X, body2_Y, missionX+25, missionY); 
  }
}
