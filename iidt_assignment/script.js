const colorDiv = document.getElementById('color');
const btn = document.getElementById('btn');

const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33F4', '#F4FF33',
    '#33FFF4', '#FF5733', '#33FF57', '#3357FF', '#FF33F4'
];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

btn.addEventListener('click', function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorDiv.textContent = randomColor;
    colorDiv.style.color = randomColor;
})