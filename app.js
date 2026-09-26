const buttons = ['7','8','9','/','4','5','6','*','1','2','3','-','C','0','=','+'];
const orbit = document.getElementById('buttons-orbit');
const display = document.getElementById('display');
let current = '';

buttons.forEach((btn, i) => {
    const el = document.createElement('div');
    el.className = 'btn';
    el.innerText = btn;
    const angle = (i / buttons.length) * 2 * Math.PI;
    const radius = 175;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    el.style.transform = `translate(${x}px, ${y}px)`;
    el.onclick = () => {
        if (btn === 'C') current = '';
        else if (btn === '=') {
            try { current = eval(current).toString(); } catch { current = 'Err'; }
        } else current += btn;
        display.innerText = current.length > 8 ? current.substring(0, 8) : (current || '0');
    };
    orbit.appendChild(el);
});