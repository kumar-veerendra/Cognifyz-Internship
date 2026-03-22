 // ─── 1. Color-Changing Button ───
    const colors = [
      { bg: '#00e676', text: '#0d0d0d', border: '#00e676' },
      { bg: '#ff1744', text: '#fff',    border: '#ff1744' },
      { bg: '#2979ff', text: '#fff',    border: '#2979ff' },
      { bg: '#ffea00', text: '#0d0d0d', border: '#ffea00' },
      { bg: '#e040fb', text: '#fff',    border: '#e040fb' },
      { bg: '#ff6d00', text: '#fff',    border: '#ff6d00' },
    ];
    let colorIdx = 0;
    const colorBtn = document.getElementById('color-btn');
    colorBtn.addEventListener('click', () => {
      colorIdx = (colorIdx + 1) % colors.length;
      const c = colors[colorIdx];
      colorBtn.style.background = c.bg;
      colorBtn.style.color = c.text;
      colorBtn.style.borderColor = c.border;
    });

    // ─── 2. Time-Based Greeting ───
    document.getElementById('greeting-btn').addEventListener('click', () => {
      const hour = new Date().getHours();
      let emoji, msg;
      if (hour >= 5 && hour < 12) {
        emoji = '🌅'; msg = 'Good Morning! Rise and code! ☕';
      } else if (hour >= 12 && hour < 17) {
        emoji = '☀️'; msg = 'Good Afternoon! Stay focused! 💪';
      } else if (hour >= 17 && hour < 21) {
        emoji = '🌇'; msg = 'Good Evening! Keep building! 🛠️';
      } else {
        emoji = '🌙'; msg = 'Good Night! Don\'t forget to rest! 😴';
      }
      const out = document.getElementById('greeting-output');
      out.innerHTML = `<span style="font-size:1.4rem">${emoji}</span> ${msg}`;
    });

    // ─── 3. Basic Calculator ───
    document.getElementById('calc-btn').addEventListener('click', () => {
      const a = parseFloat(document.getElementById('num1').value) || 0;
      const b = parseFloat(document.getElementById('num2').value) || 0;
      const result = a + b;
      const el = document.getElementById('calc-result');
      el.textContent = `= ${result}`;
      el.style.transform = 'scale(1.08)';
      setTimeout(() => el.style.transform = 'scale(1)', 200);
    });