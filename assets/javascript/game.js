//<-----USE CASES----->
//#1. User loads page
//-->number between 19 and 120 randomly selected and displayed
//-->wins and losses are updated and total score is reset to 0
//#2. User clicks one of the four crystals
//-->the value of the crystal for this round is added to the User's score
//-->user continues clicking crystals until user score equals number to match or goes over
//user score equals number to match, increase wins by 1
//user score goes over number to match, increase losses by 1

//<-----VARIABLES----->
//declared on page load
var userScore = 0;
var numberToMatch; //number selected from numberBank, needs to be set between 19-120
//crystal values
//counters to keep track of wins and losses
var wins = 0;
var losses = 0;
//object to hold each crystal
var crystals = [
    {
        img: "assets/images/citrine.jpg",
        name: "citrine",
        value: 0
    },
    {
        img: "assets/images/emerald.jpg",
        name: "emerald",
        value: 0
    },
    {
        img: "assets/images/garnet.jpg",
        name: "garnet",
        value: 0
    },
    {
        img: "assets/images/sapphire.jpg",
        name: "sapphire",
        value: 0
    }]


//<-----FUNCTIONS----->
// function responsible for handling dynamic events on page load
// restarts the game when the user wins or loses
// function reset(){
// randomly chooses a number
// Math.floor and math.random function to randomly choose numberToMatch
$(document).ready(function () {

    function reset() {
        wins;
        losses;
        userScore = 0;
        numberToMatch = Math.round((Math.random() * 120) + 19);
        console.log(numberToMatch);
        //print numberToMatch to screen
        $("#random").text(numberToMatch);
        }

    //function to give each crystal a random value between 1-12 each time the page is loaded
    function makeCrystalScores() {
        for (var i = 0; i < 4; i++) {
            var crystal = Math.round((Math.random() * 12) + 1);
            crystals[i].value = crystal;
        }
    }

    //function to create crystal images and append them to the page
    function makeCrystalButtons () {
        for (var i = 0; i < 4; i++) {
            var crystalImage = $("<img>")
            crystalImage.attr("src", crystals[i].img)
            crystalImage.attr("value", crystals[i].value)
            crystalImage.addClass("crystal")
            $("#crystals").append(crystalImage)
        }
    }

    //function for when userScore matches numberToMatch
    function winner () {
        wins++;
        $("#wins").text(wins);
        $("#message").text("You Win!!!");
        reset();
    }

    //function for when userScore is greater than numberToMatch
    function loser () {
        losses++;
        $("#losses").text(losses);
        $("#message").text("You Lose!");
        reset();
    }

    //call the makeCrystalScores and makeCrystalButtons functions
    function setUpBoard () {
        makeCrystalScores();
        makeCrystalButtons();
    }

    //use jquery to make the images function as buttons
    setUpBoard();
    $("#crystals").on("click", "img", function(){
        console.log(this);
        var valueOfSelectedCrystal = $(this).attr("value");
        console.log(valueOfSelectedCrystal);
        //parseInt function to convert valueOfSelectedCrytal from string to integer
        valueOfSelectedCrystal = parseInt(valueOfSelectedCrystal);
        userScore = userScore + valueOfSelectedCrystal;
        console.log(userScore);
        console.log(numberToMatch);
        //print userScore to screen
        $("#score").text(userScore);

            //if/else statements
            //if userScore equals numberToMatch, wins++
            if (userScore === numberToMatch) {
                winner ();
                reset();
            }
            
            //if userScore is higher than numberToMatch, losses++
            if (userScore > numberToMatch) {
                loser ();
                reset();
            }

        });

        //when user wins or loses, reset numberToMatch and crystal variables and userScore
        //push those reset variables to HTML
    reset();
});