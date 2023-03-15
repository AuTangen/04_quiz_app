// here we'll keep our functions and global variables
var h3 = document.querySelector('h3');
var startBtn = document.getElementById('start');
var timer = document.getElementById('timer');
var quizWrapper = document.querySelector('.quiz-wrapper')
var quizIndex = 0;
var correctAns = 0
var incorrectAns = 0;

console.log(startBtn);
console.log(timer);
console.log(h3);

// start timer/timeout function
var seconds = 60;
startBtn.addEventListener("click", countdown);

function countdown() {
var countdown = setInterval(function () {
    seconds--;
    timer.innerText = 'Timer: ' + seconds;
    if (seconds === 0) {
        clearInterval(countdown);
        alert('Time is up!')
    }
    
}, 1000);
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
        
        
        console.log(ansA);
        console.log(ansB);
        console.log(ansC);
        console.log(ansD);
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
            
            
            console.log(ansA);
            console.log(ansB);
            console.log(ansC);
            console.log(ansD);
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
                
                
                console.log(ansA);
                console.log(ansB);
                console.log(ansC);
                console.log(ansD);
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
                
                
                console.log(ansA);
                console.log(ansB);
                console.log(ansC);
                console.log(ansD);
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
                
                
                console.log(ansA);
                console.log(ansB);
                console.log(ansC);
                console.log(ansD);
                }
]


// correct / incorrect scripts

// ****** if quizIndex < 5 *******
// else {run function for score and whatever}
function correct() {
    alert("wow you so smart")
    correctAns++;
    quizIndex++;
    showQuestion[quizIndex]();
    console.log(correctAns);
};

function incorrect() {
    alert("wow you so dUmB")
    incorrectAns++;
    quizIndex++;
    seconds = seconds-5;
    showQuestion[quizIndex]();
    console.log(incorrectAns);
};


// begin quiz
startBtn.addEventListener("click", showQuestion[0]);




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

