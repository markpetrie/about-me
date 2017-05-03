'use strict'
var correctAnswerCount = 0;
var userName = prompt('Welcome to my About Me page! Let\'s play a quick guessing game to help you get to know me a little better. I\'ll ask you 5 yes/no questions about myself and you try to guess the correct answers. First things first, please introduce yourself by entering your full name below.');
var personalWelcome = alert('Nice to meet you, ' + userName + '. Here comes your first question. Good luck!');
var questionOne = prompt('Would I spend a work bonus on travel over a new laptop? [enter yes or no]');
console.log('First question answer = ' + questionOne + '.');
if(questionOne.toLowerCase() === 'y' || questionOne.toLowerCase() === 'yes') {
    correctAnswerCount = correctAnswerCount + 1;
    alert('You\'re off to great start! It\'s like my old friend Hans always says, \"At rejse er at leve!\".');
}
else {
    alert('You\'re 0 for 1! I\'d much rather jump on a plane with my old laptop than be stuck at home with a new one.');
}
console.log('Current correct answer count = ' + correctAnswerCount);

var questionTwo = prompt('Have I ever won the annual Seaside Beach volleyball tournament? [enter yes or no]');
console.log('Second question answer = ' + questionTwo + '.');
if(questionTwo.toLowerCase() === 'y' || questionTwo.toLowerCase() === 'yes') {
    correctAnswerCount = correctAnswerCount +1;
    alert('Correct! My doubles partner and I won the tournament in 1990. M.C. Hammer\'s \"U Can\'t Touch This\" was climbing the charts and I still had a full head of hair.');
}
else {
    alert('Wrong answer. My doubles partner and I won the tournament in 1990. M.C. Hammer\'s \"U Can\'t Touch This\" was climbing the charts and I still had a full head of hair.');
}
console.log('Current correct answer count = ' + correctAnswerCount);

var questionThree = prompt('Do I speak any languages other than English?');
console.log('Third question answer = ' + questionThree + '.');
if(questionThree.toLowerCase() === 'y' || questionThree.toLowerCase() === 'yes') {
    alert('Sorry. As much as I\'ve always wanted to learn another language, it\'s still just English for me right now.');
}
else {
    correctAnswerCount = correctAnswerCount +1;
    alert('Nice Job! As much as I\'ve always wanted to learn another language, it\'s still just English for me right now.');
}
console.log('Current correct answer count = ' + correctAnswerCount);

var questionFour = prompt('Have I ever worked in a shipyard?');
console.log('Fourth question answer = ' + questionFour + '.');
if(questionFour.toLowerCase() === 'y' || questionFour.toLowerCase() === 'yes') {
    correctAnswerCount = correctAnswerCount +1;
    alert('Nicely done! I worked as a painter and sandblaster at the Port of Portland to earn money for college. I painted the hull of the \"Exxon Valdez\" about 3 months before the infamous eco disaster in Alaska.');
}
else {
    alert('Sorry. I worked as a painter and sandblaster at the Port of Portland to earn money for college. I painted the hull of the \"Exxon Valdez\" about 3 months before the infamous eco disaster in Alaska.');

}
console.log('Current correct answer count = ' + correctAnswerCount);

var questionFive = prompt('Am I a web developer?');
console.log('Fifth question answer = ' + questionFive + '.');
if(questionFive.toLowerCase() === 'y' || questionFive.toLowerCase() === 'yes') {
    correctAnswerCount = correctAnswerCount +1;
    alert('You know it! Being a web developer is pretty awesome.');
}
else {
    alert('Actually, I am! Being a web developer is pretty awesome.');
}

console.log('Current correct answer count = ' + correctAnswerCount);
alert('You got ' + correctAnswerCount + ' out of 5 questions correct. Wasn\'t that fun? Hopefully you feel like you know me a bit better now! Feel free to explore the rest of my About Me page.');

