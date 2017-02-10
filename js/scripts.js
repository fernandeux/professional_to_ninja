// Manipulação do DOM

var $question = document.getElementById("question");
var $score = document.getElementById('score');
var $feedback = document.getElementById('feedback');
// Funções da View

function update(element,content,klass){
	var p = element.firstChild || document.createElement('p');
	p.textContent = content;
	element.appendChild(p);
	if(klass){
		p.className = klass;
	}
}

// Mensagem de boas vindas ao usuário
//	alert("Welcome to Quiz Ninja!");

var quiz = {
	"name": "Super Hero Name Quiz",
	"description": "How many super heroes can you name?",
	"question": "What is the real name of ",
	"questions": [{"question": "Superman", "answer": "Clarke Kent"},
				  {"question": "Batman", "answer": "Bruce Wayne"},
				  {"question": "Wonder Woman", "answer": "Dianna Prince"}]
};

var score = 0; // Inicializando a pontuação em 0

update($score,score);

play(quiz);

function play(quiz){
	// looping principal do jogo
	for(var i = 0, question, answer, max = quiz.questions.length; i < max; i++) {
		question = quiz.questions[i].question;
		answer = ask(question);
		check(answer);
	} // Fim do Loop principal

	// Função que faz a pergunta ao jogador
	function ask(question){
		update($question,quiz.question + question);
		return prompt("Enter your answer: ");
	}

	// Função que verifica se a resposta está correta
	function check(answer){
		if(answer === quiz.questions[i].answer){
			update($feedback,"Correct","right");
			score++; //Adiciona um ponto na pontuação
			update($score,score);
		} else {
			update($feedback,"Wrong!","wrong");
	}
}
	gameOver()
}

// Função que informa ao jogador que o jogo finalizou e o placar obtido
function gameOver(){
	update($question, "Game Over, you scored " + score + " points!" );
}
	


