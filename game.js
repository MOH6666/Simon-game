var gamePattern = [];
var userClickedPattern = [];
var buttonColour = ["red", "blue", "green", "yellow"];
var level = 0;


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);


    var randomChosenColour = buttonColour[randomNumber];

    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
    $("h1").text("level " + level)
    level++;




}

$("div.btn").click(function(event) {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);


})


function playSound(name) {
    var sound = new Audio("sounds/" + name + ".mp3")
    sound.play();


}

function animatePress(currentColor) {
    // $("div"+"#"+currentColor).addClass("pressed").delay(100).queue(function(){
    //     $(this).removeClass("pressed");
    // },100)}
    $("div" + "#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("div" + "#" + currentColor).removeClass("pressed");
    }, 100);
};
var done = false;
$(document).keydown(function(event) {
    if (done === false) {
        $("h1").text("level 0")

        done = true;
        nextSequence();


    }
});
$("div.btn").click(function() {
    var number =userClickedPattern.length
     number= number - 1;
    checkAnswer(number);
});


function checkAnswer(currentLevel) {

        if (userClickedPattern.length === gamePattern.length && userClickedPattern[currentLevel] === gamePattern[currentLevel]){
            setTimeout(function() {

                nextSequence();
            }, 1000);
            userClickedPattern=[];}
            else if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
                console.log("success")
            }




        else {
            console.log("wrong");
            $("body").addClass("game-over");
            setTimeout(function() {
                $("body").removeClass("game-over");
            }, 200);
            $("h1").text("Game Over, Press Any Key to Restart");
            userClickedPattern=[];
            startOver();


        }}



function startOver() {
    level = 0;
    done = false;
    gamePattern = []
}
