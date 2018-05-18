$(document).ready(function () {

    var magic8Ball = {};


    magic8Ball.listOfAnswers = ["yes", "no", "maybe so", "get real", "obviously"];
    $("#answer").hide();

    function askQuestion(question) {

        var randomIndex = Math.floor(Math.random() * magic8Ball.listOfAnswers.length);
        var answer = magic8Ball.listOfAnswers[randomIndex];

        
        $("#8ball").effect("shake");
        $("#answer").fadeIn(4000);
        $("#answer").text(answer);
        
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png")
        console.log(question);
        console.log(answer);
        
    };


    var onClick = function () {

        $("#answer").hide();
        // $("#answer").fadeIn(4000);

        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
        setTimeout(
            function () {
                var question = prompt("Ask a yes/no question!");
                askQuestion(question);
            }, 1000);

    };
    $("#questionButton").click(onClick);
});



