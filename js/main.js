const game_over = document.querySelector(".gameOver");
const upButton = document.querySelector(".up");
const downButton = document.querySelector(".down");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const restartButton = document.querySelector(".restart");
const levels = document.querySelector(".levels");
const btn2 = document.querySelector(".btn");
btn2.addEventListener("click", function() {
 levels.classList.remove('remove');
});

var blockSize = 25;
var rows =20;
var cols =20;
var board;
var context;

var snakeX = blockSize * 5 ;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;


var snakeBody = [];



var foodX ;
var foodY ;

var food = 0;
var level = 2;


var gameOver = false;








window.onload = function()
{
  board = document.getElementById('board');
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext("2d");


  placeFood();
  document.addEventListener("keydown",changeDirection);

 setInterval(update , 100);

}






function update()
{
    if(gameOver)
    {
        return;
    }
  
  context.fillStyle = '#2c324b';
  context.fillRect(0,0,board.width,board.height);

  
 context.fillStyle = "red";
 context.fillRect(foodX,foodY,blockSize,blockSize);
 

 if(snakeX == foodX  && snakeY == foodY)
 {


    snakeBody.push([foodX,foodY]);
    snakeBody.push([foodX+1,foodY+1]);
    snakeBody.push([foodX+2,foodY+2]);
    placeFood();
    food++;
  for(let i =3 ; i<=food;i+=3)
{

  if(i===food)
  {
    if(level !== 5 || level !== 10 || level !== 15)
    {
      levels.innerHTML = "Level "+level+"``FASTER SNAKE EVER``🐍🐍   ";
    }
    if(level === 5)
    {
  
      levels.innerHTML = "Level "+level +"\t"+"New Title↪ 🌟The Master🌟    "; 
    }
    else if(level === 10)
    {
      levels.innerHTML = "Level "+level +"\t"+"New Title↪  👑 The King Of Snake Game 👑  ";
      levels.style.backgroundColor = "red";
    }
    else if(level === 15)
    {
      levels.innerHTML = "Level "+level +"\t"+" Well done👏 , warrior 🐍 , 🌟 🌟 you are one of the few who finished the game 🌟 🌟  ";
    }
    level++;
  }

}
 
 }

 context.fillStyle = "orange";

  snakeX += velocityX * (blockSize);
  snakeY += velocityY * (blockSize);
 


 context.fillRect(snakeX,snakeY,blockSize,blockSize);
 
 for(let i = 0 ; i<snakeBody.length; i++)
 {
    context.fillRect(snakeBody[i][0],snakeBody[i][1],blockSize,blockSize);
 }
 restartButton.addEventListener("click", function() {
    restart();
  });
 
 for(let i =snakeBody.length - 1 ; i>0; i--)
 {
    snakeBody[i] = snakeBody[i-1];
 }

 if(snakeBody.length){
    snakeBody[0] = [snakeX , snakeY];
 }


  if(snakeX < 0 || snakeX > cols*blockSize 
    || snakeY< 0 || snakeY > rows*blockSize )  
    {
        gameOver = true;  
        game_over.style.display = "inline";
        
       
    }
  
    for(let i = 1; i<snakeBody.length; i++)
    {
        if(snakeX == snakeBody[i][0]&& snakeY == snakeBody[i][1])
        {
            gameOver = true;   
           game_over.style.display = "inline";
           
           
       }
    }
  


}





function changeDirection(event)
{
    if(event.code == "ArrowUp"  && velocityY!=1)
    {
        
        velocityX= 0;
        velocityY= -1;
    }
    if(event.code == "ArrowDown"&& velocityY!= -1)
    {
        
        velocityX= 0;
        velocityY= 1;
    }
    if(event.code == "ArrowLeft" && velocityX!=1)
    {
      
        velocityX= -1;
        velocityY= 0 ;
    }
    if(event.code == "ArrowRight" && velocityX!=-1)
    {
       
        velocityX= 1;
        velocityY= 0;
    }
}


function placeFood()
{
    foodX = Math.floor(Math.random()*cols) * blockSize;
    foodY = Math.floor(Math.random()*rows) * blockSize;
}
upButton.addEventListener("click", function() {
    if(velocityY!=1)
    {
        velocityX= 0;
       velocityY= -1;
    }
 
  });
  
  downButton.addEventListener("click", function() {
    if(velocityY!= -1)
    {
        velocityX= 0;
        velocityY= 1;
    }
    
  });
  
  leftButton.addEventListener("click", function() {
    if(velocityX!=1)
    {
        velocityX= -1;
        velocityY= 0 ;
    }
   
  });
  
  rightButton.addEventListener("click", function() {
    if(velocityX!= -1)
    {
        velocityX= 1;
       velocityY= 0;
    }
  
  });
function restart() {
    
    gameOver = false;
    snakeBody = [];
    snakeX = blockSize * 5;
    snakeY = blockSize * 5;
    velocityX = 0;
    velocityY = 0;
    placeFood();
    level = 2;
    levels.innerHTML = "Level 1";
    game_over.style.display = "none";
  
    
    update();
  }
