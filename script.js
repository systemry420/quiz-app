const quizData = [
    {
        question: "HTML stands for?",
        a: "Hypertext Markup Language",
        b: "javascript dot notation",
        c: "Hello Timmy Mark Land",
        d: "Hell yeah",
        correct: 'a'
    },
    {
        question: "Who is USA president?",
        a: "Donald Trump",
        b: "Barack Obama",
        c: "Nilson Mandela",
        d: "Jeff Bezos",
        correct: 'a'
    },
    {
        question: "Most popular language",
        a: "C++",
        b: "Java",
        c: "Javascript",
        d: "Python",
        correct: 'b'
    }
];
let currentQuiz = 0;
let score = 0;
let answer = undefined;
const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const aEl = document.getElementById('a_text');
const bEl = document.getElementById('b_text');
const cEl = document.getElementById('c_text');
const dEl = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let answerEls = document.querySelectorAll('.answer');

loadQuiz();

function loadQuiz() {
    questionEl.innerText = quizData[currentQuiz].question;
    aEl.innerText = quizData[currentQuiz].a;
    bEl.innerText = quizData[currentQuiz].b;
    cEl.innerText = quizData[currentQuiz].c;
    dEl.innerText = quizData[currentQuiz].d;
}

function getSelected (){
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselect(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    })
}

submitBtn.addEventListener("click", ()=>{
    let yourAnswer = getSelected();
    if(yourAnswer){
        if(yourAnswer === quizData[currentQuiz].correct){
            score++;
        }
        deselect();
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2>You answered correctly ${score} out of ${quizData.length}</h2>`;
        }

    }

})