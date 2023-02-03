let  quizDB = [
    {
      questions: "Q1: Who invented the telephone?",
      a: "Alexander Graham Bell",
      b: "Thomas Edison",
      c: "Guglielmo Marconi",
      d: "Nikola Tesla",
      ans: "ans1" 
    },
    {
        questions: "Q2: Who invented the light bulb?",
        a: "Thomas Edison",
        b: "Alexander Graham Bell",
        c: "Nikola Tesla",
        d: "Guglielmo Marconi",
        ans: "ans1"
    },
    {
        questions: "Q3: Who invented the radio?",
        a: "Marconi",
        b: "Alexander Graham Bell",
        c: "Nikola Tesla",
        d: " Thomas Edison",
        ans: "ans1"
    },
    { questions: "Q4: Who invented the computer?",
    a: "Ada Lovelace",
    b: "Charles Babbage",
    c: "Alan Turing",
    d: "Steve Jobs",
    ans: "ans2" 
    },
    { questions: "Q5: Who invented the steam engine?",
    a: " James Watt",
    b: "Nikola Tesla",
    c: "Thomas Edison",
    d: "Alexander Graham Bell",
    ans: "ans1" 
    },
];



let questions = document.querySelector('.questions');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

let answers = document.querySelectorAll('.answer');

let showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;



let loadQuestion = () => {
     
    let questionList =quizDB[questionCount];

    questions.innerHTML=  questionList.questions;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;



}
// Fisher-Yates shuffle algorithm
function shuffleArray(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = questions[i];
      questions[i] = questions[j];
      questions[j] = temp;
    }
    return questions;
  }
  
  // Shuffle the questions
  let shuffledQuestions = shuffleArray(questions);



loadQuestion();
 
let getCheckAnswer = () => {
    let answer;
     
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer =curAnsElem.id; 
        }
    });

    return answer

};

let deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    let checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML =`
        <h3>You Scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        `;

        showScore.classList.remove('scoreArea');

    }

})
