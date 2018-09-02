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
var userScore;
var numberToMatch; //number selected from numberBank, needs to be set between 19-120
//crystal values
var citrineValue; //needs to be set between 1-12
var emeraldValue; //needs to be set between 1-12
var garnetValue; //needs to be set between 1-12
var sapphireValue; //needs to be set between 1-12
//counters to keep track of wins and losses
var wins;
var losses;

//<-----FUNCTIONS----->
// function responsible for handling dynamic events on page load
// restarts the game when the user wins or loses
// function reset(){
  // randomly chooses a number
    // Math.floor and math.random function to randomly choose numberToMatch
    $(document).ready(function() {

    function reset() {
        wins = 0;
        losses = 0;
        userScore = 0;
        var numberToMatch = Math.round((Math.random() * 120) + 19);
        console.log(numberToMatch);
    // Math.floor and Math.random function to randomly choose crystal value
        var citrineValue = Math.round((Math.random() * 12) + 1);
        console.log(citrineValue);
        var emeraldValue = Math.round((Math.random() * 12) + 1);
        console.log(emeraldValue);
        var garnetValue = Math.round((Math.random() * 12) + 1);
        console.log(garnetValue);
        var sapphireValue = Math.round((Math.random() * 12) + 1);
        console.log(sapphireValue);

        //print numberToMatch to screen using randomNumber id
        $("#random").text(numberToMatch);
        //print userScore to screen
        $("#score").text(userScore);

        //if/else statements
        //if userScore equals numberToMatch, wins++
        if (userScore === numberToMatch) {
            wins++;
            $("#wins").text(wins);
            //display "you win"
        }

        //if userScore is higher than numberToMatch, losses++
        if (userScore > numberToMatch) {
            losses++;
            $("#losses").text(losses);
            //display "you lose"
        }

//<-----EVENT LISTENERS----->
        //clicking on crystal button adds the value of the crystal button to userScore (on-click event)
        //$("#crystal").______(userScore);
        //when user wins or loses, reset numberToMatch and crystal variables and userScore
            //push those reset variables to HTML

        
}
    reset();
})    