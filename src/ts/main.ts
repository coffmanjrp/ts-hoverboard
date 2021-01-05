const container = document.getElementById('container') as HTMLDivElement;
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES = 500;

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(element: HTMLDivElement) {
  const el = element;

  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px  ${color}`;
}

function removeColor(element: HTMLDivElement) {
  const el = element;

  el.style.backgroundColor = '#1d1d1d';
  el.style.boxShadow = '0 0 2px rgba(0, 0, 0, 1)';
}

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}
