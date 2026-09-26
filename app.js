console.log('Nexus-Core Agent: System Ready.');

document.addEventListener('DOMContentLoaded', () => {
    // Simulate loading
    setTimeout(() => {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('ide-container').classList.remove('hidden');
    }, 1500);

    // Handle tab clicking & active state
    const activityButtons = document.querySelectorAll('#activity-bar button');
    activityButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            activityButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Terminal typing effect simulation
    const term = document.querySelector('.terminal-content');
    const msg = document.createElement('p');
    msg.textContent = '> [DEVFORGE] UI Engine Rendered. Ready for commands.';
    term.appendChild(msg);
});