function isTouching(m, b){
    //m and b are the formal parameters
    if((m.x - b.x < m.width/2 + b.width/2) &&
    (b.x - m.x < m.width/2 + b.width/2) && 
    (m.y-b.y < m.height/2 + b.height/2) &&
    (b.y - m.y < m.height/2 + b.height/2)){
  return true;
  }  
  else{
    return false;
  }
  }
  
  function bounceOff(b, f){
  if((b.x - f.x < b.width/2 + f.width/2) &&
    (f.x - b.x < b.width/2 + f.width/2)){
      b.velocityX = b.velocityX * (-1);
    }
    if((b.y - f.y < b.height/2 + f.height/2) &&
    (f.y - b.y < b.height/2 + f.height/2)){
      b.velocityY = b.velocityY * (-1);
    }
  }