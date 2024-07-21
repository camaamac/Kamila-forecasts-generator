const predictions = [
    'Тебе улыбнется удача!',
    'Получишь море радости!',
    'Сегодня узнаешь что-то новое!',
    'Это один из лучших дней!',
    'Не унывай и всё получится!'
];

function getRandomPrediction() {
    return predictions[Math.floor(Math.random() * predictions.length)];
}

const forecastButton = document.querySelector('.forecast-btn');
const currentForecastTitle = document.querySelector('.current-forecast h1');
const currentForecastProbability = document.querySelector('.current-forecast p');
const forecastsList = document.querySelector('.forecasts');
const forecastTemplate = document.getElementById('forecast-item');

forecastButton.addEventListener('click', function() {
    const newPrediction = getRandomPrediction();
    const newPercentage = Math.floor(Math.random() * 101);

    currentForecastTitle.textContent = newPrediction;
    currentForecastProbability.textContent = `Вероятность события: ${newPercentage}%`;

    const clone = document.importNode(forecastTemplate.content, true);
    clone.querySelector('h3').textContent = newPrediction;
    clone.querySelector('p').textContent = `Вероятность события: ${newPercentage}%`;
    forecastsList.prepend(clone);
});