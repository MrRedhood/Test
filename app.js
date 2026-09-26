document.getElementById('bookBtn').addEventListener('click', () => {
    const pickup = document.getElementById('pickup').value;
    const dest = document.getElementById('dest').value;
    const type = document.getElementById('rideType').value;
    const statusDiv = document.getElementById('status');
    const btn = document.getElementById('bookBtn');

    if (pickup && dest) {
        btn.disabled = true;
        btn.innerText = 'Processing...';
        statusDiv.style.display = 'block';
        statusDiv.className = 'searching';
        statusDiv.innerText = `Searching for ${type} driver...`;
        
        setTimeout(() => {
            statusDiv.className = 'confirmed';
            statusDiv.innerText = `Driver found! Your ${type} ride to ${dest} is on the way.`;
            btn.disabled = false;
            btn.innerText = 'Request Another';
        }, 3000);
    } else {
        alert('Please fill in all fields.');
    }
});