'use strict'
var correctAnswerCount = 0; // Used to keep track of the current correct answer count.

// Capture user's name for personalization
var userName = prompt('Welcome to my About Me page! Let\'s play a quick game to help you get to know me a little better. I\'ll ask you 7 questions about myself and you try to guess the correct answers. First things first, please introduce yourself by entering your name below.');

// Display personalized welcome alert
var personalWelcome = alert('Nice to meet you, ' + userName + '. Here comes your first question. Good luck!');

//Begin question prompts and alerts
var questionOne = prompt('Would I spend my tax return on travel over a new laptop? [enter yes or no]');
console.log('First question answer = ' + questionOne + '.');
if(questionOne.toLowerCase() === 'y' || questionOne.toLowerCase() === 'yes') {
    correctAnswerCount = correctAnswerCount + 1; // increment correctAnswerCount by 1
    alert('You\'re off to great start! It\'s like my old friend Hans always says, \"At rejse er at leve!\".');
}
else {
    alert('You\'re 0 for 1! I\'d much rather jump on a plane with my old laptop than be stuck at home with a new one.');
}
console.log('Current correct answer count = ' + correctAnswerCount);

var questionTwo = prompt('Did I ever play competitive badminton? [enter yes or no]');
console.log('Second question answer = ' + questionTwo + '.');
if(questionTwo.toLowerCase() === 'n' || questionTwo.toLowerCase() === 'no') {
    correctAnswerCount = correctAnswerCount +1; // increment correctAnswerCount by 1
    alert('Correct! While I never played competitive badminton, I was a USAV ranked volleyball player winning my first major beach tournament in 1990.');
}
else {
    alert('No, it was not badminton. I was, however, a USAV ranked volleyball player winning my first major beach tournament in 1990.');
}
console.log('Current correct answer count = ' + correctAnswerCount); // increment correctAnswerCount by 1

var questionThree = prompt('Do I speak any languages other than English? [enter yes or no]');
console.log('Third question answer = ' + questionThree + '.');
if(questionThree.toLowerCase() === 'y' || questionThree.toLowerCase() === 'yes') {
    alert('Sorry. As much as I\'ve always wanted to learn another language, it\'s still just English for me right now.');
}
else {
    correctAnswerCount = correctAnswerCount +1; // increment correctAnswerCount by 1
    alert('Nice Job! As much as I\'ve always wanted to learn another language, it\'s still just English for me right now.');
}
console.log('Current correct answer count = ' + correctAnswerCount);

var questionFour = prompt('Have I ever worked in a shipyard? [enter yes or no]');
console.log('Fourth question answer = ' + questionFour + '.');
if(questionFour.toLowerCase() === 'y' || questionFour.toLowerCase() === 'yes') {
    correctAnswerCount = correctAnswerCount +1; // increment correctAnswerCount by 1
    alert('Nicely done! I worked as a painter and sandblaster at the Port of Portland to earn money for college. I painted the hull of the \"Exxon Valdez\" about 3 months before the infamous eco disaster in Alaska.');
}
else {
    alert('Sorry. I worked as a painter and sandblaster at the Port of Portland to earn money for college. I painted the hull of the \"Exxon Valdez\" about 3 months before the infamous eco disaster in Alaska.');

}
console.log('Current correct answer count = ' + correctAnswerCount);

var questionFive = prompt('Am I a web developer? [enter yes or no]');
console.log('Fifth question answer = ' + questionFive + '.');
if(questionFive.toLowerCase() === 'y' || questionFive.toLowerCase() === 'yes') {
    correctAnswerCount = correctAnswerCount +1; // increment correctAnswerCount by 1
    alert('You know it! Being a web developer is pretty awesome.');
}
else {
    alert('Actually, I am! Being a web developer is pretty awesome.');
}
console.log('Current correct answer count = ' + correctAnswerCount);

// var questionSix = parseInt(prompt('What is my favorite number? [hint: it\'s between 0 and 10]'));
// var favoriteNumber = 7;
// console.log('Sixth question answer = ' + questionSix + '.');
// if(questionSix === favoriteNumber) {
//     correctAnswerCount = correctAnswerCount +1; // increment correctAnswerCount by 1
//     alert('Yes, 7 is my favorite number. Good guess!');
// }
// else {
//     alert('The number ' + questionSix + ' is fine and all, but 7 is my lucky number. Nice try!');
// }
// console.log('Current correct answer count = ' + correctAnswerCount);

var maxGuesses = 4;
var favoriteNumber = 7;

for (var i = 0; i < maxGuesses; i++) {
var questionSix = parseInt(prompt('What is my favorite number? [hint: it\'s between 0 and 10]'));
if(questionSix === favoriteNumber) {
    console.log('Sixth question answer = ' + questionSix + '.');
    correctAnswerCount = correctAnswerCount +1; // increment correctAnswerCount by 1
    alert('Yes, ' + favoriteNumber + ' is my favorite number! Nice job.');
    break;    
}
else {
    if(questionSix > favoriteNumber) {
        console.log('Sixth question answer = ' + questionSix + '.');
        alert('My favorite number is lower than ' + questionSix + '.');
     }
    
     else {
        console.log('Sixth question answer = ' + questionSix + '.');
        alert('My favorite number is higher than ' + questionSix + '.');
          }
        }
    }    

    
console.log('Current correct answer count = ' + correctAnswerCount);

// display concluding alert message with the total number of correct answers 
alert('You got ' + correctAnswerCount + ' out of 5 questions correct. Wasn\'t that fun? Hopefully you feel like you know me a bit better now! Feel free to explore the rest of my About Me page.');

