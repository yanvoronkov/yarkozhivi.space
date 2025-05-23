const quizData = {
	blocks: [
		{
			title: "Отверженность",
			questions: [
				"Я опасаюсь, что близкие уйдут из моей жизни.",
				"Мне трудно надеяться — это кажется наивным.",
				"Я очень тоскую, когда близкого человека нет рядом.",
				"Я постоянно влюбляюсь в людей, неспособных на серьезные отношения.",
				"Я часто беспокоюсь, что люди, которых я люблю, найдут кого-то, кто им больше понравится, и бросят меня.",
				"Я фактически росла без родителя (умер или отсутствовал физически).",
				"Я слишком сильно нуждаюсь в других людях, чтобы со мной были рядом.",
				"Я так боюсь, что люди бросят меня, что своими действиями отталкиваю их.",
				"Я впадаю в отчаяние, когда кто-то, кого я люблю, отдаляется от меня.",
				"В конце концов я останусь в одиночестве."
			]
		},
		{
			title: "Недоверчивость",
			questions: [
				"Мне нужно защищать себя самой и всегда быть начеку.",
				"Близкие люди несколько раз меня предавали, унижали или глубоко оскорбляли.",
				"Если я не буду осторожнее, люди станут использовать меня в своих интересах.",
				"Пройдет какое-то время, и люди, которых я люблю, предадут меня.",
				"Я боюсь подпускать людей близко, потому что не хочу, чтобы мне причинили боль.",
				"Я стараюсь обидеть людей до того, как они ранят меня.",
				"Я часто сомневаюсь в мотивах действий других людей.",
				"Я ожидаю, что люди обидят или используют меня.",
				"Я злюсь, когда думаю о том, как плохо со мной обращались.",
				"Я подвергалась физическому, эмоциональному или сексуальному насилию от тех, кто должен был заботиться обо мне."
			]
		}
	]
};

class Quiz {
	constructor() {
		this.currentBlock = 0;
		this.currentQuestion = 0;
		this.answers = {};
		this.results = {};
		this.questionsPerBlock = 10;
		this.totalBlocks = quizData.blocks.length;
		this.blockStates = {}; // Для хранения состояния каждого блока

		this.initializeElements();
		this.attachEventListeners();
	}

	initializeElements() {
		this.welcomeScreen = document.getElementById('welcome-screen');
		this.quizScreen = document.getElementById('quiz-screen');
		this.finalResults = document.getElementById('final-results');
		this.startButton = document.getElementById('start-quiz');
		this.nextBlockButton = document.getElementById('next-block');
		this.currentBlockTitle = document.getElementById('current-block-title');
		this.currentQuestionElement = document.getElementById('current-question');
		this.answerButtons = document.querySelectorAll('.answer-btn');
		this.progressBar = document.querySelector('.progress');
		this.resultsContainer = document.getElementById('results-container');
		this.blockResults = document.getElementById('block-results');
		this.allResults = document.getElementById('all-results');
		this.blockCounter = document.getElementById('block-counter');
		this.questionCounter = document.getElementById('question-counter');
		this.questionContainer = document.querySelector('.question-container');
	}

	attachEventListeners() {
		this.startButton.addEventListener('click', () => this.startQuiz());
		this.nextBlockButton.addEventListener('click', () => this.nextBlock());
		this.answerButtons.forEach(button => {
			button.addEventListener('click', (e) => this.handleAnswer(e));
		});
	}

	startQuiz() {
		this.welcomeScreen.classList.remove('active');
		this.quizScreen.classList.add('active');
		this.showCurrentQuestion();
	}

	showCurrentQuestion() {
		const block = quizData.blocks[this.currentBlock];
		const questions = this.shuffleArray([...block.questions]);
		const question = questions[this.currentQuestion];

		this.currentBlockTitle.textContent = block.title;
		this.currentQuestionElement.textContent = question;

		// Обновляем счетчики
		this.blockCounter.textContent = `Блок ${this.currentBlock + 1} из ${this.totalBlocks}`;
		this.questionCounter.textContent = `Вопрос ${this.currentQuestion + 1} из ${this.questionsPerBlock}`;

		// Сбрасываем стили кнопок
		this.resetAnswerButtons();

		// Скрываем результаты и показываем вопрос
		this.resultsContainer.classList.remove('visible');
		this.resultsContainer.classList.add('hidden');

		// Показываем контейнер с вопросом
		this.questionContainer.classList.remove('hidden');
		setTimeout(() => {
			this.questionContainer.classList.add('visible');
		}, 50);

		this.updateProgress();
	}

	resetAnswerButtons() {
		this.answerButtons.forEach(btn => {
			btn.classList.remove('selected');
			btn.classList.remove('disabled');
		});
	}

	handleAnswer(event) {
		const value = parseInt(event.target.dataset.value);
		const blockTitle = quizData.blocks[this.currentBlock].title;

		if (!this.answers[blockTitle]) {
			this.answers[blockTitle] = [];
		}

		this.answers[blockTitle].push(value);

		this.answerButtons.forEach(btn => btn.classList.remove('selected'));
		event.target.classList.add('selected');

		setTimeout(() => {
			if (this.currentQuestion < this.questionsPerBlock - 1) {
				// Скрываем текущий вопрос с анимацией
				this.questionContainer.classList.remove('visible');

				setTimeout(() => {
					this.questionContainer.classList.add('hidden');
					this.currentQuestion++;
					this.showCurrentQuestion();
				}, 500);
			} else {
				this.showBlockResults();
			}
		}, 500);
	}

	showBlockResults() {
		const blockTitle = quizData.blocks[this.currentBlock].title;
		const sum = this.answers[blockTitle].reduce((a, b) => a + b, 0);
		let interpretation = '';

		if (sum <= 9) interpretation = 'Очень низкий. Вероятно, эта ловушка к вам не относится.';
		else if (sum <= 19) interpretation = 'Довольно низкий. Эта ловушка актуальна лишь изредка.';
		else if (sum <= 29) interpretation = 'Средний. Эта ловушка может быть проблемой в вашей жизни.';
		else if (sum <= 39) interpretation = 'Высокий. Это совершенно точно важная ловушка для вас.';
		else interpretation = 'Очень высокий. Это совершенно точно одна из основных ваших ловушек.';

		// Сохраняем состояние блока
		this.blockStates[blockTitle] = {
			answers: [...this.answers[blockTitle]],
			sum: sum,
			interpretation: interpretation
		};

		this.results[blockTitle] = { sum, interpretation };

		// Скрываем контейнер с вопросом и показываем результаты
		this.questionContainer.classList.remove('visible');
		setTimeout(() => {
			this.questionContainer.classList.add('hidden');

			this.blockResults.innerHTML = `
				<div class="result-item">
					<h3>${blockTitle}</h3>
					<p>Баллы: ${sum}</p>
					<p>${interpretation}</p>
				</div>
			`;
			this.resultsContainer.classList.remove('hidden');
			setTimeout(() => {
				this.resultsContainer.classList.add('visible');
			}, 50);

			// Если это последний блок, меняем текст кнопки
			if (this.currentBlock === this.totalBlocks - 1) {
				this.nextBlockButton.textContent = 'Перейти к результатам теста';
			}
		}, 500);
	}

	nextBlock() {
		this.currentBlock++;
		this.currentQuestion = 0;

		if (this.currentBlock < this.totalBlocks) {
			// Скрываем результаты с анимацией
			this.resultsContainer.classList.remove('visible');
			setTimeout(() => {
				this.resultsContainer.classList.add('hidden');
				this.showCurrentQuestion();
			}, 500);
		} else {
			this.showFinalResults();
		}
	}

	showFinalResults() {
		this.quizScreen.classList.remove('active');
		this.finalResults.classList.add('active');

		let resultsHTML = '';
		for (const [block, state] of Object.entries(this.blockStates)) {
			resultsHTML += `
				<div class="result-item">
					<h3>${block}</h3>
					<p>Баллы: ${state.sum}</p>
					<p>${state.interpretation}</p>
				</div>
			`;
		}

		this.allResults.innerHTML = resultsHTML;
	}

	updateProgress() {
		const totalQuestions = this.totalBlocks * this.questionsPerBlock;
		const currentProgress = (this.currentBlock * this.questionsPerBlock + this.currentQuestion + 1) / totalQuestions * 100;
		this.progressBar.style.width = `${currentProgress}%`;
	}

	shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}
}

// Инициализация квиза при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
	new Quiz();
}); 