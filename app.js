document.getElementById('bookBtn').addEventListener('click', () => {
    const pickup = document.getElementById('pickup').value;
    const dest = document.getElementById('dest').value;
    const statusDiv = document.getElementById('status');

    if (pickup && dest) {
        statusDiv.style.display = 'block';
        statusDiv.className = 'searching';
        statusDiv.innerText = 'Searching for a driver...';
        
        setTimeout(() => {
            statusDiv.className = 'confirmed';
            statusDiv.innerText = `Driver found! En route to ${pickup}.`;
        }, 3000);
    } else {
        alert('Please enter both locations.');
    }
});