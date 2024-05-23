let questions = [
    {
        "question": "Was ist die Hauptstadt von Frankreich?",
        "answer_1": "Berlin",
        "answer_2": "Madrid",
        "answer_3": "Paris",
        "answer_4": "Rom",
        "right_answer": 3
    },
    {
        "question": "Welcher Planet ist der größte in unserem Sonnensystem?",
        "answer_1": "Erde",
        "answer_2": "Mars",
        "answer_3": "Jupiter",
        "answer_4": "Venus",
        "right_answer": 3
    },
    {
        "question": "Welcher Fluss ist der längste der Welt?",
        "answer_1": "Amazonas",
        "answer_2": "Nil",
        "answer_3": "Mississippi",
        "answer_4": "Jangtse",
        "right_answer": 2
    },
    {
        "question": "Wer malte die Mona Lisa?",
        "answer_1": "Vincent van Gogh",
        "answer_2": "Pablo Picasso",
        "answer_3": "Claude Monet",
        "answer_4": "Leonardo da Vinci",
        "right_answer": 2
    }
];


let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}