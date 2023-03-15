// here we'll store our *hidden* questions/objects

var quiz = [
    {
        question: 'A function that is passed as an argument of another function is called a _________',
        choices: ['conjunction function', 'method', 'callback', 'return'],
        // correct: c
    },
    {
        question: 'Merging or chaining two or more arrays together is called _________',
        choices: ['incrementor', 'a super array', 'condoginating', 'concatenating'],
        // correct: d
    },
    {
        question: 'What does the acronym DOM stand for?',
        choices: ['Document Object Model', 'Department Of Management', 'Duties and Obligations of Matrimony', 'some guy named Dom that invented javascript'],
        // correct: a
    },
    {
        question: 'Inside which HTML element do we link our javascript file?',
        choices: ['head', 'div', 'script', 'img'],
        // correct: c
    },
    {
        question: 'Which syntax is used to call a function?',
        choices: ['[ ]', '( )', '{ }', ' = '],
        // correct: b
    }
    
]


// var showQuestion = [
//     function() {
//         quizWrapper.innerHTML = 
//         `<h4>${quiz[0].question}</h4>
//         <button id="a">${quiz[0].choices[0]}</button>
//         <button id="b">${quiz[0].choices[1]}</button>
//         <button id ="c">${quiz[0].choices[2]}</button>
//         <button id="d">${quiz[0].choices[3]}</button>`
//         let ansA = document.querySelector('#a')
//         let ansB = document.querySelector('#b')
//         let ansC = document.querySelector('#c')
//         let ansD = document.querySelector('#d')
//         ansA.addEventListener("click", incorrect)
//         ansB.addEventListener("click", incorrect)
//         ansC.addEventListener("click", correct)
//         ansD.addEventListener("click", incorrect)
        
        
//         console.log(ansA);
//         console.log(ansB);
//         console.log(ansC);
//         console.log(ansD);
//         },

//         function() {
//             quizWrapper.innerHTML = 
//             `<h4>${quiz[1].question}</h4>
//             <button id="a">${quiz[1].choices[0]}</button>
//             <button id="b">${quiz[1].choices[1]}</button>
//             <button id ="c">${quiz[1].choices[2]}</button>
//             <button id="d">${quiz[1].choices[3]}</button>`
//             let ansA = document.querySelector('#a')
//             let ansB = document.querySelector('#b')
//             let ansC = document.querySelector('#c')
//             let ansD = document.querySelector('#d')
//             ansA.addEventListener("click", incorrect)
//             ansB.addEventListener("click", incorrect)
//             ansC.addEventListener("click", correct)
//             ansD.addEventListener("click", incorrect)
            
            
//             console.log(ansA);
//             console.log(ansB);
//             console.log(ansC);
//             console.log(ansD);
//             },

//             function() {
//                 quizWrapper.innerHTML = 
//                 `<h4>${quiz[2].question}</h4>
//                 <button id="a">${quiz[2].choices[0]}</button>
//                 <button id="b">${quiz[2].choices[1]}</button>
//                 <button id ="c">${quiz[2].choices[2]}</button>
//                 <button id="d">${quiz[2].choices[3]}</button>`
//                 let ansA = document.querySelector('#a')
//                 let ansB = document.querySelector('#b')
//                 let ansC = document.querySelector('#c')
//                 let ansD = document.querySelector('#d')
//                 ansA.addEventListener("click", incorrect)
//                 ansB.addEventListener("click", incorrect)
//                 ansC.addEventListener("click", correct)
//                 ansD.addEventListener("click", incorrect)
                
                
//                 console.log(ansA);
//                 console.log(ansB);
//                 console.log(ansC);
//                 console.log(ansD);
//                 }

// ]