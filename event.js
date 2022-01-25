let startbtn, okbtn, nextbtn;
let smallTitle;

let name_div, finishbtn;
let countLetter, raiseNotice;
let countNum;

//save & restart
let creditText, creditCenter;
let savebtn, restartbtn;
let showCredit = false;
let W;

function htmlevent(){

  //credit hover
  creditText = document.querySelector("#showcredit");
  creditCenter = document.querySelector("#showcredit_cen");
  creditText.addEventListener("mouseover", function(){
    showCredit = true;
  })
  creditText.addEventListener("mouseout", function(){
    showCredit = false;
  })
  creditCenter.addEventListener("mouseover", function(){
    showCredit = true;
  })
  creditCenter.addEventListener("mouseout", function(){
    showCredit = false;
  })
  
  changelogo = document.querySelector("#changelogo");
  changelogo_cen = document.querySelector("#changelogo_cen");

  changelogo.addEventListener("mouseover", function(){
    changelogo.setAttribute('src',"image/blnd_logo_hover.png");
  })
  changelogo.addEventListener("mouseout", function(){
    changelogo.setAttribute('src',"image/blnd_logo.png");
  })
  changelogo_cen.addEventListener("mouseover", function(){
    changelogo_cen.setAttribute('src',"image/blnd_logo_hover.png");
  })
  changelogo_cen.addEventListener("mouseout", function(){
    changelogo_cen.setAttribute('src',"image/blnd_logo.png");
  })

  //save
  savebtn = document.getElementById("savebtn");
  //restart
  restartbtn = document.querySelector("#restartbtn");

  //隱藏下面bottom
  creditDiv = document.querySelector("#creditDiv");
  creditDiv_center = document.querySelector("#credit_center");
  projectNameDiv = document.querySelector("#projectName");
  projectNameDiv_center = document.querySelector("#projectName_center");

  //一開始的startbtn
  startbtn = document.querySelector('#startbtn');
  startbtn.addEventListener("click", function(){
    chooseScene = true;
    startbtn.style.display = "none";
    okbtn.style.display = "inline-flex";
  })

  if(device == false){
    startbtn.addEventListener("mouseover", function(){
      startbtn.setAttribute('src',"image/start_hover.png");
    })
    startbtn.addEventListener("mouseout", function(){
      startbtn.setAttribute('src',"image/start.png");
    })
  }else if(device){
    startbtn.addEventListener("touchstart", function(){
      startbtn.setAttribute('src',"image/start_hover.png");
    })
  }

  W = window.innerWidth;

  if(chooseScene){
    creditDiv_center.style.visibility = "hidden";
    projectNameDiv_center.style.visibility = "hidden";
    creditDiv.style.visibility = "hidden";
    projectNameDiv.style.visibility = "hidden";
  }

  okbtn = document.querySelector('#okbtn');
  okbtn.addEventListener("click", function(){
    introScene = true;
    okbtn.style.display = "none";
    nextbtn.style.display = "inline-flex";
    send_GS();
  })
  if(device == false){
    okbtn.addEventListener("mouseover", function(){
      okbtn.setAttribute('src',"image/ok_hover.png");
    })
    okbtn.addEventListener("mouseout", function(){
      okbtn.setAttribute('src',"image/ok.png");
    })
  }else if(device){
    okbtn.addEventListener("touchstart", function(){
      okbtn.setAttribute('src',"image/ok_hover.png");
    })
  }

  //introScene，說明的nextbtn
  smallTitle = document.getElementById("smallTitle");
  nextbtn = document.querySelector('#nextbtn');
  raiseNotice = document.querySelector('#raiseNotice');

  if(introScene){
    smallTitle.style.visibility = "visible";
  }

  nextbtn.addEventListener("click", function(){
    if(introScene){
      introScene_2 = true;

    }else if(introScene_2){
      nextbtn.style.display = "none";
      playScene = true;
      openCamToggle = true;
    }
  })
  
  if(device == false){
    nextbtn.addEventListener("mouseover", function(){
      nextbtn.setAttribute('src',"image/nextbtn_hover.png");
    })
    nextbtn.addEventListener("mouseout", function(){
      nextbtn.setAttribute('src',"image/nextbtn.png");
    })
  }else if(device){
    nextbtn.addEventListener("touchstart", function(){
      nextbtn.setAttribute('src',"image/nextbtn_hover.png");
    })
    nextbtn.addEventListener("touchend", function(){
      nextbtn.setAttribute('src',"image/nextbtn.png");
    })
  }


  countLetter = document.querySelector("#countNumber");
  countNum = document.querySelector("#number");


  if(playScene){
  //camera 準備中 && 舉起手
    if(prepareCam == false){
      subtitle.innerText="攝影機準備中...";
    }else{
      subtitle.innerText="";
      raiseNotice.style.display = "inline-flex";
    }

    if(level0_1){
      countLetter.style.display = "block";
      raiseNotice.style.display = "none";
    }

    if(level1 || level2 || level3 || level4 || level5){
      countNum.innerText = timer;
      raiseNotice.style.display = "none";
    }
    if(timer <= 10){
      countLetter.style.backgroundImage = 'url(image/countLetter-5.png)';
      countNum.style.color = "#ffffff";
    }
  }

  name_div = document.getElementById("name_Div");
  finishbtn = document.querySelector("#finishbtn");
  finishbtn.addEventListener("click", function(){
    endScene = true;
    noticeWord = false;
  })

  if(nameScene){
    countLetter.style.display = "none";
    smallTitle.style.color = "#ffffff";
    name_div.style.display = "contents";
    finishbtn.style.display = "initial";
  }

  if(endScene){
    moveName = false;
    noticeWord = false;
    name_div.style.display = "none";
    finishbtn.style.display = "none";
    savebtn.style.display = "inline-flex";
    restartbtn.style.display = "inline-flex";

    if(W < 730){
      creditDiv_center.style.visibility = "visible";
      projectNameDiv_center.style.visibility = "visible";
      creditDiv.style.visibility = "hidden";
      projectNameDiv.style.visibility = "hidden";
    }else{
      creditDiv.style.visibility = "visible";
      projectNameDiv.style.visibility = "visible";
      creditDiv_center.style.visibility = "hidden";
      projectNameDiv_center.style.visibility = "hidden";
    }
  }


    if(chooseScene){
      startScene = false;
    }
    if(introScene){
      chooseScene = false;
    }
    if(introScene_2){
      introScene = false;
    }
    if(playScene){
      introScene_2 = false;
    }
    if(nameScene){
      playScene = false;
    }
}

function SaveTheDraw(){
  console.log('save');
  // save(myCanvas2, 'myCanvas.jpg');
  saveCanvas(myCanvas2, 'myDraw.jpg');
}

function backMain(){
  window.location.reload();
}

function blndWeb(){
  window.open('https://www.blnd.tw/', 'BLND');
}