timer=20;

let isLoopActive=true;
let width= 600
let height=600

function centerCanvas() {
    var x = ((windowWidth - width) / 2)+100;
    var y = ((windowHeight - height) / 2)+50;
    cnv.position(x, y);
  }
  

function setup() {
    cnv= createCanvas(width, height);
    background('white');
    centerCanvas();
}


function draw(){
    
    noStroke();
    fill(random(255), random(255), random(255), random(255));
    ellipse(random(windowWidth), random(windowHeight), random(100));
    timePassed();
}

function timePassed(){
    print(timer);
    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer --;
      }

      else if (timer== 15) {
        textSize(30);
        fill('black');
        let text1= text("Have you tried clicking?", 60, 80);
        text1;
      }


      else if (timer == 11) {
        textSize(30);
        fill('black');
        let text2= text("What about dragging?", width/2, height*0.7);
        text2;
      }

    }
  
 function heart(x,y,size) {
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y +     size);
    bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    endShape(CLOSE);
  }

function mouseDragged() {
  fill('black');
  ellipse(mouseX, mouseY, 20, 20);
  // prevent default
  return false;
}

function mousePressed() {
    fill(255,25,25);
    heart(mouseX, mouseY, random(100));
  }

  function keyPressed() {
  if(keyCode==84){
    clear();
    background('white');
    timer=1000000000000000000000000000;
  }
    
    if(keyCode==32){
    if(isLoopActive===true){
      noLoop();
      isLoopActive=false;
    }
    else{
      loop();
      isLoopActive=true;
    }
  }  

}

    
  

