//posenet
let video;
let poseNet;
let poses = []; //人數
let leftHand,rightHand, nose, leftEye, rightEye, leftEar, rightEar;
let rightHand_F, leftHand_F, nose_F, leftEye_F, rightEye_F, leftEar_F, rightEar_F; //翻轉位置

let takeface = false;
let prepareCam = false;

function openCamera(){
  video = createCapture(VIDEO);
  video.size(width,height);
  poseNet = ml5.poseNet(video,'single', modelReady); //single單人，拿掉是多人
  poseNet.on('pose', function(results) {
    poses = results;
  });
  video.hide();

  openCamToggle = false;
}


function modelReady() {
  print('Model Loaded');
  prepareCam = true;
}


function drawKeypoints()  {
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      let keypoint = pose.keypoints[j];
      if (keypoint.score > 0.2) {
        //score > 0.2過濾雜點
        if(j == 0){
          nose.x = keypoint.position.x;
          nose.y = keypoint.position.y;
        }
        if(j == 1){
          leftEye.x = keypoint.position.x;
          leftEye.y = keypoint.position.y;
        }
        if(j == 2){
          rightEye.x = keypoint.position.x;
          rightEye.y = keypoint.position.y;
        }
        if(j == 3){
          leftEar.x = keypoint.position.x;
          leftEar.y = keypoint.position.y+20;
        }
        if(j == 4){
          rightEar.x = keypoint.position.x;
          rightEar.y = keypoint.position.y+20;
        }
        if(j == 9){
          leftHand.x = keypoint.position.x;
          leftHand.y = keypoint.position.y-70;
        }
        if(j == 10){
          rightHand.x = keypoint.position.x;
          rightHand.y = keypoint.position.y-70;
        }
        //數值取出來再做事情
      }
    }
  }

  //翻轉矯正 點對點
  leftHand_F.x = width - leftHand.x;
  leftHand_F.y = leftHand.y;
  
  rightHand_F.x = width - rightHand.x;
  rightHand_F.y = rightHand.y;
  
  nose_F.x = width - nose.x;
  nose_F.y = nose.y;
  
  leftEye_F.x = width - leftEye.x;
  leftEye_F.y = leftEye.y;
  
  rightEye_F.x = width - rightEye.x;
  rightEye_F.y = rightEye.y;

  leftEar_F.x = width - leftEar.x;
  leftEar_F.y = leftEar.y;
  
  rightEar_F.x = width - rightEar.x;
  rightEar_F.y = rightEar.y;

  if(takeface){
    image(p_eye, rightEye_F.x, rightEye_F.y);
    image(p_eye, leftEye_F.x, leftEye_F.y);
    image(p_rightEar, rightEar_F.x, rightEar_F.y);
    image(p_leftEar, leftEar_F.x, leftEar_F.y);
      
    fill(255, 130);
    noStroke();
    ellipse(nose_F.x, nose_F.y, 25, 25);
  }


  noFill();
  stroke(255, 130);
  strokeWeight(5);
  ellipse(leftHand_F.x, leftHand_F.y, 40, 40);
  ellipse(rightHand_F.x, rightHand_F.y, 40, 40);

}