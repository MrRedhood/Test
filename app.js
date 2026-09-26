document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal-output');
    const log = (msg) => {
        const p = document.createElement('p');
        p.textContent = `> ${msg}`;
        terminal.appendChild(p);
    };

    setTimeout(() => {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('ide-container').classList.remove('hidden');
        log('System Initialized.');
        log('Android Bridge: Connected.');
        log('Neural Engine: Optimized.');
    }, 2000);

    document.querySelectorAll('#activity-bar button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('#activity-bar button').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            log(`Action: ${e.currentTarget.textContent} triggered`);
        });
    });
});