const quizData=[
    { question: "Whats my favourite colour", a:"purple", b:"turquoise", c:"red", d:"violet", correct:"c"},
    { question: "Whats my favourite cartoon", a:"scooby doo", b:"teen titans", c:"spongebob squarepants", d:"tom and jerry", correct:"a"},
    { question: "Whats my hobby", a:"writing", b:"reading", c:"drawing", d:"just dance", correct:"d"},
    { question: "whats my all-time favourite movie", a:"the princess and the frog", b:"matilda the musical", c:"how to train a dragon", d:"minions:the rise of gru", correct:"b"},
    { question: "whats my other favourite hobby", a:"listening to spotify", b:"sleeping", c:"doing nothing", d:"colouring", correct:"a"},
    
]
const quiz=document.getElementById('quiz');
const answerEls=document.querySelectorAll('.answer');
const questionE1=document.getElementById('question');
const a_text=document.getElementById('a_text'); 
const b_text=document.getElementById('b_text'); 
const c_text=document.getElementById('c_text'); 
const d_text=document.getElementById('d_text'); 
const submitBtn=document.getElementById('submit');

let currentQuiz=0;
let score=0;

loadQuiz();
function loadQuiz(){
    deselectAnswers();
    const currentQuizData=quizData[currentQuiz];
    questionE1.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
    
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Restart Quiz</button>`;
                }
            }
        });