 //Declaring Questions
 var carQuestion = 'Is Porsche one of my favourite car (Y/N)?';
 var sportsQuestion = 'Is American football my favourite sport (Y/N)?';
 var cityQuestion = 'Is Switzerland my favourite vacation spot (Y/N)?';
 var shopQuestion = 'Is Amazon my favourite first shopping spot (Y/N)?';
 var socialQuestion = 'Do I like to spend my time on Instagram (Y/N)?';
 //Declaring Array
var questions = [carQuestion,sportsQuestion,cityQuestion,shopQuestion,socialQuestion];

 //Declaring Array for Answers
 var answers = ['Y','N','N','Y','Y'];

//Ask user Name
 var userNameQuestion = 'Please enter your name';
 console.log('hi');
 var userName = getUserInput(userNameQuestion);
 console.log('after');
 alert('Welcome ' + userName + ' to my personal blog');

//Check if user is Intrested to play
 var validateIfOkToPlay = 'Interested in Guessing things about Myself(Y/N)?';
 var playGame = getUserInput(validateIfOkToPlay);
 if (play(playGame)){
	askQuestions(questions);
	alert('Thank you for playing Guessing Game about Myself!!!');
 }else{
	 alert('See you soon!');
 }
 //Ask questions
 function askQuestions(questions){
	
	 for(var i= 0;i<questions.length;i++){
	var userGuess= getUserInput(questions[i]);
	console.log('Answer to Question ' + questions[i] + 'is ' + userGuess);

	if (validateCorrectAnswer(userGuess,answers[i])){
		alert('Yayyyy! You know me perfectly');
	}else {
		console.log('in else');
		alert('come on yaar! you are almost there lets try again ');
		var userGuess= getUserInput(questions[i]);
		if (validateCorrectAnswer(userGuess,answers[i])){
			alert('Yayyyy! You know me perfectly');
		}else {
			alert('Ok No worries! lets move to another question ');
		}

	 }
 }
}

 //Validate User answer
 function validateCorrectAnswer(userAnswer,correctAnswer){

	 if(userAnswer.toUpperCase() === correctAnswer.toUpperCase()){
		 console.log('validate true');
		return true;
	 }else{
		console.log('validate false');
       return false;
	 }

 }
//prompt the answer to question
	function getUserInput(question) {
		console.log(question);
	   var answer = prompt(question);
	   return answer;
	}

function play(playGame){
	playGame = this.playGame;
	playGame = playGame.toLowerCase();
	var option1 = 'y';
    var option2 = 'yes';
	if (playGame === null) {
		alert('No User Input. Please enter');
		return false;
	}
	else if (playGame === option1 || playGame === option2)
  {
		alert('All the very Best!! Lets play the game');
		return true;
	}
	else {
		alert('Invalid Input');
		return false;
	}
};

