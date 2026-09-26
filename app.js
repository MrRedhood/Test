document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const container = document.getElementById('ide-container');

    setTimeout(() => {
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.style.display = 'none';
            container.classList.remove('hidden');
        }, 500);
    }, 2000);

    window.renderView = (view) => {
        const buttons = document.querySelectorAll('#activity-bar button');
        buttons.forEach(b => b.classList.remove('active'));
        event.target.classList.add('active');
        
        const editor = document.getElementById('code-editor');
        editor.textContent = `// Current context: ${view.toUpperCase()}\n// Initializing stream...`;
        
        const prop = document.getElementById('prop-view');
        prop.textContent = `Loaded component: ${view.toUpperCase()}_CONTROLLER`;
    };
});