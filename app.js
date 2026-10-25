const SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzxltVpWUzFoYu5uz-jzP1Dj8DBOJQ0y85UxXbPbLt6Ojo-AvAa2AKQ26AWzsx4G7yb/exec";

const questions = [
  {
    topic: "Python & interpreter",
    prompt: "What is Python?",
    options: [
      "A programming language",
      "A computer operating system",
      "A type of keyboard",
      "A web browser",
    ],
    answer: 0,
  },
  {
    topic: "Python & interpreter",
    prompt: "What does a Python interpreter do?",
    options: [
      "Translates and runs Python code",
      "Draws pictures on the screen",
      "Stores files in folders",
      "Connects a keyboard to a monitor",
    ],
    answer: 0,
  },
  {
    topic: "Python & interpreter",
    prompt: "Python is called a dynamically typed language. What does that mean?",
    options: [
      "You do not have to declare a variable's type in advance",
      "Every variable must always be a string",
      "Python only runs when connected to the internet",
      "Variables cannot change their values",
    ],
    answer: 0,
  },
  {
    topic: "Python & interpreter",
    prompt: "What is the value of <code>language</code> after these lines run?",
    code: 'language = "Python"<br>language = 3',
    options: [
      "The integer 3",
      'The string "Python"',
      "An error, because a variable's type cannot change",
      "The Boolean value True",
    ],
    answer: 0,
  },
  {
    topic: "Operators",
    prompt: "Which symbol is used for multiplication in Python?",
    options: ["*", "x", "×", "%"],
    answer: 0,
  },
  {
    topic: "Operators",
    prompt: "What is the result of <code>7 / 2</code> in Python?",
    options: ["3.5", "3", "1", "4"],
    answer: 0,
  },
  {
    topic: "Operators",
    prompt: "What is the result of <code>7 // 2</code>?",
    options: ["3", "3.5", "1", "2"],
    answer: 0,
  },
  {
    topic: "Operators",
    prompt: "What does the <code>%</code> operator give you?",
    options: [
      "The remainder after division",
      "The quotient as a decimal",
      "The product of two numbers",
      "The larger of two numbers",
    ],
    answer: 0,
  },
  {
    topic: "Operators",
    prompt: "What is the result of <code>2 ** 3</code>?",
    options: ["8", "6", "5", "9"],
    answer: 0,
  },
  {
    topic: "Data types",
    prompt: "Which value is an integer (<code>int</code>)?",
    options: ["12", '"12"', "12.0", "True"],
    answer: 0,
  },
  {
    topic: "Data types",
    prompt: "What is the data type of <code>3.14</code>?",
    options: ["float", "int", "str", "bool"],
    answer: 0,
  },
  {
    topic: "Data types",
    prompt: 'What is the data type of <code>"hello"</code>?',
    options: ["str", "int", "float", "bool"],
    answer: 0,
  },
  {
    topic: "Data types",
    prompt: "Which two values are Boolean values in Python?",
    options: ["True and False", "Yes and No", "1 and 2", "On and Off"],
    answer: 0,
  },
  {
    topic: "Data types",
    prompt: "What does <code>int(" + '"8"' + ")</code> produce?",
    options: ["The integer 8", 'The string "8"', "The float 8.0", "An error every time"],
    answer: 0,
  },
  {
    topic: "Indentation",
    prompt: "Why is indentation important in Python?",
    options: [
      "It marks which statements belong to a code block",
      "It makes variable names shorter",
      "It changes numbers into strings",
      "It tells Python to ignore a line",
    ],
    answer: 0,
  },
  {
    topic: "Indentation",
    prompt: "Which line is correctly indented inside an <code>if</code> block?",
    code: "if mark &gt; 50:",
    options: [
      "Four spaces, then <code>print(" + '"Pass"' + ")</code>",
      "<code>print(" + '"Pass"' + ")</code> starting at the far left",
      "A dash, then <code>print(" + '"Pass"' + ")</code>",
      "A comma, then <code>print(" + '"Pass"' + ")</code>",
    ],
    answer: 0,
  },
  {
    topic: "If / else",
    prompt: "Which keyword starts a conditional statement in Python?",
    options: ["if", "when", "check", "case"],
    answer: 0,
  },
  {
    topic: "If / else",
    prompt: "What does an <code>else</code> block do?",
    options: [
      "Runs when the <code>if</code> condition is false",
      "Runs only when the <code>if</code> condition is true",
      "Repeats the <code>if</code> condition forever",
      "Ends the Python program immediately",
    ],
    answer: 0,
  },
  {
    topic: "If / else",
    prompt: "Which operator checks whether two values are equal?",
    options: ["==", "=", "!=", ">"],
    answer: 0,
  },
  {
    topic: "If / else",
    prompt: "What is printed by this code?",
    code: "mark = 75<br>if mark &gt;= 50:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(" + '"Pass"' + ")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(" + '"Try again"' + ")",
    options: ['"Pass"', '"Try again"', "75", "Nothing"],
    answer: 0,
  },
  {
    topic: "If / else",
    prompt: "What is <code>elif</code> used for?",
    options: [
      "Checking another condition if earlier conditions were false",
      "Repeating a block of code",
      "Defining a new variable",
      "Ending a loop",
    ],
    answer: 0,
  },
  {
    topic: "For loops",
    prompt: "Which loop is commonly used to go through each item in a sequence?",
    options: ["for", "if", "else", "print"],
    answer: 0,
  },
  {
    topic: "For loops",
    prompt: "What numbers does <code>range(2, 6)</code> produce?",
    options: ["2, 3, 4, 5", "2, 3, 4, 5, 6", "1, 2, 3, 4, 5", "2, 6"],
    answer: 0,
  },
  {
    topic: "For loops",
    prompt: "What does <code>range(1, 6, 2)</code> produce?",
    options: ["1, 3, 5", "1, 2, 3, 4, 5", "1, 3, 5, 7", "2, 4, 6"],
    answer: 0,
  },
  {
    topic: "For loops",
    prompt: "How many times does this loop run?",
    code: "for i in range(4):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(i)",
    options: ["4 times", "3 times", "5 times", "It runs forever"],
    answer: 0,
  },
  {
    topic: "While loops",
    prompt: "When does a <code>while</code> loop keep running?",
    options: [
      "While its condition is True",
      "Only when its condition is False",
      "Exactly once, whatever the condition",
      "Only when it contains a <code>for</code> loop",
    ],
    answer: 0,
  },
  {
    topic: "While loops",
    prompt: "What is one way to prevent a <code>while</code> loop from running forever?",
    options: [
      "Update a value so the condition can eventually become False",
      "Remove the condition",
      "Indent the condition with extra spaces",
      "Replace <code>while</code> with <code>print</code>",
    ],
    answer: 0,
  },
  {
    topic: "While loops",
    prompt: "How many times does this loop print a number?",
    code: "count = 1<br>while count &lt; 4:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(count)<br>&nbsp;&nbsp;&nbsp;&nbsp;count += 1",
    options: ["3 times", "4 times", "1 time", "Forever"],
    answer: 0,
  },
  {
    topic: "Loops",
    prompt: "What does the <code>break</code> statement do inside a loop?",
    options: [
      "Stops the loop immediately",
      "Skips only the current print statement",
      "Restarts the loop from the beginning",
      "Pauses the loop for one second",
    ],
    answer: 0,
  },
  {
    topic: "Loops",
    prompt: "What is printed by this code?",
    code: "for number in range(1, 4):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(number)",
    options: ["1, then 2, then 3", "1, then 2, then 3, then 4", "0, then 1, then 2", "3 only"],
    answer: 0,
  },
];

questions.forEach((question, index) => {
  const rotation = (index * 3 + 1) % question.options.length;
  question.options = [
    ...question.options.slice(rotation),
    ...question.options.slice(0, rotation),
  ];
  question.answer =
    (question.answer - rotation + question.options.length) % question.options.length;
});

const startPanel = document.querySelector("#start-panel");
const quizPanel = document.querySelector("#quiz-panel");
const resultsPanel = document.querySelector("#results-panel");
const studentForm = document.querySelector("#student-form");
const quizForm = document.querySelector("#quiz-form");
const questionsContainer = document.querySelector("#questions");
const progressLabel = document.querySelector("#progress-label");
const progressBar = document.querySelector("#progress-bar");
const progressTrack = document.querySelector(".progress-track");
const submitError = document.querySelector("#submit-error");
const saveStatus = document.querySelector("#save-status");
const studentNameInput = document.querySelector("#student-name");
let studentName = "";

function renderQuestions() {
  questions.forEach((question, questionIndex) => {
    const card = document.createElement("section");
    card.className = "question-card";
    card.setAttribute("aria-labelledby", `question-title-${questionIndex}`);

    const meta = document.createElement("div");
    meta.className = "question-meta";

    const number = document.createElement("span");
    number.className = "question-number";
    number.textContent = `QUESTION ${String(questionIndex + 1).padStart(2, "0")}`;

    const topic = document.createElement("span");
    topic.className = "question-topic";
    topic.textContent = question.topic;
    meta.append(number, topic);

    const prompt = document.createElement("p");
    prompt.className = "question-prompt";
    prompt.id = `question-title-${questionIndex}`;
    prompt.innerHTML = question.prompt;

    const options = document.createElement("div");
    options.className = "options-list";

    question.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.className = "answer-option";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question-${questionIndex}`;
      input.value = String(optionIndex);
      input.addEventListener("change", updateProgress);
      const text = document.createElement("span");
      text.innerHTML = option;
      label.append(input, text);
      options.append(label);
    });

    card.append(meta, prompt);
    if (question.code) {
      const code = document.createElement("div");
      code.className = "question-prompt code-sample";
      code.innerHTML = question.code;
      card.append(code);
    }
    card.append(options);
    questionsContainer.append(card);
  });
}

function updateProgress() {
  const answered = questions.reduce(
    (count, _question, index) =>
      count + (quizForm.querySelector(`input[name="question-${index}"]:checked`) ? 1 : 0),
    0,
  );
  progressLabel.textContent = `${answered} of ${questions.length} answered`;
  progressBar.style.width = `${(answered / questions.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(answered));
}

function getResponses() {
  return questions.map((question, questionIndex) => {
    const selectedInput = quizForm.querySelector(
      `input[name="question-${questionIndex}"]:checked`,
    );
    const selectedIndex = selectedInput ? Number(selectedInput.value) : -1;
    return {
      question: question.prompt.replace(/<[^>]*>/g, ""),
      selectedAnswer: selectedIndex >= 0 ? question.options[selectedIndex].replace(/<[^>]*>/g, "") : "",
      correctAnswer: question.options[question.answer].replace(/<[^>]*>/g, ""),
      isCorrect: selectedIndex === question.answer,
    };
  });
}

function renderResults(responses) {
  const score = responses.filter((response) => response.isCorrect).length;
  document.querySelector("#result-name").textContent = studentName;
  document.querySelector("#score-value").textContent = String(score);
  document.querySelector("#score-message").textContent =
    score === questions.length
      ? "Perfect score! You’ve got these Python basics down."
      : score >= 24
        ? "Great job — you’ve built a strong foundation."
        : score >= 15
          ? "Good effort — review the answers below to keep improving."
          : "Thanks for giving it a try — the review below is a great place to practice.";

  const reviewList = document.querySelector("#review-list");
  reviewList.replaceChildren();
  responses.forEach((response, index) => {
    const item = document.createElement("article");
    item.className = `review-item ${response.isCorrect ? "is-correct" : "is-incorrect"}`;

    const number = document.createElement("p");
    number.className = "review-question-number";
    number.textContent = `QUESTION ${String(index + 1).padStart(2, "0")}`;

    const prompt = document.createElement("p");
    prompt.className = "review-prompt";
    prompt.innerHTML = questions[index].prompt;

    const yourAnswer = document.createElement("p");
    yourAnswer.className = "review-answer your-answer";
    const yourLabel = document.createElement("strong");
    yourLabel.textContent = "Your answer: ";
    yourAnswer.append(yourLabel, response.selectedAnswer || "No answer");

    item.append(number, prompt, yourAnswer);
    if (!response.isCorrect) {
      const correctAnswer = document.createElement("p");
      correctAnswer.className = "review-answer correct-answer";
      const correctLabel = document.createElement("strong");
      correctLabel.textContent = "Correct answer: ";
      correctAnswer.append(correctLabel, response.correctAnswer);
      item.append(correctAnswer);
    }
    reviewList.append(item);
  });

  document.querySelector("#review-count").textContent =
    `${questions.length - score} to review`;
  startPanel.hidden = true;
  quizPanel.hidden = true;
  resultsPanel.hidden = false;
  resultsPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function saveResponses(responses, score) {
  if (!SHEETS_WEB_APP_URL) {
    saveStatus.textContent =
      "Your score is ready. Your teacher has not connected a Google Sheet yet.";
    saveStatus.dataset.state = "error";
    return;
  }

  saveStatus.textContent = "Sending your answers to your teacher’s Google Sheet…";
  saveStatus.dataset.state = "pending";
  try {
    await fetch(SHEETS_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body: JSON.stringify({
        studentName,
        score,
        total: questions.length,
        responses,
      }),
    });
    saveStatus.textContent =
      "Your submission request was sent, but this page cannot confirm it was saved. Please check with your teacher if you don’t see it in the Sheet.";
    saveStatus.dataset.state = "pending";
  } catch {
    saveStatus.textContent =
      "We couldn’t send your answers. Please take a screenshot of your score and tell your teacher.";
    saveStatus.dataset.state = "error";
  }
}

renderQuestions();

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  studentName = studentNameInput.value.trim();
  if (!studentName) {
    studentNameInput.focus();
    return;
  }
  startPanel.hidden = true;
  quizPanel.hidden = false;
  quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstUnanswered = questions.findIndex(
    (_question, index) => !quizForm.querySelector(`input[name="question-${index}"]:checked`),
  );
  if (firstUnanswered !== -1) {
    submitError.textContent = `Please answer question ${firstUnanswered + 1} before finishing.`;
    submitError.hidden = false;
    quizForm.querySelector(`input[name="question-${firstUnanswered}"]`).focus();
    return;
  }
  submitError.hidden = true;
  const responses = getResponses();
  const score = responses.filter((response) => response.isCorrect).length;
  renderResults(responses);
  saveResponses(responses, score);
});

document.querySelector("#restart-button").addEventListener("click", () => {
  studentForm.reset();
  quizForm.reset();
  studentName = "";
  updateProgress();
  saveStatus.textContent = "";
  saveStatus.removeAttribute("data-state");
  startPanel.hidden = false;
  resultsPanel.hidden = true;
  startPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});
