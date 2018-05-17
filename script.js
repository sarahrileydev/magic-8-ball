$(document).ready(function () {

    var magic8Ball = {};
    

    magic8Ball.listOfAnswers = ["yes", "no", "maybe so", "get real", "obviously"];

    function askQuestion(question) {

        var randomIndex = Math.floor(Math.random() * magic8Ball.listOfAnswers.length);
        var answer = magic8Ball.listOfAnswers[randomIndex];

        $("#answer").text( answer );

        console.log(question);
        console.log(answer);
    };
    

    var onClick = function() {
        var question = prompt("Ask a yes/no question!");
        askQuestion(question);
    };
    $("#questionButton").click( onClick );
});



