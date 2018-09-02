function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
//assigning answer to users choice. 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
