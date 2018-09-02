
//setting variables to default/ 0
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
//each question has a round number. More questions == more rounds
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

//minus 3 if wrong & add 5 of correct
Quiz.prototype.guess = function(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        //if answer(users choice) is correct then add 5 to score
        this.score = ((this.score) + 5);
    }
        //else if the users choice/answer is incorrect then minus 3 from total score
    else {
        this.score = ((this.score) -3);
    }
    //increment the number of rounds
    this.questionIndex++;
}
//quiz is ended when the questionIndex/ number of rounds = the number of quesitons. 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
