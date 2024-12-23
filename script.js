// Live Time
const timeDisplay = document.getElementById('time-display');
const timeZoneSelect = document.getElementById('time-zone');

function updateTime() {
  const timeZone = timeZoneSelect.value;
  const now = new Date().toLocaleTimeString('en-US', { timeZone });
  timeDisplay.textContent = now;
}
setInterval(updateTime, 1000);

// Countdown Timer
const timerInput = document.getElementById('timer-datetime');
const timerDisplay = document.getElementById('timer-display');
let countdownInterval;

document.getElementById('start-timer').addEventListener('click', () => {
  clearInterval(countdownInterval);
  const targetTime = new Date(timerInput.value).getTime();
  if (isNaN(targetTime)) return alert('Please set a valid date and time.');

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance <= 0) {
      clearInterval(countdownInterval);
      alert('Countdown finished!');
      timerDisplay.textContent = '00:00:00';
    } else {
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }, 1000);
});

document.getElementById('reset-timer').addEventListener('click', () => {
  clearInterval(countdownInterval);
  timerDisplay.textContent = '00:00:00';
  timerInput.value = '';
});

// Stopwatch
const stopwatchDisplay = document.getElementById('stopwatch-display');
let stopwatchInterval;
let stopwatchTime = 0;
let stopwatchRunning = false;

document.getElementById('start-stopwatch').addEventListener('click', () => {
  if (stopwatchRunning) return;
  stopwatchRunning = true;
  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    const minutes = Math.floor(stopwatchTime / 60);
    const seconds = stopwatchTime % 60;
    stopwatchDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
});

document.getElementById('stop-stopwatch').addEventListener('click', () => {
  stopwatchRunning = false;
  clearInterval(stopwatchInterval);
});

document.getElementById('reset-stopwatch').addEventListener('click', () => {
  stopwatchRunning = false;
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  stopwatchDisplay.textContent = '0:00';
});

// Weather (Static Data for Demonstration)
const weatherCity = document.getElementById('weather-city');
const weatherDescription = document.getElementById('weather-description');
const weatherTemp = document.getElementById('weather-temp');

document.getElementById('get-weather').addEventListener('click', () => {
  const city = document.getElementById('city').value.trim();
  if (!city) return alert('Please enter a city name.');

  // Simulating weather update
  weatherCity.textContent = `City: ${city}`;
  weatherDescription.textContent = 'Condition: Sunny';
  weatherTemp.textContent = 'Temperature: 25°C';
});

// News (Static Data for Demonstration)
const newsList = document.getElementById('news-list');

document.getElementById('fetch-news').addEventListener('click', () => {
  newsList.innerHTML = ''; // Clear previous news
  const dummyNews = [
    'Breaking: Local man achieves impossible!',
    'Weather today: Clear skies expected.',
    'Tech: New innovation changes everything!',
    'Sports: Your favorite team wins again!',
  ];

  dummyNews.forEach(news => {
    const li = document.createElement('li');
    li.textContent = news;
    newsList.appendChild(li);
  });
});

// Motivational Quotes
const quoteDisplay = document.getElementById('quote');
const quotes = [
  '"The best way to predict the future is to create it." – Peter Drucker',
  '"Do what you can, with what you have, where you are." – Theodore Roosevelt',
  '"Success is not the key to happiness. Happiness is the key to success." – Albert Schweitzer',
  '"Hardships often prepare ordinary people for an extraordinary destiny." – C.S. Lewis',
];

document.getElementById('new-quote').addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
});

// Theme Customization
const body = document.body;
document.getElementById('light-theme').addEventListener('click', () => {
  body.classList.remove('dark-mode');
});

document.getElementById('dark-theme').addEventListener('click', () => {
  body.classList.add('dark-mode');
});
