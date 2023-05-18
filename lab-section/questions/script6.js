const quizDB = [
    {
        question: "Q1. What does the diagonal symbols represents in this image ?",
        imgPath: '../images/cross.png',
        a: "gur",
        b: "lrx",
        c: "bur",
        d: "None of the above",
        ans: "ans2"
    },
    {
        question: "Q2. What letters does  this set of images represent ?",
        imgPath: '../images/himn.png',
        a: "bscd",
        b: "opqr",
        c: "himn",
        d: "fghj",
        ans: "ans3"
    },
    {
        question: "Q3. What   does this images mean in sign language ?",
        imgPath: '../images/home.gif',
        a: "home",
        b: "cow",
        c: "city",
        d: "hat",
        ans: "ans1"
    },
    {
        question: "Q4. What animal does this sign represent ?",
        imgPath: '../images/horse.gif',
        a: "ass",
        b: "horse",
        c: "dog",
        d: "none of the above",
        ans: "ans2"
    },
    
    {
        question: "Q5. What does this represents in sign language ?",
        imgPath: '../images/i-love-you.gif',
        a: "i love you",
        b: "i hate this",
        c: "i am slim",
        d: "None of above",
        ans: "ans1"
    },

    {
        question: "Q6. What colour does this image means in sign language ?",
        imgPath: '../images/orange-color.gif',
        a: "blue",
        b: "red",
        c: "pink",
        d: "orange",
        ans: "ans3"
    },
    {
        question: "Q7. What does this  represent in sign language?",
        imgPath: '../images/thank-you.gif',
        a: "thank you",
        b: "not",
        c: "welcome",
        d: "none of these",
        ans: "ans1"
    },
    {
        question: "Q8. Which cloth  this sign represent ?",
        imgPath: '../images/shirt.gif',
        a: "pant",
        b: "shirt",
        c: "underwear",
        d: "none of the above",
        ans: "ans2"
    },
    
    {
        question: "Q9. What does this image means in sign language ?",
        imgPath: '../images/day.gif',
        a: "home",
        b: "sleep",
        c: "go",
        d: "day",
        ans: "ans4"
    },

    {
        question: "Q10. What does this image means in sign language ?",
        imgPath: '../images/sorry.gif',
        a: "not",
        b: "sorry",
        c: "yes",
        d: "all",
        ans: "ans2"
    },
    {
        question: "Q11. What expression is this in sign language ?",
        imgPath: '../images/sad.gif',
        a: "greet",
        b: "sad",
        c: "go",
        d: "None of above",
        ans: "ans2"
    },

    {
        question: "Q12. What does this image means in sign language ?",
        imgPath: '../images/night.gif',
        a: "sad",
        b: "good",
        c: "night",
        d: "no",
        ans: "ans3"
    },
    {
        question: "Q13. What does this image means in sign language ?",
        imgPath: '../images/ghilmn.png',
        a: "jkrtyj",
        b: "ghilmn",
        c: "yzghik",
        d: "oprtyu",
        ans: "ans2"
    },
    {
        question: "Q14. What expression is this in sign language ?",
        imgPath: '../images/day.gif',
        a: "day",
        b: "sad",
        c: "go",
        d: "None of above",
        ans: "ans2"
    },

    {
        question: "Q15. Whom does this image represents in sign language ?",
        imgPath: '../images/mom.gif',
        a: "dad",
        b: "brother",
        c: "son",
        d: "none of the above",
        ans: "ans4"
    },
    {
        question: "Q16. What does this image means in sign language ?",
        imgPath: '../images/pants.gif',
        a: "vest",
        b: "shirt",
        c: "pants",
        d: "all",
        ans: "ans3"
    },
    {
        question: "Q17. What expression is this in sign language ?",
        imgPath: '../images/sad.gif',
        a: "greet",
        b: "sad",
        c: "go",
        d: "None of above",
        ans: "ans2"
    },

    {
        question: "Q18. What does this image means in sign language ?",
        imgPath: '../images/sleep.jpg',
        a: "sad",
        b: "good",
        c: "night",
        d: "none of the above",
        ans: "ans4"
    },
    {
        question: "Q19. What does this image means in sign language ?",
        imgPath: '../images/night.gif',
        a: "night",
        b: "day",
        c: "noon",
        d: "none of the above",
        ans: "ans2"
    },
    {
        question: "Q20. What expression is this in sign language ?",
        imgPath: '../images/day.gif',
        a: "day",
        b: "sad",
        c: "go",
        d: "None of above",
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





