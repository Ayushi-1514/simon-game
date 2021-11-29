var buttonColor= ["red","blue","green","yellow"];
var gamePattern=[];
var userPattern= [];
var t=0;
function sound(input){
switch (input) {
  case "red":
  var audio=new Audio("sounds/red.mp3");
  audio.play();
  break;

  case "blue":
  var audio=new Audio("sounds/blue.mp3");
  audio.play();
  break;

  case "green":
  var audio=new Audio("sounds/green.mp3");
  audio.play();
  break;

  case "yellow":
  var audio=new Audio("sounds/yellow.mp3");
  audio.play();
  break;

  default:
  var audio=new Audio("sounds/wrong.mp3");
  audio.play();

}
}
function nextSequence(){
  t=0;
  var x= Math.floor(Math.random()*4);
  var randomColor= buttonColor[x];
  gamePattern.push(randomColor);
  console.log(gamePattern);
  var y="#"+randomColor;
  $(y).fadeOut(100).fadeIn(100);
sound(randomColor);
var l= "Level "+ gamePattern.length;
$("h1").text(l);
}
$(document).one("keypress",nextSequence);

$(".btn").click(function(event){

  var buttonId= event.target.id;
  userPattern.push(buttonId);
  console.log(userPattern);
  z="#"+buttonId;
  $(z).addClass("pressed");
  setTimeout(function(){
    $(z).removeClass("pressed");
  },100);
  sound(buttonId);
  for(var j=0;j<userPattern.length;j++){
    if(userPattern[j]!=gamePattern[j])
     gameOver();

  }
  if(t===0){
    if(userPattern.length=== gamePattern.length){
    if (checkAnswer()==="true") {
      setTimeout(nextSequence,1000);
      userPattern=[];
    }
    else
    gameOver();
  }



}

});

function checkAnswer(){
  var count=0;

  for(var i=0;i<userPattern.length;i++){
    if(userPattern[i]===gamePattern[i])
     count=count+1;


  }
  if(count===userPattern.length)
  return "true";
  else
  return "false";
}


function gameOver(){
  $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
      setTimeout(function(){
        $("body").removeClass("game-over");
      }, 200);
      var wrong= new Audio("sounds/wrong.mp3");
      wrong.play();
      $(document).one("keypress",nextSequence);
      userPattern=[];
      gamePattern=[];
      t=1;

}
