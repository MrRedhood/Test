const buttons = ['7','8','9','/','4','5','6','*','1','2','3','-','C','0','=','+'];
const orbit = document.getElementById('buttons-orbit');
const display = document.getElementById('display');
let current = '';

buttons.forEach((btn, i) => {
    const el = document.createElement('div');
    el.className = 'btn';
    el.innerText = btn;
    const angle = (i / buttons.length) * 2 * Math.PI;
    const x = 200 + 180 * Math.cos(angle) - 25;
    const y = 200 + 180 * Math.sin(angle) - 25;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.onclick = () => {
        if (btn === 'C') current = '';
        else if (btn === '=') current = eval(current);
        else current += btn;
        display.innerText = current || '0';
    };
    orbit.appendChild(el);
});