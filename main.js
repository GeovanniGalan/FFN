// main.js - Powers the Digital Rain and Dynamic Header

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Digital Rain Effect ---
    const canvas = document.getElementById('matrix-rain');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const alphabet = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops = Array.from({ length: columns }).map(() => 1);

    const drawRain = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00FF41'; // The rain canvas color is independent of the CSS theme
        ctx.font = fontSize + 'px VT323';
        for (let i = 0; i < rainDrops.length; i++) {
        // Only draw a character if a random number is greater than 0.9, creating a sparser effect
        if (Math.random() > 0.9) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        }

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
    };
    setInterval(drawRain, 20);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // --- System Date Updater for Header ---
    function updateSystemDate() {
        const dateElement = document.getElementById('system-date');
        if (dateElement) {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            dateElement.textContent = `[DATE: ${year}-${month}-${day}]`;
        }
    }
    updateSystemDate();
});