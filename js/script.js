const questions = [
    {
        question: '3+3',
        answers: [1, 4, 6],
        correct: 3
    },
    {
        question: '2+2*2',
        answers: [0, 6, 8],
        correct: 2
    },
    {
        question: '11^2',
        answers: [112, 121, 144],
        correct: 3
    }
]
const quiz = document.querySelector('.quiz__question')
const quizTitle = document.querySelector('.quiz__title')
const quizBox = document.querySelector('.quiz__answer-box')
const answerBox = document.querySelectorAll('.quiz__answer')
const quizAnswers = document.querySelectorAll('.quiz__answer-text')
const quizAnswer1 = document.querySelector('#answer1')
const quizAnswer2 = document.querySelector('#answer2')
const quizAnswer3 = document.querySelector('#answer3')
const answerBtn = document.querySelector('.quiz__answer-btn')

let questionIndex = 0
let correctAnswer = questions[questionIndex].correct

clear()
foo()
answerBtn.onclick = checkAnswer


function checkAnswer() {
    const checkedAnswer = quizBox.querySelector('input[type="radio"]:checked')
    if (!checkedAnswer) {
        return
    }
    // if (checkedAnswer.value == correctAnswer) {
    //     console.log('correct');
    // }
    // console.log(checkedAnswer.value);
    // console.log(checkedAnswer);
    if (questionIndex !== questions.length - 1) {
        console.log('Not last');
        questionIndex++
        clear()
        foo()
    } else {
        console.log('last');
        clear()
        showResult()
    }
}
  
function clear() {
    quiz.innerHTML = ''
    // quizAnswers.forEach(item => {
    //     item.innerHTML = ''
    // })
    quizAnswer1.innerHTML = ''
    quizAnswer2.innerHTML = ''
    quizAnswer3.innerHTML = ''
}

function foo() {
    // console.log(questions[questionIndex].question);
    // console.log(questions[questionIndex].answers[0]);
    quiz.innerHTML = questions[questionIndex].question
    quizAnswer1.innerHTML = questions[questionIndex].answers[0]
    quizAnswer2.innerHTML = questions[questionIndex].answers[1]
    quizAnswer3.innerHTML = questions[questionIndex].answers[2]

}

function showResult() {
    quizBox.classList.add('quiz__answer-box--end')
    quizTitle.classList.add('quiz__title-end')
    quizBox.innerHTML = ''
    answerBox.innerHTML = ''
    quizTitle.innerHTML = `You are cool!`
    setTimeout(() => {
        history.go()
    }, 5000);
}
