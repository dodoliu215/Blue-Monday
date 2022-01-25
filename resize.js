let device; //判斷是電腦還是手機
let picResize;

const isInPhone = () => {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      return true     //手機
  } else {
      return false    //電腦
  }
}

function checkWidth(){
    console.log('cool')
    let w = window.innerWidth;
    let h = window.innerHeight;
    console.log("w:"+ w);

    if(w < 450){
        const root = document.documentElement;
        root.style.setProperty('--canvasWidth', `${w}px`);
        picResize = w / 450;
        //調整btn大小
        root.style.setProperty('--btnResize', picResize);
        
    }else{
        const root = document.documentElement;
        root.style.setProperty('--canvasWidth', `450px`);
        picResize = 1;
    }
}
