const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const DELAY = 1000;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const changeColors = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      let color = randomIntegerFromInterval(0, colors.length - 1);
      let randColor = colors[color];
      body.style.backgroundColor = randColor;
    }, DELAY);
  },

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
  },
};

startBtn.addEventListener('click', changeColors.start.bind(changeColors));
stopBtn.addEventListener('click', changeColors.stop.bind(changeColors));
