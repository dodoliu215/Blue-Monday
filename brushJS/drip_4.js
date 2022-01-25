class Drip_4 {
  constructor(x, y, size, col) {
    this.x = x;
    this.y = y;
    this.size = size;
	  this.final = size/20;
    this.color = col;
  }
  move(){

    this.y+=0.6;
    if(this.size>this.final) this.size*=.98;
    
    
  }
  
  show(){
    push();
    brushLayer4.noStroke();
    brushLayer4.fill(this.color);
    brushLayer4.ellipse(this.x, this.y, this.size, this.size);
    pop();
  }
}