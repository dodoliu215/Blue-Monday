class Drip_5 {
  constructor(x, y, size, col) {
    this.x = x;
    this.y = y;
    this.size = size;
	this.final = size/4;
    this.color = [col[0], col[1], col[2], 40];
  }
  move(){
    let t = 0;
    t++;
    
    if(t > 10){
     this.y = this.y;
    }else{
     this.y+=0.6;
    }
    
    if(this.size>this.final) this.size*=.98;
    
  }
  
  show(){
    push();
    brushLayer5.noStroke();
    brushLayer5.fill(this.color);
    brushLayer5.ellipse(this.x, this.y, this.size, this.size);
    pop();
  }
}