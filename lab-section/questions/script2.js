const quizDB = [
    {
        question: "Q1. What number this sign represent ?",
        imgPath: '../images/1.jpg',
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        ans: "ans1"
    },
    {
        question: "Q2. What number this sign represent ?",
        imgPath: '../images/3.jpg',
        a: "0",
        b: "7",
        c: "6",
        d: "3",
        ans: "ans4"
    },
    {
        question: "Q3. What number this sign represent ?",
        imgPath: '../images/6.jpg',
        a: "5",
        b: "6",
        c: "2",
        d: "4",
        ans: "ans2"
    },
    {
        question: "Q4. What number this sign represent ?",
        imgPath: '../images/7.jpg',
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        ans: "ans3"
    },
    
    {
        question: "Q5. What does this image means in sign language ?",
        imgPath: '../images/8.jpg',
        a: "7",
        b: "8",
        c: "12",
        d: "None of above",
        ans: "ans2"
    },

    {
        question: "Q6. What does this image means in sign language ?",
        imgPath: '../images/10.gif',
        a: "2",
        b: "10",
        c: "12",
        d: "4",
        ans: "ans2"
    }
];

const question = document.querySelector('.questions');
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll('.answer');


let questionCount = 0;
let score = 0;
let N = quizDB.length;




const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

    document.getElementById("myImage").src = questionList.imgPath;
};


loadQuestion();



const getCheckAnswer = () => {
    let answer;

    answers.forEach((currAnsElem) => {
        if(currAnsElem.checked) {
            answer = currAnsElem.id;
        }
        
    })
    return answer;
};



const deselectAll = () => {
    answers.forEach((currAnsElem) => {
        currAnsElem.checked = false;
    })
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();

    console.log(checkedAnswer); 

    if(checkedAnswer === quizDB[questionCount].ans) {
        score++;
    }

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length) {
        loadQuestion();
    }
    else {
        console.log(score);
        document.getElementById('submit').style.visibility = "hidden";

        showScore.classList.remove('scoreArea');

        document.getElementById('page').innerHTML=`
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="result-style.css">
                <script src="https://kit.fontawesome.com/4c6eebd60d.js" crossorigin="anonymous"></script>
                <title>Result</title>
            </head>
            <body>

            <h2 class="top">
                    Thank you, for participation !
                </h2>

                <div class="flex-container">
                    <p id = "scoreCard"> 
                        __You Scored : ${score}
                        <br>
                        out of ${N} ❤️
                    </p>
                </div>

                <div class="btns">
                    <a class="blue-btn" href="../lab.html">back to lab</a>
                    <a class="blue-btn" href="../../learning/content.html">back to learning</a>
                </div>




                <footer id="footer">
                    <i class="footer-icons fa-brands fa-twitter"></i>
                    <i class="footer-icons fa-brands fa-facebook-f"></i>
                    <i class="footer-icons fa-brands fa-instagram"></i>
                    <i class="footer-icons fa-solid fa-envelope"></i>
                    <p class="footer-text">© IMPaired</p>

                </footer>
            </body>
            </html>


        `
    }
});





