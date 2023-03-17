// here we'll keep our functions and global variables
var h3 = document.querySelector('h3');
var startBtn = document.getElementById('start');
var timer = document.getElementById('timer');
var quizWrapper = document.querySelector('.quiz-wrapper')
var quizIndex = 0;
var correctAns = 0
var incorrectAns = 0;
var right = document.getElementById('right');
var wrong = document.getElementById('wrong');
var countdown;


// start timer/timeout function

var seconds = 60;
startBtn.addEventListener("click", displayTime);

function displayTime() {
countdown = setInterval(function () {
    seconds--;
    timer.innerText = 'Timer: ' + seconds;
    if (seconds === 0) {
        clearInterval(countdown);
        alert('Time is up!');
        quizEnd(); 
       
    }
    
}, 1000); 
    
};

function renderLastGrade() {
    // Use JSON.parse() to convert text to JavaScript object
    var lastGrade = JSON.parse(localStorage.getItem("yourScore"));
    // Check if data is returned, if not exit out of the function
    if (lastGrade !== null) {
    document.getElementById("saved-name").innerHTML = lastGrade.Name;
    document.getElementById("saved-grade").innerHTML = (lastGrade.Grade + " %");
    
    } else {
      return;
    }
  }

function quizEnd() {
    clearInterval(countdown);
    var score = (correctAns / quiz.length) * 100;
    quizWrapper.innerHTML = 
    `<h4 class="quiz-end">Your Score</h4>
    <h3 class="quiz-end">${score + ' %'}</h3>
    <h6 class="quiz-end">enter your name and log your high score!</h6>
    <input type="text" class="quiz-end" id="input" placeholder="enter name">
    <button id="score">Enter</button>`
   
    var enterScore = document.getElementById("score");
    enterScore.addEventListener("click", function(event) {
        event.preventDefault();
        
        var yourScore = {
          Name: input.value.trim(),
          Grade: score
          };
        
        localStorage.setItem("yourScore", JSON.stringify(yourScore));
        renderLastGrade();
        
        });
    
          
};


var showQuestion = [
    // question 1
    function() {
        quizWrapper.innerHTML = 
        `<h4>${quiz[0].question}</h4>
        <button id="a">${quiz[0].choices[0]}</button>
        <button id="b">${quiz[0].choices[1]}</button>
        <button id ="c">${quiz[0].choices[2]}</button>
        <button id="d">${quiz[0].choices[3]}</button>`
        let ansA = document.querySelector('#a')
        let ansB = document.querySelector('#b')
        let ansC = document.querySelector('#c')
        let ansD = document.querySelector('#d')
        ansA.addEventListener("click", incorrect)
        ansB.addEventListener("click", incorrect)
        ansC.addEventListener("click", correct)
        ansD.addEventListener("click", incorrect)
               },
// question 2
        function() {
            quizWrapper.innerHTML = 
            `<h4>${quiz[1].question}</h4>
            <button id="a">${quiz[1].choices[0]}</button>
            <button id="b">${quiz[1].choices[1]}</button>
            <button id ="c">${quiz[1].choices[2]}</button>
            <button id="d">${quiz[1].choices[3]}</button>`
            let ansA = document.querySelector('#a')
            let ansB = document.querySelector('#b')
            let ansC = document.querySelector('#c')
            let ansD = document.querySelector('#d')
            ansA.addEventListener("click", incorrect)
            ansB.addEventListener("click", incorrect)
            ansC.addEventListener("click", incorrect)
            ansD.addEventListener("click", correct)
            },
// question 3
            function() {
                quizWrapper.innerHTML = 
                `<h4>${quiz[2].question}</h4>
                <button id="a">${quiz[2].choices[0]}</button>
                <button id="b">${quiz[2].choices[1]}</button>
                <button id ="c">${quiz[2].choices[2]}</button>
                <button id="d">${quiz[2].choices[3]}</button>`
                let ansA = document.querySelector('#a')
                let ansB = document.querySelector('#b')
                let ansC = document.querySelector('#c')
                let ansD = document.querySelector('#d')
                ansA.addEventListener("click", correct)
                ansB.addEventListener("click", incorrect)
                ansC.addEventListener("click", incorrect)
                ansD.addEventListener("click", incorrect)
                },
// question 4
                   function() {
                quizWrapper.innerHTML = 
                `<h4>${quiz[3].question}</h4>
                <button id="a">${quiz[3].choices[0]}</button>
                <button id="b">${quiz[3].choices[1]}</button>
                <button id ="c">${quiz[3].choices[2]}</button>
                <button id="d">${quiz[3].choices[3]}</button>`
                let ansA = document.querySelector('#a')
                let ansB = document.querySelector('#b')
                let ansC = document.querySelector('#c')
                let ansD = document.querySelector('#d')
                ansA.addEventListener("click", incorrect)
                ansB.addEventListener("click", incorrect)
                ansC.addEventListener("click", correct)
                ansD.addEventListener("click", incorrect)
                },
// question 5
   function() {
                quizWrapper.innerHTML = 
                `<h4>${quiz[4].question}</h4>
                <button id="a">${quiz[4].choices[0]}</button>
                <button id="b">${quiz[4].choices[1]}</button>
                <button id ="c">${quiz[4].choices[2]}</button>
                <button id="d">${quiz[4].choices[3]}</button>`
                let ansA = document.querySelector('#a')
                let ansB = document.querySelector('#b')
                let ansC = document.querySelector('#c')
                let ansD = document.querySelector('#d')
                ansA.addEventListener("click", incorrect)
                ansB.addEventListener("click", correct)
                ansC.addEventListener("click", incorrect)
                ansD.addEventListener("click", incorrect)
                }
]



// correct / incorrect scripts

// ****** if quizIndex = quiz.length *******
// else {run function for score and whatever quizEnd}
function correct() {
    right.classList.remove('hide');
    correctAns++;
    quizIndex++;
    setTimeout(() => {
        right.classList.add('hide');
        if (quizIndex === quiz.length) {
            quizEnd()
        }
        showQuestion[quizIndex]();
        
      }, "1000");
    
};

function incorrect() {
    wrong.classList.remove('hide');
    incorrectAns++;
    quizIndex++;
    seconds = seconds-5;
    setTimeout(() => {
        wrong.classList.add('hide');
        if (quizIndex === quiz.length) {
            quizEnd()
        }
        showQuestion[quizIndex]();
      
      }, "1000");
 };


// begin quiz
startBtn.addEventListener("click", showQuestion[0]);



function init() {
    renderLastGrade();
}
init();

// ---------------old code---------------------

// function showQuestion1() {
// quizWrapper.innerHTML = 
// `<h4>${quiz[0].question}</h4>
// <button id="a">${quiz[0].choices[0]}</button>
// <button id="b">${quiz[0].choices[1]}</button>
// <button id ="c">${quiz[0].choices[2]}</button>
// <button id="d">${quiz[0].choices[3]}</button>`
// let ansA = document.querySelector('#a')
// let ansB = document.querySelector('#b')
// let ansC = document.querySelector('#c')
// let ansD = document.querySelector('#d')
// ansA.addEventListener("click", incorrect)
// ansB.addEventListener("click", incorrect)
// ansC.addEventListener("click", correct)
// ansD.addEventListener("click", incorrect)


// console.log(ansA);
// console.log(ansB);
// console.log(ansC);
// console.log(ansD);
// };
// // question 2 - this shit def not DRY

// function showQuestion2() {
//     quizWrapper.innerHTML = 
//     `<h4>${quiz[1].question}</h4>
//     <button id="a">${quiz[1].choices[0]}</button>
//     <button id="b">${quiz[1].choices[1]}</button>
//     <button id ="c">${quiz[1].choices[2]}</button>
//     <button id="d">${quiz[1].choices[3]}</button>`
//     let ansA = document.querySelector('#a')
//     let ansB = document.querySelector('#b')
//     let ansC = document.querySelector('#c')
//     let ansD = document.querySelector('#d')
//     ansA.addEventListener("click", incorrect)
//     ansB.addEventListener("click", incorrect)
//     ansC.addEventListener("click", correct)
//     ansD.addEventListener("click", incorrect)
    
    
//     console.log(ansA);
//     console.log(ansB);
//     console.log(ansC);
//     console.log(ansD);
//     };


// // question 3 - getting a bit redundant here

// function showQuestion3() {
//     quizWrapper.innerHTML = 
//     `<h4>${quiz[2].question}</h4>
//     <button id="a">${quiz[2].choices[0]}</button>
//     <button id="b">${quiz[2].choices[1]}</button>
//     <button id ="c">${quiz[2].choices[2]}</button>
//     <button id="d">${quiz[2].choices[3]}</button>`
//     let ansA = document.querySelector('#a')
//     let ansB = document.querySelector('#b')
//     let ansC = document.querySelector('#c')
//     let ansD = document.querySelector('#d')
//     ansA.addEventListener("click", incorrect)
//     ansB.addEventListener("click", incorrect)
//     ansC.addEventListener("click", correct)
//     ansD.addEventListener("click", incorrect)
    
    
//     console.log(ansA);
//     console.log(ansB);
//     console.log(ansC);
//     console.log(ansD);
//     };

