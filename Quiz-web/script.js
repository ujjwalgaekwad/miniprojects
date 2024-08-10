let questionsButton = document.querySelector("#question");
let answerButton = document.querySelector(".answer-button");
let nextButton = document.querySelector("#next-btn");

const questions = [
    {
        question: "Which is the largest state in India by area?",
        answers: [
            { text: "a) Maharashtra", correct: false },
            { text: "b) Madhya Pradesh", correct: false },
            { text: "c) Rajasthan", correct: true },
            { text: "d) Uttar Pradesh", correct: false },
        ]
    },
    {
        question: "Who is known as the Father of the Nation in India?",
        answers: [
            { text: "a) Subhas Chandra Bose", correct: false },
            { text: "b) Jawaharlal Nehru", correct: false },
            { text: "c) Sardar Vallabhbhai Patel", correct: false },
            { text: "d) Mahatma Gandhi", correct: true },
        ]
    },
    {
        question: "Which river is the longest in India?",
        answers: [
            { text: "a) Yamuna", correct: false },
            { text: "b) Godavari", correct: false },
            { text: "c) Ganga", correct: true },
            { text: "d) Brahmaputra", correct: false },
        ]
    },
    {
        question: "In which year did India gain independence from British rule?",
        answers: [
            { text: "a) 1942", correct: false },
            { text: "b) 1945", correct: false },
            { text: "c) 1947", correct: true },
            { text: "d) 1950", correct: false },
        ]
    },
    {
        question: "Who was the first President of India?",
        answers: [
            { text: "a) Dr. Rajendra Prasad", correct: true },
            { text: "b) Dr. B. R. Ambedkar", correct: false },
            { text: "c) Dr. S. Radhakrishnan", correct: false },
            { text: "d) Pandit Jawaharlal Nehru", correct: false },
        ]
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        answers: [
            { text: "a) pop()", correct: true },
            { text: "b) shift()", correct: false },
            { text: "c) push()", correct: false },
            { text: "d) splice()", correct: false },
        ]
    },
    {
        question: "What is the output of the following code? console.log(typeof NaN);",
        answers: [
            { text: "a) Number", correct: true },
            { text: "b) String", correct: false },
            { text: "c) Undefined", correct: false },
            { text: "d) Object", correct: false },
        ]
    },
    {
        question: "Which property is used to change the font of an element?",
        answers: [
            { text: "a) font-family", correct: true },
            { text: "b) font-weight", correct: false },
            { text: "c) font-style", correct: false },
            { text: "d) font-type", correct: false },
        ]
    },
    {
        question: "Which property is used to change the font of an element?",
        answers: [
            { text: "a) font-family", correct: true },
            { text: "b) font-weight", correct: false },
            { text: "c) font-style", correct: false },
            { text: "d) font-type", correct: false },
        ]
    }
];