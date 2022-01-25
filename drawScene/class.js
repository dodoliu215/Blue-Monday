class Vertex{
    constructor(x, y){
    this.x = x;
    this.y = y;
    }
}

class Num{
    constructor(x, y, number, textSize){
      this.x = x;
      this.y = y;
      this.number = number;
      this.s = textSize;
    }
  
    update(){
        this.s += 5;
    }
  
    draw(){
      push();
      textAlign(CENTER, CENTER);
      translate(width/2, height/2);
      textFont(aaa);

      if(this.number == 0){
        fill(0);
        textSize(this.s * picResize);
        text("let's go!", this.x, this.y);
      }else{
        fill(0);
        textSize(this.s * picResize);
        text(this.number, this.x, this.y);
      }

      pop();
    }
}

const CreditCard = {
    title: "credit",
    producer: {
        name: "BLND",
        title: "Producer"
    },
    kid: {
        name: "Tsai, Bing-Hua",
        title: "Art Director"
    },
    dodo: {
        name: "Liu, Yen-Tung",
        title1: "Web Develope",
        title2: "Visual Design"
    }
}