const quizData = [
    {
      question: "What is 5 + 7?",
      options: [10, 12, 14, 15],
      answer: 12,
    },
    {
      question: "Who was the first President of the United States?",
      options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
      answer: "George Washington",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "What is the synonym of 'Happy'?",
      options: ["Sad", "Joyful", "Angry", "Tired"],
      answer: "Joyful",
    },
    {
      question: "How many continents are there on Earth?",
      options: [5, 6, 7, 8],
      answer: 7,
    },
    {
      question: "What is the capital of Japan?",
      options: ["Beijing", "Seoul", "Tokyo", "Osaka"],
      answer: "Tokyo",
    },
    {
      question: "Solve: 9 x 3",
      options: [18, 27, 24, 30],
      answer: 27,
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "NaCl"],
      answer: "H2O",
    },
    {
      question: "Are the cowboys good?'?",
      options: ["Yes", "No",],
      answer: "No",
    },
    {
      question: "In what year did World War II end?",
      options: [1941, 1945, 1950, 1939],
      answer: 1945,
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  const questionEl = document.getElementById("question");
  const formEl = document.getElementById("quiz-form");
  const submitBtn = document.getElementById("submit");
  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  const restartBtn = document.getElementById("restart");

  function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    formEl.innerHTML = "";
  