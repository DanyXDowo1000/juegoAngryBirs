class Piso {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Objetos.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      Mundo.add(mundoo, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(colorr);
      rect(pos.x, pos.y, this.width, this.height);
    }
  }