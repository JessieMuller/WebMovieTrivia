
//attempting node
function server(){
    var http = require('http');
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Hello World!');
        res.end();
    }).listen(7522);
}


//show scores at the end of quiz
function populate() {
    if(quiz.isEnded()) {
        showScores();

    }
        //if quiz not finished
        //this is where I would add the RESTful code
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        //call method 
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

//displays the number of rounds remaining 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Round " + currentQuestionNumber + " of " + quiz.questions.length;
};

//displays the users score
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions

//FORMAT: title, option1, option2,option3,option4, correct answer
var questions = [
    new Question("Guess the year: The Shawshank Redemption", ["2001", "2006", "1994", "None"], "1994"),
    new Question("Guess the year: Fight Club", ["2002", "1999", "2012", "None"], "1999"),
    new Question("Guess the year: 12 Angry Men", ["2003", "1957", "2013", "None"], "1957"),
    new Question("Guess the year: The Godfather", ["1972", "2009", "2014", "None"], "1972"),
    new Question("Guess the year: Forrest Gump", ["2005", "1994", "2015", "None"], "1994"),
    new Question("Guess the year: The Matrix", ["2016", "2010", "1999", "None"], "1999"),
    new Question("Guess the year: Avengers: Infinity War", ["2017", "2016", "2018", "None"], "2018"),
    new Question("Guess the year: Pulp Fiction", ["2018", "1994", "2014", "None"], "1994")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





