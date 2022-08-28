var buttonColours= ["red","blue","green","yellow"];
var userClickedPattern = [];
var gamePattern = [];

var started = false;
var level = 0;

$(document).keypress(function(){
  if (!started){
    // $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    
  }

  

});


$(".btn").click (function(){
  var userChosenColour =$(this).attr("id");
  userClickedPattern.push(userChosenColour)
  
  playSound(userChosenColour);
  animatePress(userChosenColour);
  
  checkAnswer(userClickedPattern.length-1);
   
})

function nextSequence() {

  userClickedPattern = [];
    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
     
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
  }

   function checkAnswer(currentLevel){
  if (  gamePattern[currentLevel] ===userClickedPattern[currentLevel]){
      console.log("success");
      if (gamePattern.length ===userClickedPattern.length){
        setTimeout(function(){
          nextSequence();
        },1000);
      }

  }
  else{
    console.log("wrong")
    $("body").addClass("game-over")
    $("h1").text("Game over press any key to restart")
    playSound("wrong");
    


    setTimeout(function(){
      $("body").removeClass("game-over")
    },200)
    startOver();
  }

  }

 

function playSound (name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
    
    
}

function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
  
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  
  function startOver(){
    
    gamePattern = [];
    level = 0;
    started = false;
  }

    
























