// Quiz Data
const quizQuestions = [
  {
    q: "Where did Kuchipudi originate?",
    a: "B",
    options: ["Tamil Nadu", "Andhra Pradesh", "Karnataka"]
  },
  {
    q: "Which element is unique in Kuchipudi?",
    a: "C",
    options: ["Ballet moves", "Solo-only style", "Dance-drama storytelling"]
  },
  {
    q: "Which deity is often depicted in Kuchipudi?",
    a: "A",
    options: ["Lord Krishna", "Lord Shiva", "Goddess Lakshmi"]
  }
];

let currentQ = 0;

function loadQuizQuestion() {
  const q = quizQuestions[currentQ];
  document.getElementById('quizQuestion').innerText = q.q;
  document.getElementById('optionA').innerText = "A. " + q.options[0];
  document.getElementById('optionB').innerText = "B. " + q.options[1];
  document.getElementById('optionC').innerText = "C. " + q.options[2];
  document.getElementById('quizResult').innerText = '';
}

function checkQuizAnswer(ans) {
  if (ans === quizQuestions[currentQ].a) {
    document.getElementById('quizResult').innerText = " Correct!";
  } else {
    document.getElementById('quizResult').innerText = " Try Again.";
  }
  currentQ++;
  if (currentQ < quizQuestions.length) {
    setTimeout(loadQuizQuestion, 1500);
  } else {
    setTimeout(() => {
      document.getElementById('quizResult').innerText = "🎉 Quiz Completed!";
      document.getElementById('quizQuestion').innerText = "";
      document.getElementById('optionA').style.display = 'none';
      document.getElementById('optionB').style.display = 'none';
      document.getElementById('optionC').style.display = 'none';
    }, 2000);
  }
}

loadQuizQuestion();

// Fetch Joke from API
async function getJoke() {
  const res = await fetch('https://official-joke-api.appspot.com/jokes/random');
  const data = await res.json();
  document.getElementById('jokeText').innerText = `${data.setup} - ${data.punchline}`;
}
