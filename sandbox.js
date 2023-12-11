let question;
let form;
let res;
let qno;
let score;

const questions = [
    {
        title : '1. Question: What is the purpose of the super keyword in Java?',
        options : [
            ' To call the superclass constructor', 
            'To access the superclass members', 
            'To create an instance of the superclass', 
            'All of the above'
        ],
        answer : '3',
        score : 1
    },
    {
        title : '2. Question: What is the purpose of the this keyword in Java?',
        options : [
            'To refer to the current instance of the class',
            'To create a new instance of the class',
            'To access static members of the class',
            'To call a method in the superclass'
        ],
        answer : '0',
        score : 1
    },
    {
        title : '3. Question: What does the System.out.println() method do in Java?',
        options : [
            'Print to the console',
            ' Read input from the user',
            ' Terminate the program',
            ' Define a variable'
        ],
        answer : '0',
        score : 1
    },
    {
        title : '4. Question: Where is RAM located ?',
        options : [
            'Expansion Board',
            'External Drive',
            'Mother Board',
            'All of above'
        ],
        answer : '2',
        score : 1
    },
    {
        title : '5. Question: Which keyword is used to define a method in Java?',
        options : [
            'method',
            ' func',
            ' function',
            'void'
        ],
        answer : '3',
        score : 1
    },
    {
        title : '6. Question: What is the purpose of the if statement in Java?',
        options : [
            'To declare a variable',
            'To perform arithmetic operations',
            'To control the flow of execution based on a condition',
            'To print output to the console'
        ],
        answer : '2',
        score : 1
    },
    
    {
        title : '7. Question: Which of the following is a primitive data type in Java?',
        options : [
            ' String',
            ' int',
            'Array',
            'Class'
        ],
        answer : '1',
        score : 1
    },
    {
        title : '8. Question: Which level language is Assembly Language ?',
        options : [
            'high-level programming language',
            'medium-level programming language',
            'low-level programming language',
            'machine language'
        ],
        answer : '2',
        score : 1
    },
    {
        title : '9. Question: What is the purpose of the for loop in Java?',
        options : [
            'To create an infinite loop',
            'To iterate over a sequence of elements a fixed number of times',
            ' To define a method',
            'To print output to the console'
        ],
        answer : '2',
        score : 1
    },
    {
        title : '10. Question: What is the purpose of the String class in Java??',
        options : [
            'To perform mathematical operations',
            ' To define methods',
            ' To represent sequences of characters',
            'To create arrays'
        ],
        answer : '2',
        score : 1
    }
];

function restartScreen() {
    document.querySelector('.quiz-heading').innerHTML = `Score : ${score}`
    const card = document.querySelector('.question-card');
    card.innerHTML = "<ul>";
    questions.forEach((ques) => {
        const html = `
        <li>${ques.title} <div class="answer-label">${ques.options[ques.answer]}</div></li>
        `;
        card.innerHTML += html;
    });
    card.innerHTML += "</ul>";
    document.querySelector('.answer-key').style.display ='block';
    document.querySelector('button').style.display ='block';
}

function resetradio() {
    document.querySelectorAll('[type="radio"]').forEach((radio) => {
        radio.removeAttribute("disabled");
    });
    res.setAttribute("class","idle");
    res.innerHTML = "Empty";
}

function evaluate() {
    if(form.op.value == questions[qno].answer) {
        res.setAttribute("class","correct");
        res.innerHTML = "Correct";
        score += questions[qno].score;

    } 
    else {
        res.setAttribute("class","incorrect");
        res.innerHTML = "Incorrect";
    }
    document.querySelectorAll('[type="radio"]').forEach((radio) => {
        radio.setAttribute("disabled","");
    })
}

function getNextQuestion() {
    qno++;
    ques = questions[qno];
    question.innerHTML = ques.title;
    const labels = document.querySelectorAll('label');
    labels.forEach((label, idx) => {
        label.innerHTML = ques.options[idx];
    }); 
}

function handleSubmit(e) {
    e.preventDefault();
    if(!form.op.value) {
        alert('Please select an option');
    }
    else if(form.submit.classList.contains('submit')) {
        evaluate();
        form.submit.classList.remove('submit');
        form.submit.value = "Next"
        form.submit.classList.add('next');
    }
    else if(qno < questions.length - 1 && form.submit.classList.contains('next')) {
        getNextQuestion();
        resetradio();
        form.submit.classList.remove('next');
        form.submit.value = "Submit"
        form.submit.classList.add('submit');
        form.reset();
    }
    else if(form.submit.classList.contains('next')) {
        restartScreen();
        form.submit.classList.remove('next');
        form.submit.value = "Submit"
        form.submit.classList.add('submit');
        form.reset();
    }
}
function init() {
    document.body.innerHTML = `
        <h1 class="quiz-heading">Quiz</h1>
        <div class="app-body">
            <h1 class="answer-key">Answer Key</h1>
            <div class="question-card">
                <h2 id='question'>Question</h2>
                <form>
                    <input type="radio" id="op1" name="op" value="0">
                    <label for="op1">op1</label><br>
                    <input type="radio" id="op2" name="op" value="1">
                    <label for="op2">op2</label><br>
                    <input type="radio" id="op3" name="op" value="2">
                    <label for="op3">op3</label><br>
                    <input type="radio" id="op4" name="op" value="3">
                    <label for="op4">op4</label><br>
                    <div id = "res" class="idle">Empty</div><br>
                    <input type="submit" name="submit" value = 'Submit' class = "submit"/>
                </form>
            </div>
            <button>Restart</button>
        </div>
    `;
   question = document.querySelector('#question');
   form = document.querySelector('form');
   res = document.querySelector('#res');
   qno = -1;
   score = 0;
   form.addEventListener('submit', handleSubmit);
   document.querySelector('button').addEventListener('click', init);
   getNextQuestion();
}
document.querySelector('button').addEventListener('click', init);
init();


