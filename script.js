// // alert("its working fine");

const questions= [{
    question : "Who won the FIFA Ballon d'Or in 2020?",
    answer: {
        "Lionel Messi" : "wrong",
        "Cristiano Ronaldo" : "wrong",
        "Robert Lewandowski" : "correct",
        "Kevin De Bruyne" : "wrong",
    }
},
{
    question : "Which country hosted the 2014 FIFA World Cup?",
    answer: {
        "Germany" : "wrong",
        "Brazil" : "correct",
        "South Africa" : "wrong",
        "Russia" : "wrong",
    }
},
{
    question : "Which football club has won the most UEFA Champions League titles as of 2022?",
    answer: {
        " FC Barcelona" : "wrong",
        "AC Milan" : "wrong",
        "Real Madrid" : "correct",
        "Bayern Munich" : "wrong",
    }
},
{
    question : "Who is the all-time top scorer for the English Premier League?",
    answer: {
        "Thierry Henry" : "wrong",
        "Wayne Rooney" : "wrong",
        "Alan Shearer" : "correct",
        "Frank Lampard" : "wrong",
    }
}
];

let count = 0;
score = 0;
function startQuize(){

    $("#nxt-btn").css("display", "block");
    if(count<=questions.length-1){
    $("h3").text(`${count+1}.  ${questions[count].question}`);

    let keys = Object.keys(questions[count].answer);

    for( let i=0 ; i<keys.length ; i++ ){

        let createBtn = $("<button></button>")
        .addClass("btn")
        .text(`${keys[i]}`)
        .data("value", questions[count].answer[keys[i]]);

        $("#answers-btn").append(createBtn);

        // console.log(`Button text: ${keys[i]}, Data value: ${createBtn.data("value")}`);
        
    }
    count++;
   }
   else {
    $("#nxt-btn").css("display", "none");
    $("h3").text(`Your Score : ${score}`);
    let createTryAgainBtn = $("<button></button>").text("Try again").addClass("try-again");
    $("#answers-btn").append(createTryAgainBtn);
    count = 0;
    score = 0;
   }
}
// function startQuiz() {
//     if (count <= questions.length - 1) {
//         $("h3").text(`${count + 1}.  ${questions[count].question}`);

//         let keys = Object.keys(questions[count].answer);

//         for (let i = 0; i < keys.length; i++) {
//             let createBtn = $("<button></button>")
//                 .addClass("btn")
//                 .text(`${keys[i]}`)
//                 .data("value", questions[count].answer[keys[i]]);

//             $("#answers-btn").append(createBtn);

//             // Log data for debugging
//             console.log(`Button text: ${keys[i]}, Data value: ${createBtn.data("value")}`);
//         }
//         count++;
//     }
// }

startQuize();

let checkClick = false;
$("#answers-btn").on("click", ".btn",function(){
    checkClick = true;
    const check = $(this).data("value") === "correct";
    if(check){
        $(this).addClass("right-btn");
        score++;
        console.log(score);
    }
    else {
        $(this).addClass("wrong-btn");

        $("#answers-btn button").each(function () {

            if ($(this).data("value")==="correct") {
                $(this).addClass("right-btn");
            }
        });
    }
    $("#answers-btn button").prop("disabled",true);
    $("#answers-btn button").addClass("btn-disabled");
});

// Click event for "nxt-btn"
$("#nxt-btn").on("click", function () {
    if(checkClick){
        $("#answers-btn").empty();
    startQuize();
    checkClick = false;
    }
    else {
            alert("Please Select The Answer")
    }

});

$("#answers-btn").on("click", ".try-again", function() {
    // console.log("iam in try-again")
    $("#answers-btn").empty();
    startQuize();
});