var dog;
var dogImg, dogImg1;
var database;
var foodStock, foodS;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  database = firebase.database();

  dog = createSprite(250,450);
  dog.addImage(dogImg);
  dog.scale = 0.15;

  foodStock = database.ref('food');
  foodStock.on("value", (data)=>{
    foodS = data.val();
  });


}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }
  
  drawSprites();
  
  fill(255);
  stroke(0);
  text("Food Remaining "+ foodS, 170, 200)
  textSize(13);
  text("Press Up Arrow Key To Feed The Dog", 130, 10);


}

function writeStock(x) {
   
  if(x<=0) {
    x = 0;
  }
  else {
    x = x-1
  }
  database.ref('/').update({
    food:x
  })
}





















