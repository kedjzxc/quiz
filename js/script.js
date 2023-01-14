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
        correct: 2
    },
    {
        question: '(-2)^2 * (-2)^3',
        answers: [-64, 32, -32],
        correct: 3
    },
    {
        question: '(0,25)^6 * 8^6',
        answers: [8, 128, 64],
        correct: 3
    }, 
    {
        question: '6 * 0,5^6 : 0,5^3',
        answers: [0.75, 1.5, 3],
        correct: 1
    }, 
    {
        question: '42^4 : 14^4',
        answers: [27, 243, 81],
        correct: 3
    }
]
const quiz = document.querySelector('.quiz__question')
const quizTitle = document.querySelector('.quiz__title')
const quizBox = document.querySelector('.quiz__answer-box')
const answerBtn = document.querySelector('.quiz__answer-btn')
const restartBtnBlock = document.querySelector('.quiz__restart-btn--block')
const restartBtn = document.querySelector('.quiz__restart-btn')

let questionIndex = 0
let score = 0

clear()
show()
answerBtn.onclick = checkAnswer


function show() {
    const title = questions[questionIndex].question
    quiz.innerHTML = title
    let answerNum = 1
    questions[questionIndex]['answers'].forEach(item => {
        const answerTemplate = `
        <div class="quiz__answer">
            <input value='%value%' class="quiz__answer-radio" type="radio" name="radio">
            <label for="radio-1" class="quiz__answer-text">%answer%</label>
        </div>
        `
        const answerText = answerTemplate.replace('%answer%', item).replace('%value%', answerNum)
        quizBox.innerHTML += answerText
        answerNum++
        const answerBox = document.querySelectorAll('.quiz__answer')
        const answerRadio = document.querySelectorAll('.quiz__answer-radio')
        answerBox.forEach((answerItem, answerIndex) => {
            answerRadio.forEach((radioItem, radioIndex) => {
                answerItem.addEventListener('click', (e) => {
                    if (answerIndex == radioIndex) {
                        radioItem.checked = true
                    }
                })
            })
        })
    })
}

function checkAnswer() {

    const checkedAnswer = quizBox.querySelector('input[type="radio"]:checked')
    if (!checkedAnswer) {
        return
    }
    const userAnswer = (checkedAnswer.value)
    if (userAnswer == questions[questionIndex]['correct']) {
        score++
    }
    console.log(score);
    if (questionIndex !== questions.length - 1) {
        questionIndex++
        clear()
        show()
    } else {
        restartBtnBlock.classList.add('active')
        answerBtn.classList.add('hidden')
        clear()
        showResult()
    }
}

function clear() {
    quiz.innerHTML = ''
    quizBox.innerHTML = ''
}

function showResult() {
    quizBox.classList.add('quiz__answer-box--end')
    quizTitle.classList.add('quiz__title-end')
    quizBox.innerHTML = ''
    score == Math.floor(questions.length / 2 ) ? quizTitle.innerHTML = 'This is a good result' :
    score > Math.floor(questions.length / 2 ) ? quizTitle.innerHTML = 'You are cool!' : quizTitle.innerHTML = 'You need to learn math'
    restartBtn.onclick = function () {
        history.go()
    }
}

