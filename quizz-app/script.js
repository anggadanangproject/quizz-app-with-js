const quizData = [
{
	question: 'How old is Florin?',
	a: '10',
	b: '17',
	c: '26',
	d: '120',
	correct: 'a'
},
{
	question: 'What us the most used programming language in 2019?',
	a: 'Java',
	b: 'C',
	c: 'Python',
	d: 'JavaScript',
	correct: 'a'
},
{
	question: 'Who is the President of US?',
	a: 'florin Pop',
	b: 'Donald Trump',
	c: 'Ivan Soldano',
	d: 'Minal Andrei',
	correct: 'b'
},
{
	question: 'What does HTML stand for?',
	a: 'Hypertext Markup language',
	b: 'Cascanding Style Sheet',
	c: 'Jasson Object Notation',
	d: 'Hellicopters Terminals Motorboats',
	correct: 'a'
},
{
	question: 'What year was JavaScript launched?',
	a: '1996',
	b: '1995',
	c: '1994',
	d: 'none of the above',
	correct: 'a'
}
]


const questionEl = document.getElementById("question");
const quizEl = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answersEls = document.querySelectorAll(".answer")
let currentQuiz = 0
let score = 0
loadQuiz();

function loadQuiz(){
deselectAnswers();
const currentQuizData = quizData[currentQuiz]
questionEl.innerHTML = currentQuizData.question;
a_text.innerHTML = currentQuizData.a
b_text.innerHTML = currentQuizData.b
c_text.innerHTML = currentQuizData.c
d_text.innerHTML = currentQuizData.d
}

function getSelected(){
let answer = undefined;
answersEls.forEach((answerEl)=>{
if (answerEl.checked) {
	answer = answerEl.id
}
})

return answer;
}

function deselectAnswers(){
	answersEls.forEach((answerEl)=>{
	answerEl.checked = false;
})
}
submitBtn.addEventListener('click', () => {
	const answer = getSelected();
	if (answer) {
		if (answer == quizData[currentQuiz].correct) {
			score++
		}
		currentQuiz++;
		currentQuiz < quizData.length ?
		loadQuiz() : quizEl.innerHTML = "<h2>Your Score " + score + "/"+quizData.length+ " Question.</h2><button onclick='location.reload()'>Reload</button>";
	}
	
	
})