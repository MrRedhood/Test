document.getElementById('bookBtn').addEventListener('click', () => {
    const pickup = document.getElementById('pickup').value.trim();
    const dest = document.getElementById('dest').value.trim();
    const type = document.getElementById('rideType').value;
    const statusDiv = document.getElementById('status');
    const btn = document.getElementById('bookBtn');

    if (!pickup || !dest) {
        alert('Please enter both pickup and destination locations.');
        return;
    }

    btn.disabled = true;
    btn.innerText = 'Searching...';
    statusDiv.style.display = 'block';
    statusDiv.className = 'searching';
    statusDiv.innerHTML = `<div>Searching for ${type} driver...</div><button id="cancelBtn" style="margin-top:10px; background:#ef4444;">Cancel</button>`;
    
    const timeout = setTimeout(() => {
        statusDiv.className = 'confirmed';
        statusDiv.innerHTML = `<div><strong>Driver Found!</strong><br>Your ${type} ride to ${dest} is arriving in 3 mins.</div>`;
        btn.disabled = false;
        btn.innerText = 'Request Another';
    }, 3000);

    document.getElementById('cancelBtn').addEventListener('click', () => {
        clearTimeout(timeout);
        statusDiv.style.display = 'none';
        btn.disabled = false;
        btn.innerText = 'Request Ride';
    });
});