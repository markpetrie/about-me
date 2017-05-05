
'use strict'

// ----- BEGIN -----

//GLOBAL VARIABLES
var correctAnswerCount = 0; // Used by question functions. Incremented with each correct answer.

//FUNCTION DECLARATIONS
function questionOne() {
    var questionOne = prompt('Would I spend my tax return on travel over a new laptop? [enter yes or no]');
    console.log('First question answer = ' + questionOne + '.');
    if (questionOne.toLowerCase() === 'y' || questionOne.toLowerCase() === 'yes') {
        correctAnswerCount = correctAnswerCount + 1; // increment correctAnswerCount
        alert('You\'re off to great start! It\'s like my old friend Hans always says, \"At rejse er at leve!\".');
    }
    else {
        alert('You\'re 0 for 1! I\'d much rather jump on a plane with my old laptop than be stuck at home with a new one.');
    }
}

//**********************
function questionTwo() {
    var questionTwo = prompt('Did I ever play competitive badminton? [enter yes or no]');
    console.log('Second question answer = ' + questionTwo + '.');
    if (questionTwo.toLowerCase() === 'n' || questionTwo.toLowerCase() === 'no') {
        correctAnswerCount = correctAnswerCount + 1; // increment correctAnswerCount
        alert('Correct! While I never played competitive badminton, I was a USAV ranked volleyball player winning my first major beach tournament in 1990.');
    }
    else {
        alert('No, it was not badminton. I was, however, a USAV ranked volleyball player winning my first major beach tournament in 1990.');
    }
}

//**********************
function questionThree() {

    var questionThree = prompt('Do I speak any languages other than English? [enter yes or no]');
    console.log('Third question answer = ' + questionThree + '.');
    if (questionThree.toLowerCase() === 'y' || questionThree.toLowerCase() === 'yes') {
        alert('Sorry. As much as I\'ve always wanted to learn another language, it\'s still just English for me right now.');
    }
    else {
        correctAnswerCount = correctAnswerCount + 1; // increment correctAnswerCount
        alert('Nice Job! As much as I\'ve always wanted to learn another language, it\'s still just English for me right now.');
    }
}

//**********************
function questionFour() {

    var questionFour = prompt('Have I ever worked in a shipyard? [enter yes or no]');
    console.log('Fourth question answer = ' + questionFour + '.');
    if (questionFour.toLowerCase() === 'y' || questionFour.toLowerCase() === 'yes') {
        correctAnswerCount = correctAnswerCount + 1; // increment correctAnswerCount
        alert('Nicely done! I worked as a painter and sandblaster at the Port of Portland to earn money for college. I painted the hull of the \"Exxon Valdez\" about 3 months before the infamous eco disaster in Alaska.');
    }
    else {
        alert('Sorry. I worked as a painter and sandblaster at the Port of Portland to earn money for college. I painted the hull of the \"Exxon Valdez\" about 3 months before the infamous eco disaster in Alaska.');
    }
}

//**********************
function questionFive() {

    var questionFive = prompt('Am I a web developer? [enter yes or no]');
    console.log('Fifth question answer = ' + questionFive + '.');
    if (questionFive.toLowerCase() === 'y' || questionFive.toLowerCase() === 'yes') {
        correctAnswerCount = correctAnswerCount + 1; // increment correctAnswerCount
        alert('You know it! Being a web developer is pretty awesome.');
    }
    else {
        alert('Actually, I am! Being a web developer is pretty awesome.');
    }
}

//**********************
function questionSix() {
    var maxGuesses = 4;
    var favoriteNumber = 7;
    for (var i = 0; i < maxGuesses; i++) {
        var questionSix = parseInt(prompt('What is my favorite number? [hint: it\'s between 0 and 10]'));
        if (questionSix === favoriteNumber) {
            console.log('Sixth question answer = ' + questionSix + '.');
            correctAnswerCount = correctAnswerCount + 1; // Increment correctAnswerCount
            alert('Yes, ' + favoriteNumber + ' is my favorite number! Nice job.');
            break;
        }
        else {
            if (i !== maxGuesses - 1 && questionSix > favoriteNumber) {
                console.log('Sixth question answer = ' + questionSix + '.');
                alert('My favorite number is lower than ' + questionSix + '.');
            }
            else {
                if (i !== maxGuesses - 1 && questionSix < favoriteNumber) {
                    console.log('Sixth question answer = ' + questionSix + '.');
                    alert('My favorite number is higher than ' + questionSix + '.');
                }
                else {
                    alert('Sorry, ' + questionSix + ' wasn\'t it either. My favorite number is ' + favoriteNumber + '!');
                }
            }
        }
    }
}

//**********************
function questionSeven() {
    var myCities = ["BEND", "ASHLAND", "MEDFORD", "SALEM", "CORVALLIS", "EUGENE"];
    var cityGuesses = [];
    var maxCityGuesses = 6;
    var cityMatches = [];

    alert('I\'ve lived in 6 Oregon cities OTHER than Portland. Let\'s see how many you can correctly identify. I\'ll give you 6 guesses.');

    for (var i = 0; i < 6; i++) {
        cityGuesses.push(prompt('Enter your guess for a city').toUpperCase());
        console.log('guess: ' + i + ':' + cityGuesses);
    }
    for (var myCitiesIndex = 0; myCitiesIndex < 6; myCitiesIndex++) {
        console.log('we are in the first for loop');
        for (var k = 0; k < 6; k++) {
            console.log('in the second loop');
            console.log(cityGuesses);
            console.log(cityGuesses[k] + myCities[myCitiesIndex])
            if (cityGuesses[k] === myCities[myCitiesIndex]) {
                // push match to cityMatches array
                cityMatches.push(cityGuesses[k]);
                console.log('cityMatches: ' + cityMatches);
            }
        }
    }
    if (cityMatches.length === 0) {
        alert('Wow, you really suck at this! If it makes you feel any better, here are the other cities in Oregon that I used to call home: ' + myCities.join(', ') + '.');
    }
    else {
        correctAnswerCount = correctAnswerCount + 1; // increment correctAnswerCount by 1
        var percentCorrect = Math.round((cityMatches.length / myCities.length) * 100);
        alert('Congratulations! You guessed the following cities correctly: ' + cityMatches.join(', ') + '. That\'s ' + cityMatches.length + ' for ' + myCities.length + ', or ' + percentCorrect + '%.');
    }
}

//WELCOME USER AND CALL QUESTION FUNCTIONS
var userName = prompt('Welcome to my About Me page! Let\'s play a quick game to help you get to know me a little better. I\'ll ask you 7 questions about myself and you try to guess the correct answers. First things first, please introduce yourself by entering your name below.');
var personalWelcome = alert('Nice to meet you, ' + userName + '. Here comes your first question. Good luck!');

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

// CONCLUDE QUESTIONS AND PROVIDE CORRECT ANSWER COUNT TO USER
alert('All done! You guessed ' + correctAnswerCount + ' out of 7 questions correctly. Wasn\'t that fun? Feel free to explore the rest of my site.');

// ----- END -----