// --- ДАННЫЕ КВИЗА ---
// ... (остальной код quizData без изменений) ...
const quizData = {
	blocks: [
		{
			title: "Отверженность",
			questions: ["Я опасаюсь, что близкие уйдут из моей жизни.", "Мне трудно надеяться — это кажется наивным.", "Я очень тоскую, когда близкого человека нет рядом.", "Я постоянно влюбляюсь в людей, неспособных на серьезные отношения.", "Я часто беспокоюсь, что люди, которых я люблю, найдут кого-то, кто им больше понравится, и бросят меня.", "Я фактически росла без родителя (умер или отсутствовал физически).", "Я слишком сильно нуждаюсь в других людях, чтобы со мной были рядом.", "Я так боюсь, что люди бросят меня, что своими действиями отталкиваю их.", "Я впадаю в отчаяние, когда кто-то, кого я люблю, отдаляется от меня.", "В конце концов я останусь в одиночестве."]
		},
		{
			title: "Недоверчивость",
			questions: ["Мне нужно защищать себя самой и всегда быть начеку.", "Близкие люди несколько раз меня предавали, унижали или глубоко оскорбляли.", "Если я не буду осторожнее, люди станут использовать меня в своих интересах.", "Пройдет какое-то время, и люди, которых я люблю, предадут меня.", "Я боюсь подпускать людей близко, потому что не хочу, чтобы мне причинили боль.", "Я стараюсь обидеть людей до того, как они ранят меня.", "Я часто сомневаюсь в мотивах действий других людей.", "Я ожидаю, что люди обидят или используют меня.", "Я злюсь, когда думаю о том, как плохо со мной обращались.", "Я подвергалась физическому, эмоциональному или сексуальному насилию от тех, кто должен был заботиться обо мне."]
		},
		{
			title: "Несостоятельность",
			questions: ["У меня нет «достаточно весомых» достижений.", "Я сдаюсь раньше времени.", "Я малого достигла, и мне стыдно за это.", "Большинство других людей талантливее меня, например в семейной жизни, работе и учебе.", "Я не достаточно компетентна, как большинство людей в моей профессиональной области.", "Большинство людей достигает лучших результатов в работе.", "У меня часто нет сил бороться за свои цели.", "Я испытываю унижение от своих неудач.", "Я способна на большее.", "Я боюсь, что люди увидят, какая я глупая."]
		},
		{
			title: "Самопожертвование",
			questions: ["Мои отношения страдают из-за того, что я так много работаю.", "Моё здоровье страдает из-за того, что я уделяю работе слишком много времени.", "Я чувствую себя виноватой, когда расстраиваю других людей.", "Я испытываю чувство вины, если ставлю в приоритет свои нужды.", "Я именно тот, кто заботится о близких людях.", "Я хороший человек, потому что думаю о других больше, чем о себе.", "Вне зависимости от уровня занятости, я всегда нахожу время для других людей.", "Я умею обходиться малым.", "Мне сложно принять заботу — я сразу думаю, чем «отплатить».", "Мне приятнее дарить, чем принимать подарки."]
		},
		{
			title: "Отчужденность",
			questions: ["Я чувствую, что не вписываюсь в большинство коллективов.", "Моя семья отличалась от других семей.", "Люди редко принимают меня за свою.", "Я чувствую себя скучной и унылым на вечеринках и в других группах людей.", "Я теряюсь, когда мне нужно что-то сказать на аудиторию.", "Я предпочитаю избегать мероприятий и дел, которые требуют общения с людьми.", "Те, кого я хочу видеть своими друзьями, превосходят меня (статусом, внешностью, интеллектуально).", "Я чувствую, что сильно отличаюсь от других людей.", "Я чувствую себя хуже других, непривлекательной- слишком полной/худой, высокой/низкой, не стильной т. д.", "В целом я чувствую себя оторванной от общества."]
		},
		{
			title: "Недисциплинированность",
			questions: ["Мне сложно доводить начатое до конца.", "Я часто делаю то, что хочется «прямо сейчас».", "У меня срывы — в еде, покупках, эмоциях.", "Я не люблю рамки и правила.", "Я легко отказываюсь от плана, если становится трудно.", "Я быстро устаю и бросаю.", "Я часто жалею о спонтанных решениях.", "Я не умею себя организовать.", "Я легко раздражаюсь, если не по-моему.", "Мне трудно придерживаться режима, целей, решений."]
		},
		{
			title: "Недолюбленность",
			questions: ["Я не получаю от близких столько тепла, сколько мне нужно.", "Мне тяжело позволить людям любить меня.", "Меня часто привлекают равнодушные партнеры, неспособные удовлетворить мои нужды.", "В моей жизни не было ни одного любимого человека, который посвящал бы себя мне и был бы неравнодушен к тому, что со мной происходит.", "Мне тяжело позволить людям заботиться или защищать меня, хотя в душе я хочу именно этого.", "Я не получаю достаточно объятий, ласки и любви в близких отношениях.", "Я привыкла справляться одна.", "Мой партнер или члены семьи не понимают, чего мне «постоянно не хватает».", "Мне часто бывает одиноко.", "У меня нет никого, кто мог бы по-настояшему выслушать меня и понять мои настоящие чувства и потребности."]
		},
		{
			title: "Перфекционизм",
			questions: ["Я должна быть лучшей во всем, что я делаю, и не могу быть хуже других.", "Мне всегда важно выглядеть наилучшим образом.", "Я стараюсь держать почти все в идеальном порядке.", "У меня так много дел, что почти нет времени, чтобы по-настоящему расслабиться.", "Моя личная жизнь страдает, потому что я слишком требовательна к себе и другим.", "Почти ничего из того, что я делаю, не является достаточно хорошим; я всегда могу сделать лучше.", "Я часто жертвую удовольствием и счастьем, чтобы соответствовать собственным стандартам.", "Мое здоровье страдает, потому что я испытываю сильное напряжение.", "Я стараюсь делать все как можно лучше и не приемлю, когда говорят, что «и так уже достаточно хорошо».", "Богатство и статус для меня очень важны."]
		},
		{
			title: "Надменность",
			questions: ["Мне очень трудно принять «нет» в качестве ответа, когда я чего-то хочу от других людей.", "Я требую, чтобы люди поступали так, как я хочу.", "Я считаю, что заслуживаю особого отношения.", "Я ненавижу, когда меня ограничивают или мешают делать то, что я хочу.", "Я ставлю свои нужды на первое место.", "Мне очень трудно заставить себя бросить вредные привычки или иначе скорректировать свое поведение.", "Я не могу заставить себя делать скучную или рутинную работу.", "Я действую импульсивно и потом испытываю проблемы из-за своих эмоций.", "Если я не могу достичь цели, я легко раздражаюсь и сдаюсь.", "Мне трудно отказаться от мгновенного вознаграждения, чтобы достичь долгосрочной цели."]
		},
		{
			title: "Пессимизм",
			questions: ["Я склонна делать пессимистичные прогнозы.", "Иногда мне тяжело спать от беспокойства по поводу возможных событий.", "Когда люди рассказывают мне об идеях или проектах, мне хочется предупредить их о том, что может пойти не так.", "Я стараюсь быть реалистом.", "Я часто чувствую себя бессильной перед обстоятельствами.", "Я тревожный человек.", "Меня очень беспокоят плохие новости: преступность, проблемы окружающей среды и так далее.", "Лучше заранее ожидать плохое, чтобы не разочароваться.", "Я всегда замечаю, что может пойти не так — и обычно так и происходит.", "Если случается что-то хорошее, я боюсь, что за этим последует плохое событие."]
		},
		{
			title: "Неполноценность",
			questions: ["Я виновата в том, что родители меня не любили. Это со мной что-то не так.", "Как бы я ни старалась, я чувствую, что не смогу добиться уважения и признания со стороны важного для меня человека.", "Я не заслуживаю любви, внимания и уважения других.", "У меня есть секреты, которыми я не хочу делиться даже с самыми близкими людьми.", "Если бы другие узнали о моих недостатках, мне было бы ужасно стыдно.", "Я не открываюсь до конца и скрываю себя настоящую.", "У меня были отношения, в которых мне постоянно говорили, что я все делаю не так.", "Ни один человек не полюбит меня, если узнает меня настоящую.", "Я обесцениваю свои положительные качества.", "Я сама часто критикую и отвергаю себя, особенно перед теми, кто, кажется, меня любит."]
		},
		{
			title: "Сдержанность",
			questions: ["Я чувствую, что должна контролировать свои эмоции и импульсы.", "Я воспринимаю жизнь как борьбу, где все дается с трудом.", "Мне сложно быть спонтанной — я всё планирую заранее.", "Я себя контролирую настолько, что кажусь окружающим равнодушной.", "Я боюсь показаться нелепой и смешной.", "Я не знаю как и стесняюсь проявлять симпатию и заботу.", "Говорят, что я слишком серьезная, редко смеюсь или позволяю себе просто веселиться.", "Мне сложно флиртовать, шутить, быть легкой в общении.", "Внутри накапливается много гнева и обиды, которых я не выражаю.", "Я чувствую себя уставшей от того, что должна быть «собранной» всё время."]
		}
	]
};

// ... код плагина dataLabelsPlugin (он нужен для цифр на диаграмме) ...
const dataLabelsPlugin = { id: 'customDataLabels', afterDatasetsDraw: (chart, args, pluginOptions) => { const { ctx, data } = chart; ctx.save(); ctx.font = `bold ${pluginOptions.fontSize || 12}px ${pluginOptions.fontFamily || 'Arial'}`; ctx.fillStyle = pluginOptions.fontColor || '#333'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; data.datasets.forEach((dataset, i) => { const meta = chart.getDatasetMeta(i); if (!meta.hidden) { meta.data.forEach((element, index) => { const value = dataset.data[index]; let xPos = element.x + (pluginOptions.xOffset || 5); let yPos = element.y + (pluginOptions.yOffset || 0); if (xPos + ctx.measureText(value).width > chart.chartArea.right - 5) { xPos = element.x - (pluginOptions.xOffset || 5); ctx.textAlign = 'right'; } else { ctx.textAlign = 'left'; } ctx.fillText(value, xPos, yPos); }); } }); ctx.restore(); } };

class Quiz {
	constructor() {
		this.allQuestions = [];
		this.userAnswers = []; // Новый массив для хранения ответов
		this.results = [];
		this.currentQuestionIndex = 0;
		this.chart = null;

		this.initializeElements();
		this.attachEventListeners();
	}

	initializeElements() {
		this.welcomeScreen = document.getElementById('welcome-screen');
		this.quizScreen = document.getElementById('quiz-screen');
		this.finalResultsScreen = document.getElementById('final-results');
		this.startButton = document.getElementById('start-quiz');
		this.restartButton = document.getElementById('restart-quiz');
		this.prevButton = document.getElementById('prev-question'); // Новая кнопка
		this.nextButton = document.getElementById('next-question'); // Новая кнопка

		this.currentQuestionElement = document.getElementById('current-question');
		this.questionContainer = document.querySelector('.question-container');
		this.questionCounter = document.getElementById('question-counter');

		this.answerButtons = document.querySelectorAll('.answer-btn');
		this.progressBar = document.querySelector('.progress');
		this.resultsChartCanvas = document.getElementById('results-chart');
	}

	attachEventListeners() {
		this.startButton.addEventListener('click', () => this.startQuiz());
		this.restartButton.addEventListener('click', () => this.restartQuiz());

		// Новые обработчики
		this.prevButton.addEventListener('click', () => this.navigate(-1));
		this.nextButton.addEventListener('click', () => this.navigate(1));
		document.addEventListener('keydown', (e) => this.handleKeyPress(e));

		this.answerButtons.forEach(button => {
			button.addEventListener('click', (e) => this.handleAnswer(e));
		});
	}

	// Новая функция для навигации по клавишам
	handleKeyPress(e) {
		if (this.quizScreen.classList.contains('active')) {
			if (e.key === 'ArrowLeft') {
				this.navigate(-1);
			} else if (e.key === 'ArrowRight') {
				this.navigate(1);
			}
		}
	}

	startQuiz() {
		this.prepareQuestions();
		// Инициализируем массив ответов null-значениями
		this.userAnswers = new Array(this.allQuestions.length).fill(null);
		this.results = new Array(quizData.blocks.length).fill(0);
		this.currentQuestionIndex = 0;

		if (this.chart) {
			this.chart.destroy();
		}

		this.welcomeScreen.classList.remove('active');
		this.finalResultsScreen.classList.remove('active');
		this.quizScreen.classList.add('active');

		this.showCurrentQuestion();
	}

	restartQuiz() {
		this.startQuiz();
	}

	prepareQuestions() {
		// ... код не изменился ...
		this.allQuestions = [];
		quizData.blocks.forEach((block, blockIndex) => {
			block.questions.forEach(questionText => {
				this.allQuestions.push({
					text: questionText,
					blockIndex: blockIndex
				});
			});
		});
		for (let i = this.allQuestions.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.allQuestions[i], this.allQuestions[j]] = [this.allQuestions[j], this.allQuestions[i]];
		}
	}

	// Новая функция для навигации
	navigate(direction) {
		const newIndex = this.currentQuestionIndex + direction;

		// Проверяем, чтобы не выйти за пределы массива вопросов
		if (newIndex >= 0 && newIndex < this.allQuestions.length) {
			this.currentQuestionIndex = newIndex;
			this.showCurrentQuestion();
		}
	}

	showCurrentQuestion() {
		this.questionContainer.classList.remove('visible');

		setTimeout(() => {
			const question = this.allQuestions[this.currentQuestionIndex];
			this.currentQuestionElement.textContent = question.text;
			this.questionCounter.textContent = `Вопрос ${this.currentQuestionIndex + 1} из ${this.allQuestions.length}`;

			this.updateProgress();
			this.updateNavigationButtons();
			this.highlightSavedAnswer();

			this.questionContainer.classList.add('visible');
		}, 200); // Уменьшил задержку для более быстрой навигации
	}

	highlightSavedAnswer() {
		this.resetAnswerButtons();
		const savedAnswer = this.userAnswers[this.currentQuestionIndex];
		if (savedAnswer !== null) {
			const selectedBtn = document.querySelector(`.answer-btn[data-value="${savedAnswer}"]`);
			if (selectedBtn) {
				selectedBtn.classList.add('selected');
			}
		}
	}

	resetAnswerButtons() {
		this.answerButtons.forEach(btn => btn.classList.remove('selected'));
	}

	handleAnswer(event) {
		const value = parseInt(event.target.dataset.value, 10);
		// Просто сохраняем ответ в массив
		this.userAnswers[this.currentQuestionIndex] = value;

		this.highlightSavedAnswer();

		// Автоматически переходим к следующему вопросу
		setTimeout(() => {
			if (this.currentQuestionIndex < this.allQuestions.length - 1) {
				this.navigate(1);
			} else {
				this.showFinalResults();
			}
		}, 400);
	}

	updateProgress() {
		// Прогресс теперь зависит от количества отвеченных вопросов
		const answeredCount = this.userAnswers.filter(answer => answer !== null).length;
		const progressPercentage = (answeredCount / this.allQuestions.length) * 100;
		this.progressBar.style.width = `${progressPercentage}%`;
	}

	updateNavigationButtons() {
		this.prevButton.disabled = this.currentQuestionIndex === 0;
		this.nextButton.disabled = this.currentQuestionIndex === this.allQuestions.length - 1;
	}

	showFinalResults() {
		this.calculateFinalScores(); // Сначала считаем результаты

		this.quizScreen.classList.remove('active');
		this.finalResultsScreen.classList.add('active');
		this.progressBar.style.width = `100%`;

		this.createChart();
	}

	// Новая функция для финального подсчета
	calculateFinalScores() {
		this.results = new Array(quizData.blocks.length).fill(0);
		this.allQuestions.forEach((question, index) => {
			const answerValue = this.userAnswers[index];
			if (answerValue !== null) { // Учитываем только отвеченные вопросы
				this.results[question.blockIndex] += answerValue;
			}
		});
	}

	createChart() {
		// ... код этой функции не изменился, просто скопируйте его из предыдущей версии ...
		const labels = quizData.blocks.map(block => block.title);
		const data = this.results;
		const ctx = this.resultsChartCanvas.getContext('2d');
		const backgroundColors = ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 206, 86, 0.8)', 'rgba(75, 192, 192, 0.8)', 'rgba(153, 102, 255, 0.8)', 'rgba(255, 159, 64, 0.8)', 'rgba(139, 195, 74, 0.8)', 'rgba(25, 130, 196, 0.8)', 'rgba(106, 76, 147, 0.8)', 'rgba(249, 87, 56, 0.8)', 'rgba(0, 168, 150, 0.8)', 'rgba(229, 107, 111, 0.8)'];
		const borderColors = backgroundColors.map(color => color.replace('0.8', '1'));

		if (this.chart) {
			this.chart.destroy();
		}
		this.chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: labels,
				datasets: [{
					label: 'Баллы',
					data: data,
					backgroundColor: backgroundColors,
					borderColor: borderColors,
					borderWidth: 1,
					borderRadius: 5,
					borderSkipped: false,
				}]
			},
			options: {
				indexAxis: 'y',
				responsive: true,
				maintainAspectRatio: false,
				layout: { padding: { left: 10 } },
				plugins: {
					legend: { display: false },
					tooltip: { enabled: true },
					customDataLabels: { fontColor: getComputedStyle(document.documentElement).getPropertyValue('--text-color').trim() || '#333', fontSize: 13, fontFamily: getComputedStyle(document.body).fontFamily || 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', xOffset: 8 }
				},
				scales: {
					x: { beginAtZero: true, max: 50, grid: { display: false }, ticks: { font: { size: 14 } } },
					y: { grid: { display: false }, ticks: { font: { size: 11 } } }
				}
			},
			plugins: [dataLabelsPlugin]
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	new Quiz();
});