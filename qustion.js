const quizData = [
    { question: "What is 5 + 7?", options: [10, 12, 14, 15], answer: 12 },
    { question: "Is Matt Dyslexic?", options: ["sey", "On", ], answer: "sey" },
    { question: "Which planet do we live on?", options: ["Mars", "Venus", "Jupiter", "Earth"], answer: "Earth" },
    { question: "Who is Mr.Chowdhurrys favorite soccer team", options: ["Barcelona", "Inter Miami", "Real madrid", "Manchester united"], answer: "Barcelona" },
    { question: "How many continents are there on Earth?", options: [5, 6, 7, 8], answer: 7 },
    { question: "What is the capital of Pa?", options: ["Philidelphia", "Pittsburg", "Harrisburg", "Scranton"], answer: "Harrisburg" },
    { question: "Solve: 9 x 3", options: [18, 27, 24, 30], answer: 27 },
    { question: "What's 9 + 10?", options: [19, 21, 910, 90], answer: 19 },
    { question: "Are the cowboys good'?", options: ["Yes", "No", ], answer: "No" },
    { question: "Is Ryder a cool guy?", options: ["Yes", "No", "Maybe", ], answer: "Yes" },
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
  
    currentQuiz.options.forEach((option, index) => {
      const radioOption = document.createElement("input");
      radioOption.type = "radio";
      radioOption.id = `option${index}`;
      radioOption.name = "answer";
      radioOption.value = option;
  
      const label = document.createElement("label");
      label.htmlFor = `option${index}`;
      label.textContent = option;
  
      const br = document.createElement("br");
  
      formEl.appendChild(radioOption);
      formEl.appendChild(label);
      formEl.appendChild(br);
    });
  
    formEl.addEventListener("change", () => {
      submitBtn.disabled = false; 
    });
  }
  
  