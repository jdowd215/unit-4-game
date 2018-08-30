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
var numberToMatch = []; //needs to be set between 19-120
var userScore = 0;
//crystal values
var citrineValue = []; //needs to be set between 1-12
var emeraldValue = []; //needs to be set between 1-12
var garnetValue = []; //needs to be set between 1-12
var sapphireValue = []; //needs to be set between 1-12
//counters to keep track of wins and losses
var wins = 0;
var losses = 0;

//<-----FUNCTIONS----->





//<-----EVENT LISTENERS----->



