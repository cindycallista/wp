document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('flowerCanvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const petalCountSlider = document.getElementById('petalCount');
    const petalCountValue = document.getElementById('petalCountValue');
    const colorPicker = document.getElementById('color');

    function drawFlower(petalCount, petalColor) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const petalLength = 150;
        const petalWidth = 60;

        ctx.strokeStyle = 'darkred';
        ctx.lineWidth = 2;

        for (let i = 0; i < petalCount; i++) {
            ctx.beginPath();
            const angle = (i * 2 * Math.PI) / petalCount;
            const x1 = centerX + petalLength * Math.cos(angle);
            const y1 = centerY + petalLength * Math.sin(angle);
            const x2 = centerX + petalWidth * Math.cos(angle + Math.PI / 4);
            const y2 = centerY + petalWidth * Math.sin(angle + Math.PI / 4);
            const x3 = centerX + petalWidth * Math.cos(angle - Math.PI / 4);
            const y3 = centerY + petalWidth * Math.sin(angle - Math.PI / 4);

            const gradient = ctx.createLinearGradient(centerX, centerY, x1, y1);
            gradient.addColorStop(0, petalColor);
            gradient.addColorStop(1, 'white');
            ctx.fillStyle = gradient;

            ctx.moveTo(centerX, centerY);
            ctx.quadraticCurveTo(x2, y2, x1, y1);
            ctx.quadraticCurveTo(x3, y3, centerX, centerY);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }
        drawCenter();
    }

    function drawCenter() {
        const centerRadius = 40;
        const numberOfCircles = 12;
        const circleRadius = 5;

        ctx.fillStyle = 'yellow';
        for (let i = 0; i < numberOfCircles; i++) {
            const angle = (i * 2 * Math.PI) / numberOfCircles;
            const x = centerX + centerRadius * Math.cos(angle);
            const y = centerY + centerRadius * Math.sin(angle);
            ctx.beginPath();
            ctx.arc(x, y, circleRadius, 0, 2 * Math.PI, false);
            ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'orange';
        ctx.fill();
        ctx.stroke();
    }

    petalCountSlider.addEventListener('input', function () {
        petalCountValue.textContent = petalCountSlider.value;
        drawFlower(petalCountSlider.value, colorPicker.value);
    });

    colorPicker.addEventListener('input', function () {
        drawFlower(petalCountSlider.value, colorPicker.value);
    });

    drawFlower(petalCountSlider.value, colorPicker.value);
});
